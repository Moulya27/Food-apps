import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await authService.signup(email, password).then(
        (response) => {
          // check for token and user already exists with 200
          //   console.log("Sign up successfully", response);
          navigate("/restaurants");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signupContainer">
      <div className="row">
        <div className="col-lg-7 px-5 pt-5">
          <h3 className="font-weight-bold py-3 text-white">Sign up</h3>
          <form onSubmit={handleSignup}>
            <div className="form-row">
              <div className="col-lg-7">
                <input
                  type="text"
                  placeholder="Phone"
                  class="form-control my-3"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-lg-7">
                <input
                  type="text"
                  placeholder="Full Name"
                  class="form-control my-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-lg-7">
                <input
                  type="text"
                  placeholder="email"
                  class="form-control my-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-lg-7">
                <input
                  type="password"
                  placeholder="password"
                  class="form-control my-3"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-lg-7">
                <button type="submit" className="signupBtn">
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/*<form onSubmit={handleSignup}>
          <h3>Sign up</h3>
          <input
            type="text"
            placeholder="email"
           
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign up</button>
    </form>*/}
    </div>
  );
}

export default Signup;
