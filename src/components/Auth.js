import React, { useState } from "react";
import { login, logout } from "../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import "./auth.css";

const Auth = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const dispatch = useDispatch();
  const { name, email, isLogged } = useSelector((store) => store.auth);

  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setInputEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setInputPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(inputName, inputEmail, inputPassword));
    setInputName("");
    setInputEmail("");
    setInputPassword("");
  };

  return (
    <div className="auth-wrapper">
      {isLogged ? (
        <div>
          <div>Name: {name}</div>
          <div>Email: {email}</div>
          <button
            onClick={() => {
              dispatch(logout());
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {" "}
          <input
            type="text"
            value={inputName}
            placeholder="Enter Your Name"
            onChange={(e) => handleNameChange(e)}
          ></input>
          <input
            type="email"
            value={inputEmail}
            placeholder="Enter Your Email"
            onChange={(e) => handleEmailChange(e)}
          ></input>
          <input
            type="password"
            value={inputPassword}
            placeholder="Enter Your Password"
            onChange={(e) => handlePasswordChange(e)}
          ></input>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Auth;
