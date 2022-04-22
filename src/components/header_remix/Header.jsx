import React from "react";
import {
  AppBar,
  Toolbar,
  Badge,
  Box,
  styled,
  Typography,
  Autocomplete,
  TextField,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./19119921051553508682-128.png";
import { api } from "../../store/api";
import { useSelector } from "react-redux";

const CustomImg = styled("img")({
  width: "50px",
  height: "50px",
  marginRight: "5px",
});

const pages = [
  { name: "Home", link: "/" },
  { name: "Favorite", link: "/favorite" },
  { name: "Cart", link: "/cart" },
];

const Header = () => {
  const nav = useNavigate();
  const { favouriteLists, cartProducts } = useSelector((state) => state);
  return (
    <AppBar color="secondary" sx={{ py: 0.5, position: "sticky", top: 0 }}>
      <Toolbar>
        <CustomImg src={Logo} alt="logo "></CustomImg>

        <Box sx={{ flexGrow: { xs: 1, md: 0 } }}>
          <Link to="/">
            <Typography
              variant="h5"
              component="p"
              color="inherit"
              sx={{ color: "gold", fontWeight: 600 }}
            >
              Mini Shop
            </Typography>
          </Link>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
          <Button sx={{ color: "white", mx: 2 }} onClick={() => nav(`./`)}>
            Home
          </Button>
          <Button sx={{ color: "white", mx: 2 }} onClick={() => nav(`./favorite`)}>
            <Badge badgeContent={favouriteLists.length} color="error">
              Favorite
            </Badge>
          </Button>
          <Button sx={{ color: "white", mx: 2 }} onClick={() => nav(`./cart`)}>
            <Badge badgeContent={cartProducts.products.length} color="error">
              Cart
            </Badge>
          </Button>
        </Box>

        <Autocomplete
          id="combo-box-demo"
          size="small"
          options={api}
          freeSolo
          autoHighlight
          sx={{ width: 300 }}
          renderOption={(props, option) => (
            <Link underline="none" to={`/${option.cat}/detail/${option.id}`} color="inherit">
              <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
                <img
                  loading="lazy"
                  width="40"
                  src={window.location.origin + `/${option.img}`}
                  srcSet={window.location.origin + `/${option.img}`}
                  alt=""
                />
                {option.label}
              </Box>
            </Link>
          )}
          renderInput={(params) => (
            <TextField
              sx={{
                background: "#ffffff90",
              }}
              color="secondary"
              {...params}
              placeholder="Search ...."
            />
          )}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
