import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-md:gap-6 max-md:grid-cols-[repeat(auto-fit,minmax(260px,1fr))] max-sm:gap-5 max-sm:grid-cols-[1fr]">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;