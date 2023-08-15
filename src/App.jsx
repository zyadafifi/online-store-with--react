import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ProductsList from "./components/ProductsList";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="about" element = {<About></About>}></Route>
        <Route path="log-in" element = {<LoginForm></LoginForm>}></Route>
        <Route path="sign-up" element = {<SignUp></SignUp>}></Route>
        <Route path="product/:productId" element = {<ProductDetails></ProductDetails>}></Route>
      </Routes>
      <Slider></Slider>
      <ProductsList></ProductsList>
    </>
  );
}

export default App;
