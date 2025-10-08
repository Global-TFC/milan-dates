import Papa from 'papaparse';
import { Product } from '@/types/product';
// Import local assets
import product from '@/assets/product.png';
import product1 from '@/assets/product1.png';
import product2 from '@/assets/product2.png';
import product3 from '@/assets/product3.png';

// Google Sheets CSV URL
const GOOGLE_SHEETS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRFzLx7o19hO8pc3iBPmGWoILq4ddsaeg6uVQH8NdDzIuXDvFqJbc0q9Om4MNjVL3lGTaQ3NC5p0urd/pub?gid=0&single=true&output=csv';

// Define the structure of a row from the CSV
interface CsvRow {
  id: string;
  name: string;
  name_ar?: string;
  category: string;
  price: string;
  originalPrice?: string;
  image: string;
  description: string;
  description_ar?: string;
  inStock: string;
  badge?: string;
  weight?: string;
  [key: string]: string | undefined; // For dynamic size fields
}

// Map product IDs to local assets
const productImageMap: Record<string, string> = {
  '1': product,
  '2': product2,
  '3': product3,
  '4': product,
  '5': product1,
  '6': product2,
  '7': product3,
  '8': product
};

// Function to fetch products from Google Sheets
export const fetchProductsFromGoogleSheets = async (): Promise<Product[]> => {
  try {
    const response = await fetch(GOOGLE_SHEETS_CSV_URL);
    const csvText = await response.text();
    
    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          try {
            const products: Product[] = results.data
              .filter((row: CsvRow) => row.id) // Filter out empty rows
              .map((row: CsvRow) => {
                // Parse basic product information
                const product: Product = {
                  id: row.id,
                  name: row.name,
                  category: row.category,
                  price: parseInt(row.price) || 0,
                  // Use local assets instead of Google Sheets image URLs
                  image: productImageMap[row.id],
                  description: row.description,
                  inStock: row.inStock?.toLowerCase() === 'true' || row.inStock === '1',
                  weight: row.weight || undefined,
                  badge: row.badge || undefined,
                };
                
                // Add Arabic translations if available
                if (row.name_ar) product.name_ar = row.name_ar;
                if (row.description_ar) product.description_ar = row.description_ar;
                if (row.originalPrice) product.originalPrice = parseInt(row.originalPrice);
                
                // Handle sizes if available
                const sizes = [];
                for (let i = 1; i <= 5; i++) {
                  const label = row[`size${i}_label`];
                  const label_ar = row[`size${i}_label_ar`];
                  const price = row[`size${i}_price`];
                  
                  if (label && price) {
                    sizes.push({
                      label,
                      price: parseInt(price),
                      ...(label_ar && { label_ar })
                    });
                  }
                }
                
                if (sizes.length > 0) {
                  product.sizes = sizes;
                }
                
                return product;
              });
            
            resolve(products);
          } catch (error) {
            reject(error);
          }
        },
        error: (error) => {
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error('Error fetching products from Google Sheets:', error);
    throw error;
  }
};

// Function to get products (from Google Sheets or fallback to local data)
export const getProducts = async (): Promise<Product[]> => {
  try {
    // Try to fetch from Google Sheets first
    const products = await fetchProductsFromGoogleSheets();
    return products;
  } catch (error) {
    // If Google Sheets fails, fallback to local data
    console.warn('Failed to fetch products from Google Sheets, using local data:', error);
    // We'll import the local data inside the catch block to avoid circular dependencies
    const { products: localProducts } = await import('./products');
    return localProducts;
  }
};