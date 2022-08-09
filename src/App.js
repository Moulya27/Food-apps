import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Food_Main } from "./Components/RestaurantPage/Food_Main";
import { Food_Detail } from "./Components/RestaurantPage/Food_Detail";
import { PaymentDetails } from "./Components/CheckoutPage/PaymentDetails";
import { ThankYou } from "./Components/Thankyou/Thankyou";
import Signup from "./Components/Auth/Signup";
import Login from "./Components/Auth/Login";
import NotLoggedIn from "./Components/Auth/NotLoggedIn";
import Protected from "./Components/Auth/Protected";
import { LandingPage } from "./Components/LandingPage/LandingPage";

function App() {
  if (!localStorage.getItem("Cart")) {
    localStorage.setItem("Cart", JSON.stringify([]));
  }
  if (!localStorage.getItem("user_details")) {
    localStorage.setItem(
      "user_details",
      JSON.stringify({ name: "", email: "", number: "" })
    );
  }
  if (!localStorage.getItem("verificationId")) {
    localStorage.setItem(
      "verificationId",
      JSON.stringify({ verificationId: "" })
    );
  }

  return (

    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/notloggedin" element={<NotLoggedIn/>} />
        <Route element={<Protected/>}>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/restaurants" element={<Food_Main />} />
        <Route path="/:food/:id" element={<Food_Detail />} />
        <Route path="/payment" element={<PaymentDetails />} />
        <Route path="/thankyou" element={<ThankYou />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
