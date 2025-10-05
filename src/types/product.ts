export interface Product {
  id: string;
  name: string;
  name_ar?: string;
  category: string;
  price: number;
  price_ar?: number;
  originalPrice?: number;
  originalPrice_ar?: number;
  image: string;
  description: string;
  description_ar?: string;
  inStock: boolean;
  badge?: string;
  weight?: string;
  sizes?: Array<{
    label: string;
    label_ar?: string;
    price: number;
    price_ar?: number;
  }>;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}