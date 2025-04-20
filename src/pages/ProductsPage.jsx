import { useState } from "react";
import ProductList from "../components/ProductList";
import FilterSidebar from "../components/FilterSidebar";
import { useSelector } from "react-redux";

const ProductPage = () => {

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });

  const products = useSelector((state) => state.products.products);

  const getFilteredProducts = () => {
    let filtered = products.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
      return matchesCategory && matchesPrice;
    });

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  };

  const getCategories = () => ['all', ...new Set(products.map((p) => p.category))];

  return (
    <div className="flex gap-8 relative max-md:gap-6 max-sm:flex-col max-sm:gap-4 px-4">
      <FilterSidebar
        categories={getCategories()}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <div className="flex-1">
        <ProductList products={getFilteredProducts()} />
      </div>
    </div>
  );
}

export default ProductPage;
