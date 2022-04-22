import React, { useEffect, useState } from "react";
import CardGrip from "../components/cardgrip_remix.jsx/CardGrip";
import { categories } from "../store/api";
import { filterAction } from "../store/action/productAction";
import {
  Container,
  FormControl,
  OutlinedInput,
  Typography,
  Select,
  MenuItem,
  Box,
  Divider,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const { products, favouriteLists, cartProducts } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log({ favouriteLists, cartProducts });

  return (
    <Container sx={{ maxWidth: "900px !important" }}>
      <FilterByCategory dispatch={dispatch} products={products} />
      <Divider sx={{ mb: 5 }} />
      <CardGrip api={products} />
    </Container>
  );
};

const FilterByCategory = ({ dispatch, products }) => {
  const [filter, setFilter] = React.useState("all");

  useEffect(() => {
    filter == "all" ? dispatch(filterAction("all")) : dispatch(filterAction(filter));
  }, [filter]);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const productCategory = categories;

  return (
    <Box sx={{ m: 1, minWidth: 120, py: 1 }}>
      <Typography variant="h6" fontSize="110%" fontWeight="border" mb={1}>
        <em> Filter By Category :</em>
      </Typography>
      <FormControl size="small">
        <Select
          sx={{ width: 250, background: "#fff" }}
          value={filter}
          onChange={handleChange}
          displayEmpty
          input={<OutlinedInput />}
        >
          <MenuItem disabled value="all">
            <em>Product Category</em>
          </MenuItem>
          <MenuItem value="all">All</MenuItem>
          {productCategory.map((cat, index) => (
            <MenuItem key={index} sx={{ textTransform: "uppercase" }} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Home;
