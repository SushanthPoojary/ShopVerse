import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {

  const products = useSelector((state) => state.products.products);

  return (
    <section className="max-w-[1440px] mx-auto px-[24px] py-[64px]">
      <h3 className="text-[32px] font-bold mb-[32px]">Featured Products</h3>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-[32px]">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
