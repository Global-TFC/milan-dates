export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  inStock: boolean;
  badge?: string;
  weight?: string;
  sizes?: Array<{
    label: string;
    price: number;
  }>;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}