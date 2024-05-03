import "./App.css";
import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ProductDetailsPage from "./components/ProductDetailsPage";
import Cart from "./components/Cart";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/productDetails/:productId"
          element={<ProductDetailsPage />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
