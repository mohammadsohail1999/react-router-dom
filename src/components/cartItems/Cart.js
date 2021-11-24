import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";

import DeleteIcon from "@mui/icons-material/Delete";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartState,
  removeCartItem,
  updateCartItem,
} from "../../features/Cart/CartSlice";
import Avatar from "@mui/material/Avatar";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Cart() {
  const { cart } = useSelector(getCartState);

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(removeCartItem(id));
  };

  const changeHandler = (obj, quantity) => {
    dispatch(
      updateCartItem({
        ...obj,
        quantity,
      })
    );
  };
  // console.log(Array.apply(null, Array(10)));

  if (!cart.length) {
    return (
      <>
        <Box sx={{ marginTop: "3rem" }}>
          <Typography variant="h2" color="white">
            No Cart Items present.
          </Typography>
        </Box>
      </>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, alignItems: "center", marginTop: "3rem" }}>
      <Grid container spacing={2}>
        <Grid item md={8} xs={6}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((cart) => (
                  <TableRow
                    key={cart.title}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Avatar alt={cart.title} src={cart.imgSrc} />
                    </TableCell>
                    <TableCell align="left">{cart.title}</TableCell>
                    <TableCell align="right">
                      {Math.floor(cart.quantity * cart.price).toFixed(2)}
                    </TableCell>
                    <TableCell align="right">
                      <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <Select
                          labelId="demo-simple-select-autowidth-label"
                          id="demo-simple-select-autowidth"
                          value={cart.quantity}
                          onChange={(e) => {
                            changeHandler(cart, e.target.value);
                          }}
                          autoWidth
                        >
                          {Array.apply(null, Array(10)).map((el, i) => {
                            return (
                              <MenuItem key={i} value={i + 1}>
                                {i + 1}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton aria-label="delete">
                        <DeleteIcon
                          onClick={() => {
                            deleteHandler(cart.id);
                          }}
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card>
            <CardHeader title="PRICE DETAILS" />
            <CardContent>
              <Typography variant="h6">
                ITEMS(
                {cart.reduce((prev, initial) => {
                  return prev + initial.quantity;
                }, 0)}
                )
              </Typography>
              <Typography variant="h2">Price:</Typography>

              <Typography variant="h3" component="h3">
                {cart.reduce((prev, el) => {
                  return prev + Math.floor(el.price * el.quantity);
                }, 0)}{" "}
                Rs
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
