import { Box, Stack, Typography } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import ProductCart from "../productcard_remix/ProductCart";
import { api } from "../../store/api";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const useStyled = makeStyles({
  slider: {
    height: "350px",
  },
  slideItem: {
    width: "200px",
  },
});

const RelativeProduct = () => {
  const { productName, productId } = useParams();

  const [products, setProducts] = useState([]);

  console.log({ productId });

  useEffect(() => {
    const relativeProduct = api.filter((data) => data.id != productId && data.cat == productName);
    setProducts(relativeProduct);
  }, [productName, productId]);

  const classes = useStyled();

  const navigationPreRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5" sx={{ py: 4 }}>
          Related items
        </Typography>
        <Stack direction="row" alignItems="center">
          <ChevronLeft ref={navigationPreRef} sx={{ mr: 2 }} />
          <ChevronRight ref={navigationNextRef} />
        </Stack>
      </Stack>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        grabCursor={true}
        navigation={{
          prevEl: navigationPreRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[Navigation]}
        className={`classes.slider`}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className={classes.slideItem}>
            <ProductCart data={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default RelativeProduct;
