import "./App.css";
import Header from "./components/header_remix/Header";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
import RoutePath from "./route/RoutePath";
import BottomNav from "./components/bottomnav/BottomNav";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <RoutePath />
      <BottomNav />
    </ThemeProvider>
  );
}

export default App;
