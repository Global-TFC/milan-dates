import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { products, ramadanCollection } from '@/data/products';
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

const Shop = () => {
  const { category, collection } = useParams();
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(products.map(p => p.category));
    return Array.from(cats);
  }, []);

  // Filter products based on route and filters
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Route-based filtering
    if (collection === 'ramadan') {
      filtered = ramadanCollection;
    } else if (category) {
      const categoryMap: Record<string, string> = {
        'dates': 'Dates',
        'chocolates': 'Chocolates',
        'honey': 'Honey',
        'hampers': 'Gift Hampers',
      };
      filtered = products.filter(p => p.category === categoryMap[category]);
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(p => selectedCategories.includes(p.category));
    }

    // Price filter
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }, [category, collection, selectedCategories, priceRange, sortBy]);

  const pageTitle = collection === 'ramadan' 
    ? 'Ramadan Collection'
    : category 
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : 'All Products';

  const pageDescription = collection === 'ramadan'
    ? 'Exclusive Ramadan collection featuring premium dates, gift hampers, and artisanal treats perfect for Iftar and Eid celebrations.'
    : category
    ? `Browse our selection of premium ${category}. Hand-selected luxury products for gifting and personal indulgence.`
    : 'Shop our complete collection of luxury gourmet dates, artisanal chocolates, premium honey, and elegant gift hampers.';

  return (
    <div className="min-h-screen bg-background py-8">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords={`${pageTitle}, luxury dates, premium ${category || 'products'}, gourmet gifts`}
      />
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-playfair font-bold mb-2">{pageTitle}</h1>
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} products
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-6 shadow-soft sticky top-24">
              <div className="flex items-center space-x-2 mb-4">
                <Filter className="h-5 w-5" />
                <h3 className="font-semibold">Filters</h3>
              </div>

              <Separator className="mb-6" />

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <div key={cat} className="flex items-center space-x-2">
                      <Checkbox
                        id={cat}
                        checked={selectedCategories.includes(cat)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedCategories([...selectedCategories, cat]);
                          } else {
                            setSelectedCategories(selectedCategories.filter(c => c !== cat));
                          }
                        }}
                      />
                      <Label htmlFor={cat} className="text-sm cursor-pointer">
                        {cat}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  <Button
                    variant={priceRange[1] === 2500 ? "default" : "outline"}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => setPriceRange([0, 2500])}
                  >
                    Under ₹2,500
                  </Button>
                  <Button
                    variant={priceRange[0] === 2500 && priceRange[1] === 5000 ? "default" : "outline"}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => setPriceRange([2500, 5000])}
                  >
                    ₹2,500 - ₹5,000
                  </Button>
                  <Button
                    variant={priceRange[0] === 5000 && priceRange[1] === 10000 ? "default" : "outline"}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => setPriceRange([5000, 10000])}
                  >
                    ₹5,000 - ₹10,000
                  </Button>
                  <Button
                    variant={priceRange[0] === 10000 ? "default" : "outline"}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => setPriceRange([10000, 50000])}
                  >
                    Above ₹10,000
                  </Button>
                </div>
              </div>

              {/* Clear Filters */}
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setSelectedCategories([]);
                  setPriceRange([0, 50000]);
                }}
              >
                Clear All Filters
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort and View Options */}
            <div className="flex items-center justify-between mb-6">
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
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
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
                <p className="text-muted-foreground">No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;