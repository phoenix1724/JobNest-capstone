import React from "react";
import "./Brands.css";

import brand1 from "../../assets/images/brands/brand1.png";
import brand2 from "../../assets/images/brands/brand2.png";
import brand3 from "../../assets/images/brands/brand3.png";
import brand4 from "../../assets/images/brands/brand4.png";
import brand5 from "../../assets/images/brands/brand5.png";

const brands = [
  { name: "Vodafone image", image: brand1 },
  { name: "Intel image", image: brand2 },
  { name: "Tesla image ", image: brand3 },
  { name: "AMD image", image: brand4 },
  { name: "Talkit image", image: brand5 },
];

const Brands = () => {
  return (
    <section className="brands-section">
      <div className="brands-container">
        <p className="brands-text">Companies we helped grow</p>
        <div className="brands-wrapper">
          <div className="brands-logos">
            {brands.map((brand, index) => (
              <div key={index} className="brands-logo">
                <img src={brand.image} alt={brand.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
