import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div
      className="landing_container"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${"https://res.cloudinary.com/dcutqjov4/image/upload/v1644580215/Rectangle_9_1_cx7qng.png"}) ,url(${"https://res.cloudinary.com/dcutqjov4/image/upload/v1644580595/Rectangle_8_2_lgvbup.png"})`,
        backgroundSize: "contain",
      }}
    >
      <Navbar />

      <h1>Lightning fast prototyping</h1>
      <p>
        Most calendars are designed for teams. Slate is designed for freelancers
      </p>
      <button className="landing_button">Try For Free</button>
      <img
        src="https://res.cloudinary.com/dcutqjov4/image/upload/v1644572379/SCREEN_MASK_1_t1h9di.png"
        alt=""
        className="lap_image"
      />
      <div className="lap_border"></div>
      <div className="spacer"></div>
    </div>
  );
};

export default Home;
//
