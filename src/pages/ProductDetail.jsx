import React, { useMemo, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  styled,
  Box,
  Grid,
  Container,
  Paper,
  Stack,
  Typography,
  Alert,
  Snackbar,
  Slide,
} from "@mui/material";
import { ArrowBack, AddShoppingCart, ShoppingCartCheckout } from "@mui/icons-material";
import { api } from "../store/api";
import { makeStyles } from "@mui/styles";
import RelativeProduct from "../components/relativeproduct_remax/RelativeProduct";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../store/action/cartProcessAction";

const useStyled = makeStyles({
  img: {
    width: "100%",
    objectFit: "cover",
  },
  button: {
    textTransform: "capitalize",
    marginLeft: "10px",
  },
});

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

const ProductDetail = () => {
  const classes = useStyled();
  //get special product data from url
  const { productName, productId } = useParams();
  const productDetail = api.filter((data) => data.id == productId);

  const { img, title, price, cat, detail, name, id } = productDetail[0];

  //get cart data to add product to card from store
  const { cartProducts } = useSelector((state) => state);
  const dispatch = useDispatch();

  // to triggle message bar when click add to cart
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);

    //: add product data to cart
    dispatch(addToCartAction(productDetail[0]));
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  //ux  (scroll top ) for when user click product card from relative item to view detail
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [productId]);

  //:check if product is exist in cart or not
  const isAlreadyExit = cartProducts.products.some((data) => data.id == id);

  //to navigate back url
  let nav = useNavigate();
  const Back = () => {
    nav(-1);
  };

  return (
    <Container sx={{ maxWidth: "900px !important" }}>
      <Button
        onClick={Back}
        variant="contained"
        sx={{ my: 5 }}
        color="secondary"
        startIcon={<ArrowBack />}
      >
        Back
      </Button>

      <Paper>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <img alt={title} src={window.location.origin + `/${img}`} className={classes.img} />
          </Grid>
          <Grid item xs={12} md={7} sx={{ padding: "30px !important" }}>
            <Typography
              sx={{ fontWeight: 600, fontSize: "80%", textTransform: "uppercase", color: "gold" }}
            >
              {cat}
            </Typography>
            <Typography variant="h5" sx={{ textTransform: "uppercase", my: 1 }}>
              {title}
            </Typography>
            <Typography variant="body2" my={2}>
              {detail}
            </Typography>
            <Stack direction="row" alignItems="center">
              <Typography variant="body1" sx={{ fontWeight: 500 }} component="h6">
                ${price}
              </Typography>
              <Button
                onClick={handleClick}
                className={classes.button}
                color="secondary"
                startIcon={<AddShoppingCart />}
                disabled={isAlreadyExit}
              >
                {isAlreadyExit ? "Already Exist in Cart" : "Add to Card"}
              </Button>

              <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={open}
                onClose={handleClose}
                autoHideDuration={1500}
                TransitionComponent={TransitionLeft}
              >
                <Alert
                  onClose={handleClose}
                  icon={<ShoppingCartCheckout />}
                  severity={`success`}
                  variant="filled"
                  color={`success`}
                >
                  {name} Add to card
                </Alert>
              </Snackbar>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
      <RelativeProduct />
    </Container>
  );
};

export default ProductDetail;
