import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="features_container">
      <h1 className="features_title">Amazing Features</h1>
      <p className="features_deacription">
        Most calendars are designed for teams. Slate is designed for freelancers
      </p>
      <div className="features_list_container">
        <div className="features_list_box">
          <img
            src="https://res.cloudinary.com/dcutqjov4/image/upload/v1644576100/Vector_1_pmnhxc.png"
            alt=""
          />
          <h3>Gorgeous design</h3>
          <p>
            Slate helps you see how many more days you need to work to reach
            your financial goal
          </p>
          <h5>Learn more</h5>
        </div>
        <div className="features_list_box">
          <img
            src="https://res.cloudinary.com/dcutqjov4/image/upload/v1644576100/Vector_1_pmnhxc.png"
            alt=""
          />
          <h3>Performance</h3>
          <p>
            Slate helps you see how many more days you need to work to reach
            your financial goal
          </p>
          <h5>Learn more</h5>
        </div>
        <div className="features_list_box">
          <img
            src="https://res.cloudinary.com/dcutqjov4/image/upload/v1644576100/Vector_1_pmnhxc.png"
            alt=""
          />
          <h3>Content</h3>
          <p>
            Slate helps you see how many more days you need to work to reach
            your financial goal
          </p>
          <h5>Learn more</h5>
        </div>
      </div>
    </div>
  );
};

export default Features;
