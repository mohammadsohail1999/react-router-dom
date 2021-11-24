import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addtoCart } from "../../features/Cart/CartSlice";

const ProductCard = ({ imgSrc, title, description, id, price }) => {
  // const { AddToCart } = useContext(CartContext);
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={title} subheader={`${price * 78} Rs`} />
      <CardMedia
        component="img"
        height="300px"
        sx={{
          objectFit: "contain",
        }}
        image={imgSrc}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description.length < 60 ? (
            description
          ) : (
            <>
              {`${description.substr(0, 60)}`}
              <Link to="/">...</Link>
            </>
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={(e) => {
            dispatch(
              addtoCart({
                imgSrc,
                title,
                price,
                quantity: 1,
                id,
              })
            );
          }}
        >
          Buy Now
        </Button>
        <Button size="small">More DeTails</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
