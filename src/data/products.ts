import { Product } from '@/types/product';
import chocolateDates from '@/assets/chocolate-dates.jpg';
import honeyJar from '@/assets/honey-jar.jpg';
import diwaliHamper from '@/assets/diwali-hamper.jpg';
import stuffedDates from '@/assets/stuffed-dates.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Chocolate Dates',
    category: 'Dates',
    price: 2499,
    originalPrice: 2999,
    image: chocolateDates,
    description: 'Hand-selected Medjool dates covered in Belgian dark chocolate, perfect for gifting.',
    inStock: true,
    badge: 'Bestseller',
    weight: '250g',
    sizes: [
      { label: '250g', price: 2499 },
      { label: '500g', price: 4599 },
      { label: '1kg', price: 8999 }
    ]
  },
  {
    id: '2',
    name: 'Artisanal Honey',
    category: 'Honey',
    price: 1899,
    image: honeyJar,
    description: 'Pure organic honey sourced from the finest apiaries, with a rich golden color and smooth texture.',
    inStock: true,
    weight: '500ml'
  },
  {
    id: '3',
    name: 'Diwali Celebration Hamper',
    category: 'Gift Hampers',
    price: 7999,
    originalPrice: 9999,
    image: diwaliHamper,
    description: 'Luxurious festive hamper containing premium dates, chocolates, dry fruits, and traditional sweets.',
    inStock: true,
    badge: 'Limited Edition',
    sizes: [
      { label: 'Standard', price: 7999 },
      { label: 'Premium', price: 12999 },
      { label: 'Royal', price: 19999 }
    ]
  },
  {
    id: '4',
    name: 'Stuffed Dates Collection',
    category: 'Dates',
    price: 3299,
    image: stuffedDates,
    description: 'Exquisite dates stuffed with almonds, pistachios, and cashews, presented in an elegant box.',
    inStock: true,
    badge: 'New',
    weight: '400g'
  },
  {
    id: '5',
    name: 'Royal Date Box',
    category: 'Dates',
    price: 4599,
    originalPrice: 5499,
    image: chocolateDates,
    description: 'A curated selection of our finest dates in a signature gift box.',
    inStock: true,
    weight: '600g'
  },
  {
    id: '6',
    name: 'Corporate Gift Set',
    category: 'Gift Hampers',
    price: 15999,
    image: diwaliHamper,
    description: 'Premium corporate gifting solution with customizable packaging and personalized messages.',
    inStock: true,
    badge: 'Corporate',
    sizes: [
      { label: 'Executive', price: 15999 },
      { label: 'Director', price: 24999 },
      { label: 'Chairman', price: 39999 }
    ]
  },
  {
    id: '7',
    name: 'Organic Raw Honey',
    category: 'Honey',
    price: 2299,
    image: honeyJar,
    description: 'Unprocessed raw honey with natural enzymes and antioxidants.',
    inStock: true,
    weight: '750ml'
  },
  {
    id: '8',
    name: 'Assorted Dry Fruits',
    category: 'Dry Fruits',
    price: 3799,
    image: stuffedDates,
    description: 'Premium quality almonds, cashews, pistachios, and walnuts in an elegant presentation.',
    inStock: true,
    weight: '500g'
  }
];

export const featuredProducts = products.filter(p => ['1', '3', '4'].includes(p.id));
export const bestSellers = products.filter(p => p.badge === 'Bestseller' || ['1', '3', '5'].includes(p.id));
export const diwaliCollection = products.filter(p => p.category === 'Gift Hampers' || p.badge === 'Limited Edition');