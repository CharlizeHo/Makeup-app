import React from "react";
import useGetTopProducts from "../../hooks/useGetTopProducts";
import ProductCard from "../ProductComponents/ProductCard";
import ButtonLink from "../ButtonLinks";
import ProductsLoader from "../ProductComponents/ProductsLoader";

const TopProducts = () => {
  const products = useGetTopProducts();

  return (
    <div className="max-w-screen-xl mt-4 mx-auto px-4 md:px-12 pb-6">
      {/* Container */}
      <div className="">
        {/* Layout */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Top Products</h1>
          <ButtonLink
            path="/products"
            text="See More"
            className="btn px-5 mt-none"
          />
        </div>
        {/* Products */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-2 ml-2">
          {products.length === 0 ? (
            <ProductsLoader count={4}/>
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
      </div>
    </div>
  );
};

export default TopProducts;
