import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "../productcard_remix/ProductCart";

const CardGrip = ({ api }) => {
  return (
    <Grid container spacing={2}>
      {api.map((data, index) => (
        <Grid item xs={6} key={index} sm={4} md={3} lg={3}>
          <ProductCard data={data} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrip;
