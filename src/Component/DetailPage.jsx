import React from "react";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation();
  const { product } = location.state || {};

  return (
    <div>
      <h1>{product?.name}</h1>
      <p>Category: {product?.category}</p>
      <p>Color: {product?.color}</p>
      <p>Description: {product?.description}</p>
      <p>Price: ${product?.price}</p>
    </div>
  );
};

export default DetailPage;
