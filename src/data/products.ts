import { Product } from "@/types/product";
import product from "@/assets/product.png";
import product1 from "@/assets/product1.png";
import product2 from "@/assets/product2.png";
import product3 from "@/assets/product3.png";
import { getProducts } from "./productsService";

// Keep the existing products array as fallback data
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
    id: "2",
    name: "Artisanal Honey",
    name_ar: "عسل حرفي",
    category: "Honey",
    price: 1899,
    price_ar: 85,
    image: product1,
    description:
      "Pure organic honey sourced from the finest apiaries, with a rich golden color and smooth texture.",
    description_ar: "عسل عضوي خالص من أفضل المصانع، بلون ذهبي غني وملمس ناعم.",
    inStock: true,
    weight: "500ml",
  },
  {
    id: "3",
    name: "Ramadan Celebration Hamper",
    name_ar: "سلة احتفالات رمضان",
    category: "Gift Hampers",
    price: 7999,
    price_ar: 360,
    originalPrice: 9999,
    originalPrice_ar: 450,
    image: product2,
    description:
      "Luxurious festive hamper containing premium dates, chocolates, dry fruits, and traditional sweets.",
    description_ar:
      "سلة احتفالات فاخرة تحتوي على تمور فاخرة، شوكولاتة، فواكه مجففة، وحلويات تقليدية.",
    inStock: true,
    badge: "Limited Edition",
    sizes: [
      { label: "Standard", label_ar: "قياسي", price: 7999, price_ar: 360 },
      { label: "Premium", label_ar: "فاخر", price: 12999, price_ar: 590 },
      { label: "Royal", label_ar: "ملكي", price: 19999, price_ar: 900 },
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
  {
    id: "6",
    name: "Corporate Gift Set",
    name_ar: "مجموعة الهدايا المؤسسية",
    category: "Gift Hampers",
    price: 15999,
    price_ar: 720,
    image: product1,
    description:
      "Premium corporate gifting solution with customizable packaging and personalized messages.",
    description_ar:
      "حل الهدايا المؤسسية الفاخر مع تغليف قابل للتخصيص ورسائل شخصية.",
    inStock: true,
    badge: "Corporate",
    sizes: [
      { label: "Executive", label_ar: "تنفيذي", price: 15999, price_ar: 720 },
      { label: "Director", label_ar: "مدير", price: 24999, price_ar: 1125 },
      { label: "Chairman", label_ar: "رئيس", price: 39999, price_ar: 1800 },
    ],
  },
  {
    id: "7",
    name: "Organic Raw Honey",
    name_ar: "عسل عضوي خام",
    category: "Honey",
    price: 2299,
    price_ar: 105,
    image: product2,
    description: "Unprocessed raw honey with natural enzymes and antioxidants.",
    description_ar: "عسل خام غير معالج مع إنزيمات طبيعية ومضادات الأكسدة.",
    inStock: true,
    weight: "750ml",
  },
  {
    id: "8",
    name: "Assorted Dry Fruits",
    name_ar: "تشكيلة مكسرات وفواكه مجففة",
    category: "Dry Fruits",
    price: 3799,
    price_ar: 170,
    image: product3,
    description:
      "Premium quality almonds, cashews, pistachios, and walnuts in an elegant presentation.",
    description_ar:
      "جودة فاخرة من اللوز والفستق وال pistachios والجوز في عرض أنيق.",
    inStock: true,
    weight: "500g",
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
    return cachedProducts;
  } catch (error) {
    console.warn("Failed to fetch products, using local data:", error);
    cachedProducts = products;
    return cachedProducts;
  }
};

// For backward compatibility, still export the original products array
export const featuredProducts = products.filter((p) =>
  ["1", "3", "4"].includes(p.id)
);
export const bestSellers = products.filter(
  (p) => p.badge === "Bestseller" || ["1", "3", "5"].includes(p.id)
);
export const ramadanCollection = products.filter(
  (p) => p.category === "Gift Hampers" || p.badge === "Limited Edition"
);
