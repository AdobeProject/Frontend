import React, { useState } from "react";
import "./LoginRegistry.scss";

const LoginRegistry = () => {
  const [addclass, setaddclass] = useState("");
  return (
    <div className={`container ${addclass}`} id="container">
      <div className="form-container  sign-up-container">
        <form>
          <h1>Create Account</h1>
          <input type="text" placeholder="NAME" />
          <input type="text" placeholder="SURNAME" />
          <input type="email" placeholder="EMAIL" />
          <input type="password" placeholder="PASSWORD" />
          <label className="radio-box">
            <input
              type="radio"
              name="user"
              value="1"
              className="radio_input"
              checked
            />
            I want to learn
          </label>
          <label className="radio-box">
            <input type="radio" name="user" value="2" className="radio_input" />
            I want to teach
          </label>
          <button type="submit" className="register-botton">
            REGISTER
          </button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form>
          <h1>Login</h1>
          <input type="email" placeholder="EMAIL" />
          <input type="password" placeholder="PASSWORD" />
          <button type="submit" className="register-botton">
            LOGIN
          </button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <button
              className="ghost"
              className="register-botton"
              id="signIn"
              onClick={() => setaddclass("")}
            >
              GO TO LOGIN
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <button
              className="ghost"
              className="register-botton"
              id="signUp"
              onClick={() => setaddclass("right-panel-active")}
            >
              GO TO REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegistry;
