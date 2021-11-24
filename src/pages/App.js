import React from "react";
import "../index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header/header";
import Login from "./Login/Login";
import Container from "@mui/material/Container";
import Home from "./Home/Home";
import ProtectedRoute from "../components/ProtectRoutes/ProtectedRoute";

import Categories from "./Categories/Categories";
import Category from "./Categories/Category";
import Products from "../components/Products/Products";
import Cart from "../components/cartItems/Cart";

const App = () => {
  return (
    <Router>
      <Header />

      <Container maxWidth="xl">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          {/* v5 impelmentation */}
          {/* <ProtectedRoute path="/">
            <Home />
          </ProtectedRoute> */}
          <Route path="login" element={<Login />} />

          {/* <ProtectedRoute path="categories" element={<Categories />}>
            <Route index element={<Products />} />
            <Route path=":category" element={<Category />} />
          </ProtectedRoute> */}

          <Route
            path="categories"
            element={
              <ProtectedRoute>
                <Categories />
              </ProtectedRoute>
            }
          >
            <Route index element={<Products />} />
            <Route path=":category" element={<Category />} />
          </Route>

          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
