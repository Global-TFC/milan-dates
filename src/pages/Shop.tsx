import { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsData } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Filter, Grid, List } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useTranslation } from 'react-i18next';
import { Product } from '@/types/product';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

const Shop = () => {
  const { category, collection } = useParams();
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const currentLanguage = i18n.language;

  // Load products on component mount
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const fetchedProducts = await getProductsData();
        setProducts(fetchedProducts);
        setError(null);
      } catch (err) {
        console.error('Error loading products:', err);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Filter products to only show dates (this is now redundant as data layer already filters)
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(p => p.category === "Dates");

    // Price filter
    filtered = filtered.filter(p => {
      const price = isArabic && p.price_ar ? p.price_ar : p.price;
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => {
          const priceA = isArabic && a.price_ar ? a.price_ar : a.price;
          const priceB = isArabic && b.price_ar ? b.price_ar : b.price;
          return priceA - priceB;
        });
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => {
          const priceA = isArabic && a.price_ar ? a.price_ar : a.price;
          const priceB = isArabic && b.price_ar ? b.price_ar : b.price;
          return priceB - priceA;
        });
        break;
      case 'name':
        // Sort by Arabic name if Arabic is selected, otherwise by English name
        filtered = [...filtered].sort((a, b) => {
          const nameA = isArabic ? (a.name_ar || a.name) : a.name;
          const nameB = isArabic ? (b.name_ar || b.name) : b.name;
          return nameA.localeCompare(nameB);
        });
        break;
    }

    return filtered;
  }, [products, priceRange, sortBy, isArabic]);

  const pageTitle = isArabic ? 'جميع المنتجات' : 'All Products';
  const pageDescription = isArabic ? 'تسوق مجموعتنا الكاملة من التمور الفاخرة.' : 'Shop our complete collection of luxury gourmet dates.';

  // Filter component without category filtering
  const FilterComponent = () => (
    <div className="bg-card rounded-lg p-6 shadow-soft">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="h-5 w-5" />
        <h3 className="font-semibold">{isArabic ? 'الفلاتر' : 'Filters'}</h3>
      </div>

      <Separator className="mb-6" />

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">{isArabic ? 'نطاق السعر' : 'Price Range'}</h4>
        <div className="space-y-2">
          <Button
            variant={priceRange[1] === 2500 ? "default" : "outline"}
            size="sm"
            className="w-full justify-start"
            onClick={() => setPriceRange([0, 2500])}
          >
            {isArabic ? `أقل من ${2500} ${currentLanguage === 'ar' ? 'SAR' : '₹'}` : `Under ${2500} ${currentLanguage === 'ar' ? 'SAR' : '₹'}`}
          </Button>
          <Button
            variant={priceRange[0] === 2500 && priceRange[1] === 5000 ? "default" : "outline"}
            size="sm"
            className="w-full justify-start"
            onClick={() => setPriceRange([2500, 5000])}
          >
            {2500} - {5000} {currentLanguage === 'ar' ? 'SAR' : '₹'}
          </Button>
          <Button
            variant={priceRange[0] === 5000 && priceRange[1] === 10000 ? "default" : "outline"}
            size="sm"
            className="w-full justify-start"
            onClick={() => setPriceRange([5000, 10000])}
          >
            {5000} - {10000} {currentLanguage === 'ar' ? 'SAR' : '₹'}
          </Button>
          <Button
            variant={priceRange[0] === 10000 ? "default" : "outline"}
            size="sm"
            className="w-full justify-start"
            onClick={() => setPriceRange([10000, 50000])}
          >
            {isArabic ? `أكثر من ${10000} ${currentLanguage === 'ar' ? 'SAR' : '₹'}` : `Above ${10000} ${currentLanguage === 'ar' ? 'SAR' : '₹'}`}
          </Button>
        </div>
      </div>

      {/* Clear Filters */}
      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          setPriceRange([0, 50000]);
        }}
      >
        {isArabic ? 'مسح جميع الفلاتر' : 'Clear All Filters'}
      </Button>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading products...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <p className="text-muted-foreground">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords={`${pageTitle}, luxury dates, premium dates, gourmet gifts, Milan Dates, Ajwa Dates, Medjool Dates, Segai Dates, Mabroom, Ramadan gifts`}
      />
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-playfair font-bold mb-2">{pageTitle}</h1>
          <p className="text-muted-foreground">
            {isArabic ? `عرض ${filteredProducts.length} منتج` : `Showing ${filteredProducts.length} products`}
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar - Hidden on mobile, visible on desktop */}
          <div className="lg:col-span-1 hidden lg:block">
            <FilterComponent />
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort and View Options */}
            <div className="flex items-center justify-between mb-6">
              {/* Mobile Filter Button */}
              <div className="lg:hidden">
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant="outline" className="flex items-center space-x-2">
                      <Filter className="h-4 w-4" />
                      <span>{isArabic ? 'الفلاتر' : 'Filters'}</span>
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>{isArabic ? 'الفلاتر' : 'Filters'}</DrawerTitle>
                      <DrawerDescription>{isArabic ? 'قم بتصفية المنتجات حسب السعر' : 'Filter products by price'}</DrawerDescription>
                    </DrawerHeader>
                    <div className="px-4">
                      <FilterComponent />
                    </div>
                    <DrawerFooter className="px-4">
                      <DrawerClose asChild>
                        <Button>{isArabic ? 'تطبيق الفلاتر' : 'Apply Filters'}</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={isArabic ? 'ترتيب حسب' : 'Sort by'} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">{isArabic ? 'مميز' : 'Featured'}</SelectItem>
                  <SelectItem value="name">{isArabic ? 'الاسم' : 'Name'}</SelectItem>
                  <SelectItem value="price-low">{isArabic ? 'السعر: من الأقل للأعلى' : 'Price: Low to High'}</SelectItem>
                  <SelectItem value="price-high">{isArabic ? 'السعر: من الأعلى للأقل' : 'Price: High to Low'}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">{isArabic ? 'لم يتم العثور على منتجات مطابقة لفلاترك.' : 'No products found matching your filters.'}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;