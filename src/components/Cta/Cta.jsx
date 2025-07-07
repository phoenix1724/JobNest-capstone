import React from "react";
import "./Cta.css";
import DashboardImage from "../../assets/images/cta/image.png";

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-grid">
          {/* text */}
          <div className="cta-text">
            <h2 className="cta-heading">
              Start posting <br className="hidden sm:block" /> jobs today
            </h2>
            <p className="cta-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="cta-button">Sign up for free</button>
          </div>
          {/* image */}
          <div className="cta-image-wrapper">
            <img src={DashboardImage} alt="Dashboard image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
