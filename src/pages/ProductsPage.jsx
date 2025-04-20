import { useState } from "react";
import ProductList from "../components/ProductList";

const ProductPage = ({ products }) => {

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  const getCategories = () => ['all', ...new Set(products.map((p) => p.category))];

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default ProductPage;
