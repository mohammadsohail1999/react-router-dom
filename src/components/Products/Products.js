import { Box, CircularProgress, Grid } from "@mui/material";
import React, { useEffect } from "react";
// import IconBreadcrumbs from "../../components/BreadCrumb/BreadCrumb";
import ProductCard from "../../components/Cards/Card";

import { useSelector } from "react-redux";
import {
  getProductState,
  getAllProducts,
  getProductsbyId,
} from "../../features/Products/ProductSlice";
import { useDispatch } from "react-redux";

const Products = ({ category }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (category) {
      dispatch(getProductsbyId(category));
    } else {
      dispatch(getAllProducts());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);
  const { products, loading } = useSelector(getProductState);

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            height: "300px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid
          sx={{
            marginTop: "50px",
          }}
          container
          spacing={2}
          columns={16}
        >
          {products.length > 0 &&
            products.map(({ title, description, id, price, image }, i) => {
              return (
                <Grid
                  item
                  sm={16}
                  md={8}
                  lg={4}
                  key={id}
                  justifyContent="center"
                  display="flex"
                >
                  <ProductCard
                    title={title}
                    description={description}
                    id={id}
                    price={price}
                    imgSrc={image}
                  />
                </Grid>
              );
            })}
        </Grid>
      )}
    </>
  );
};

export default Products;
