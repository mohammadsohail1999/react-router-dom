import { Box, Chip, Stack } from "@mui/material";
import React, { useEffect } from "react";
import IconBreadcrumbs from "../../components/BreadCrumb/BreadCrumb";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCategories,
  getCategoryState,
} from "../../features/Categories/CategorySlice";
import { NavLink, Outlet } from "react-router-dom";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(getCategoryState);

  console.log(categories);

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

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
        {categories.length > 0 && (
          <>
            {" "}
            <Stack marginTop="2rem" direction="row" spacing={2}>
              {categories.map((el) => (
                <NavLink
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    transform: isActive ? "scale(1.2)" : "scale(1)",
                  })}
                  to={`/categories/${el}`}
                  key={el}
                >
                  <Chip icon={<LocalOfferIcon />} color="primary" label={el} />
                </NavLink>
              ))}
            </Stack>
          </>
        )}

        <Outlet />
      </Box>
    </>
  );
};

export default Categories;
