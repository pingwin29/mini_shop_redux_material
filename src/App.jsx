import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Delivery from "./pages/Delivery";
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import Error from "./pages/Error";
import { ContextProvider } from "./store/context";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <ContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/:productName" element={<Product />}></Route>
        </Route>
        <Route
          path="/:productName/detail/:productId"
          element={<ProductDetail />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
