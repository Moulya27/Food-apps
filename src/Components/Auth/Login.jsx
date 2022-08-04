import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.login(email, password).then(
        () => {
          navigate("/restaurants");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signupContainer">
      <div className="row">
        <div className="col-lg-7 px-5 pt-5">
          <h3 className="font-weight-bold py-3 text-white">Login</h3>
          <form onSubmit={handleLogin}>
            <div className="form-row">
              <div className="col-lg-7">
                <input
                  type="text"
                  placeholder="email"
                  value={email}
                  class="form-control my-3"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-lg-7">
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  class="form-control my-3"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-lg-7">
                <button type="submit" className="signupBtn">
                  Login
                </button>
              </div>
            </div>
            {/*<form onSubmit={handleLogin}>
          <h3>Login</h3>
          {error && <p style={{ color: "red" }}>{error}</p>}
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
          <button type="submit">Log in</button>
    </form>*/}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
