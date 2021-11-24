import React from "react";
import { useParams } from "react-router-dom";
import Products from "../../components/Products/Products";

const Category = () => {
  const params = useParams();

  return (
    <>
      <Products category={params.category} />
    </>
  );
};

export default Category;
