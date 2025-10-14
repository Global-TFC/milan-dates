import { Product } from "@/types/product";
import product from "@/assets/product.png";
import product1 from "@/assets/product1.png";
import product2 from "@/assets/product2.png";
import product3 from "@/assets/product3.png";
import { getProducts } from "./productsService";

// Keep the existing products array as fallback data - only dates products
export const products: Product[] = [
  {
    id: "1",
    name: "Premium Chocolate Dates",
    name_ar: "تمور شوكولاتة فاخرة",
    category: "Dates",
    price: 2499,
    price_ar: 115,
    originalPrice: 2999,
    originalPrice_ar: 140,
    image: product,
    description:
      "Hand-selected Medjool dates covered in Belgian dark chocolate, perfect for gifting.",
    description_ar:
      "تمور مجدول مختارة يدوياً مغطاة بالشوكولاتة Belgi dark، مثالية للهدايا.",
    inStock: true,
    badge: "Bestseller",
    weight: "250g",
    sizes: [
      { label: "250g", label_ar: "250 جرام", price: 2499, price_ar: 115 },
      { label: "500g", label_ar: "500 جرام", price: 4599, price_ar: 210 },
      { label: "1kg", label_ar: "1 كيلو جرام", price: 8999, price_ar: 410 },
    ],
  },
  {
    id: "4",
    name: "Stuffed Dates Collection",
    name_ar: "تشكيلة التمور المحشوة",
    category: "Dates",
    price: 3299,
    price_ar: 150,
    image: product3,
    description:
      "Exquisite dates stuffed with almonds, pistachios, and cashews, presented in an elegant box.",
    description_ar:
      "تمور راقية محشوة باللوز وال pistachios والفستق، مقدمة في علبة أنيقة.",
    inStock: true,
    badge: "New",
    weight: "400g",
  },
  {
    id: "5",
    name: "Royal Date Box",
    name_ar: "علبة التمور الملكية",
    category: "Dates",
    price: 4599,
    price_ar: 210,
    originalPrice: 5499,
    originalPrice_ar: 250,
    image: product,
    description:
      "A curated selection of our finest dates in a signature gift box.",
    description_ar: "مجموعة مختارة من أجود التمور في علبة هدايا مميزة.",
    inStock: true,
    weight: "600g",
  },
];

// Export products using the new service
let cachedProducts: Product[] | null = null;

export const getProductsData = async (): Promise<Product[]> => {
  if (cachedProducts) {
    return cachedProducts;
  }

  try {
    // Try to fetch from Google Sheets
    cachedProducts = await getProducts();
    // Filter to only include dates products
    cachedProducts = cachedProducts.filter(p => p.category === "Dates");
    return cachedProducts;
  } catch (error) {
    console.warn("Failed to fetch products, using local data:", error);
    cachedProducts = products;
    return cachedProducts;
  }
};

// For backward compatibility, still export the original products array
export const featuredProducts = products.filter((p) =>
  ["1", "4", "5"].includes(p.id)
);
export const bestSellers = products.filter(
  (p) => p.badge === "Bestseller" || ["1", "4", "5"].includes(p.id)
);
export const ramadanCollection = products.filter(
  (p) => p.category === "Dates"
);
