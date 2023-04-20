import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductsLoader = ({count}) => {
  return (
    <>
      {[...Array(count).keys()].map((item) => (
        <div key={item} className="">
          <Skeleton height={220} />
          <Skeleton height={35}/>
          <Skeleton height={30} />
        </div>
      ))}
    </>
  );
};

export default ProductsLoader;
