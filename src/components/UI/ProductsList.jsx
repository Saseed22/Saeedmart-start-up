import React from "react";
import ProductsCard from "./ProductsCard";

const ProductsList = ({ data }) => {
  return (
    <>
      {data?.map((item,i) => (
        <ProductsCard item={item} key={i} />
      ))}
    </>
  );
};

export default ProductsList;
