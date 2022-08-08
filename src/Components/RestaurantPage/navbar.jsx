import React, { useState, useEffect } from "react";
import Logo from "../Assets/swiggy.svg";

import Cart from "../Assets/cart.png";
import Search from "../Assets/search.svg";
import Discount from "../Assets/discount.svg";
import Help from "../Assets/help.svg";
import User from "../Assets/user.png";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";


const Navbar = ({ currentUser, logOut}) => {
  
  console.log(currentUser);
  const [user_signin, setUser_signin] = useState(false);
  const [user_details, setUser_details] = useState(null);
  const [login, setLogin] = useState(true);
  const [signIn, setsignIn] = useState(false);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [len, setLen] = useState(0);
  const [verificationId, setVerificationId] = useState("");
  const [otp, setOtp] = useState(false);
  const [otp_valid, setOtp_valid] = useState("");

  const location = JSON.parse(localStorage.getItem("Location"));
  let cart = JSON.parse(localStorage.getItem("Cart")) || [];
  const navigate = useNavigate();
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user_details"));
    if (user.name !== "") {
      setUser_details(user);
      setUser_signin(true);
      setsignIn(true);
    }
  }, []);

  useEffect(() => {
    setLen(cart.length);
  }, [cart]);

  useEffect(() => {
    setOtp_valid(otp_valid);
  }, [otp_valid]);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user_details"));
    let id = JSON.parse(localStorage.getItem("verificationId"));
    if (user.name == "" || user.email == "" || user.number == "" || id.verificationId == "") {
      let temp = {
        name: name,
        email: email,
        number: number,
      };
      localStorage.setItem("user_details", JSON.stringify(temp));
    }
  }, [name, email, number]);


 

  
  

  return (
    <>
      <nav className="navbar">
        <img src={Logo} alt="" className="logo" />
        <div className="div2_nav">
          <p className="search">
            <img src={Search} alt="" className="search_icon" />
            Search{" "}
          </p>
        </div>
        <div className="div3_nav">
          <p className="search">
            <img src={Discount} alt="" className="discount_icon" />
            Offers <span className="new">NEW</span>{" "}
          </p>
        </div>
        <div className="div4_nav">
          <p className="search">
            <img src={Help} alt="" className="help_icon" />
            Help
          </p>
        </div>
        <div className="div5_nav">
          <p className="search"
          >
            <img src={User} alt="" className="user_icon" />
            {currentUser && <a href="/" className="nav-link" onClick={logOut}>
              Logout
            </a>}
          </p>
        </div>
        <div className="div6_nav">
          {len !== 0 ? (
            <Link to="/payment" style={{ textDecoration: "none" }}>
              <p className="search">
                <img src={Cart} alt="" className="cart_icon" />
                Cart
              </p>
            </Link>
          ) : (
            <p className="search">
              <img src={Cart} alt="" className="cart_icon" />
              Cart
            </p>
          )}
          <span className="cart_num">{len}</span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;