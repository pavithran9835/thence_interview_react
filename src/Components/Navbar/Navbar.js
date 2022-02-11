import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_logo_container">
        <img
          src="https://res.cloudinary.com/dcutqjov4/image/upload/v1644578112/Rectangle_4_pw67vl.png"
          alt=""
        />
      </div>
      <div className="navbar_optons_container">
        <h3>Home</h3>
        <h3>Product</h3>
        <h3>Pricing</h3>
        <h3>Contact</h3>
        <input type="text" placeholder="Your Email" />
        <button className="navbar_subscribe_button">subscribe</button>
        <button className="navbar_login_button">login</button>
        <img
          src="https://res.cloudinary.com/dcutqjov4/image/upload/v1644578841/Vector_4_jqvfll.png"
          alt=""
          className="navbar_humburger_icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
