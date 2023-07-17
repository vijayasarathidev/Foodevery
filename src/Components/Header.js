import React, { useState } from "react";
import logo from "../Assets/logo.png"
import "../../index.css"
const Header = () => {
  const[btnName,setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login"
          onClick={()=>{
            btnName === "Login"? setBtnName("Logout"):setBtnName("Login");
          }}> 
          {btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;