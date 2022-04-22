import {
  Button,
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Box,
  styled,
  Avatar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Close } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { PlusQty, SubQty, removeFromCartAction } from "../store/action/cartProcessAction";
import { red } from "@mui/material/colors";

const headerRow = ["Items", "Qty", "Price", ""];

const CustomButton = styled("button")({
  width: "20px !important",
  height: "20px !important",
  borderRadius: "50%",
  color: "white",
  outline: "none",
  border: "none",
  display: "block",
  background: "grey",
  transition: "all .4s",
  "&:active": {
    background: "gold",
  },
  "&:nth-of-type(1)": {
    marginBottom: "10px",
  },
});
const Cart = () => {
  const { cartProducts } = useSelector((state) => state);
  const { products, total } = cartProducts;
  const dispatch = useDispatch();

  const AddQty = (id) => {
    const specialProduct = products.filter((data) => data.id == id);
    dispatch(PlusQty(specialProduct[0]));
  };

  const RemoveProduct = (id) => {
    const specialProduct = products.filter((data) => data.id == id);
    console.log({ specialProduct });
    dispatch(removeFromCartAction(specialProduct[0]));
  };
  const subQty = (id) => {
    const specialProduct = products.filter((data) => data.id == id);

    specialProduct[0].qty !== 1 && dispatch(SubQty(specialProduct[0]));
  };

  return (
    <Container sx={{ maxWidth: "900px !important", my: 5 }}>
      <Table>
        <TableHead>
          <TableRow>
            {headerRow.map((row, index) => (
              <TableCell key={index}>
                <Typography variant="h6">{row}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {products.length == 0 && (
            <TableRow>
              <TableCell colSpan={5}>
                <Typography align="center">There Is Nothing To Show.</Typography>
              </TableCell>
            </TableRow>
          )}
          {products.map((cartProduct, index) => (
            <TableRow key={index}>
              <TableCell>{cartProduct.name}</TableCell>
              <TableCell>
                <Stack direction="row" alignItems="center">
                  <Typography variant="body2" sx={{ mr: 2 }}>
                    {cartProduct.qty}
                  </Typography>
                  <Box>
                    <CustomButton
                      onClick={() => {
                        AddQty(cartProduct.id);
                      }}
                    >
                      +
                    </CustomButton>
                    <CustomButton
                      onClick={() => {
                        subQty(cartProduct.id);
                      }}
                    >
                      -
                    </CustomButton>
                  </Box>
                </Stack>
              </TableCell>
              <TableCell>${Number(cartProduct.total).toFixed(2)}</TableCell>

              <TableCell>
                <Avatar
                  sx={{ background: red[800], width: 24, height: 24 }}
                  onClick={() => RemoveProduct(cartProduct.id)}
                >
                  <Close fontSize="small" />
                </Avatar>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={2}>
              <Typography variant="h6" align="right">
                Total :
              </Typography>
            </TableCell>
            <TableCell colSpan={2}>
              <Typography variant="h6" color="secondary">
                $ {Number(total).toFixed(2)}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
};

export default Cart;
