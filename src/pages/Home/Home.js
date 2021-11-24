import { Box } from "@mui/system";
import React from "react";
import IconBreadcrumbs from "../../components/BreadCrumb/BreadCrumb";
import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          heigth: "100%",
          marginTop: "30px",
        }}
      >
        <IconBreadcrumbs />

        <Products />
      </Box>
    </>
  );
};

export default Home;
