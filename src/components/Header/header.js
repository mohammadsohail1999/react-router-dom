import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { Badge } from "@mui/material";

import { getAuthState, logout } from "../../features/Auth/AuthSlice";
import { getCartState } from "../../features/Cart/CartSlice";

export default function ButtonAppBar() {
  const cartState = useSelector(getCartState);
  const authState = useSelector(getAuthState);

  const dispatch = useDispatch();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button component={Link} to="/" color="inherit">
              E-commerce
            </Button>
          </Typography>

          {authState.auth ? (
            <>
              <Box sx={{ display: { md: "flex" } }}>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/cart"
                  >
                    <Badge badgeContent={cartState.cart.length} color="error">
                      <ShoppingCartIcon />
                    </Badge>
                  </Link>
                </IconButton>
              </Box>
              <Button
                onClick={() => {
                  dispatch(logout());
                }}
                color="inherit"
              >
                LogOut
              </Button>
            </>
          ) : (
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
