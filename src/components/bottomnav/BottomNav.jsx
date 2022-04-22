import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { AbcSharp, Home, FavoriteOutlined, ShoppingCart, Badge } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const nav = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        zIndex: 99,
        display: { xs: "bock", md: "none" },
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          onClick={() => nav("./")}
          label="Home"
          color="secondary"
          icon={<Home />}
        />
        <BottomNavigationAction
          label="Favorites"
          color="secondary"
          onClick={() => nav("./favorite")}
          icon={<FavoriteOutlined />}
        />
        <BottomNavigationAction
          label="Cart"
          color="secondary"
          onClick={() => nav("./cart")}
          icon={<ShoppingCart />}
        />
      </BottomNavigation>
    </Box>
  );
}
