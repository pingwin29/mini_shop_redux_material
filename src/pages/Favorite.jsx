import React from "react";
import { useSelector } from "react-redux";
import CardGrip from "../components/cardgrip_remix.jsx/CardGrip";
import { Container } from "@mui/material";

const Favorite = () => {
  const { favouriteLists } = useSelector((state) => state);
  return (
    <Container sx={{ maxWidth: "900px !important", my: 5 }}>
      <CardGrip api={favouriteLists} />
    </Container>
  );
};

export default Favorite;
