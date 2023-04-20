import React from "react";
import ProductCard from "./ProductCard";
import ProductsLoader from "./ProductsLoader";
import useGetProducts from "../../hooks/useGetProducts";


const ProductGrid = () => {
  const products = useGetProducts();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mx-2">
      {products.length === 0 ? (
        <ProductsLoader count={12} />
      ) : (
        <>
          {products.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              brand={item.brand}
              imgUrl={item.api_featured_image}
              price={item.price}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ProductGrid;
