import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import PrivateRoutes from "./PrivateRoutes";
import Payment from "./Pages/Payment";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Product" element={<Product />}></Route>

        <Route
          path="/Cart"
          element={
            <PrivateRoutes>
              <Cart />
            </PrivateRoutes>
          }
        ></Route>

        <Route path="/Signin" element={<Signin />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Payment" element={<Payment />}></Route>

      </Routes>
    </div>
  );
};

export default AllRoutes;
