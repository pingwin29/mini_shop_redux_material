import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Card, CardContent, CardMedia, Checkbox, styled, Typography } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { favproductAction } from "../../store/action/favproductAction";
const CustomImg = styled("img")({
  width: "100%",
  objectFit: "cover",
});

const ProductCart = ({ data }) => {
  // to check this product is fav
  const { favouriteLists } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { img, title, name, price, cat, id } = data;

  const isFav = favouriteLists.some((favlist) => favlist.id == id);

  const favActionName = !isFav ? "ADD_FAV" : "SUB_FAV";
  const favHandler = () => {
    dispatch(favproductAction(favActionName, data));
  };

  let nag = useNavigate();
  const viewDetail = () => {
    nag(`/${cat}/detail/${id}`);
  };

  return (
    <Card sx={{ maxWidth: 200, position: "relative", boxShadow: "none" }}>
      <Checkbox
        checked={isFav}
        sx={{ position: "absolute", right: "10px", top: "10px" }}
        color="error"
        onClick={favHandler}
        icon={<FavoriteBorder color="error" />}
        checkedIcon={<Favorite />}
      />

      <CustomImg src={window.location.origin + `/${img}`} alt={title} />
      <CardContent
        sx={{ textAlign: "center", p: 1, cursor: "pointer" }}
        onClick={() => viewDetail()}
      >
        <Typography variant="subtitle1" color="secondary" component="h6" sx={{ fontWeight: 600 }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ textTransform: "uppercase" }}>
          {cat}
        </Typography>
        <Typography variant="subtitle1">${price}</Typography>
      </CardContent>
    </Card>
    // <div className={style.ProductCard}>
    //   <div className={style.overlay}>
    //     <div className={style.itemDetail}>
    //       <div className={style.itemName}>{productInfo.title.substring(0, 20)}</div>
    //       <div className={style.itemchord}>{productInfo.detail}</div>
    //       <div className={style.itemPrice}>{productInfo.price}</div>
    //       <div className={style.itemButtons}>
    //         <button className={`${style.btn} ${style.buybtn}`} onClick={viewDetail}>
    //           View Detail
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <img src={`${window.location.origin}/${productInfo.img}`} alt={`${productInfo.title} img`} />
    // </div>
  );
};

export default ProductCart;
