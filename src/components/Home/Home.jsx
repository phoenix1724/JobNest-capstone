import { useState, useRef, useEffect } from "react";
import { RiSearchLine, RiArrowDownSLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import HeroImage from "../../assets/images/Home/hero-image.png";
import Vector from "../../assets/images/Home/vector.svg";
import Pattern from "../../assets/images/Home/Pattern.svg";
import "./Home.css"; // Import your custom CSS

const popularLists = ["UI Designer", "UX Researcher", "Android", "Admin"];

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("India, Delhi");
  const dropdownRef = useRef(null);

  const locations = [
    "Mumbai, Maharashtra",
    "Bangalore, Karnataka",
    "Pune, Maharashtra",
    "Chennai, Tamil Nadu",
    "Hyderabad, Telangana",
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-grid">
          {/* Left Section */}
          <div className="home-left">
            <div className="home-heading-container">
              <h1 className="home-heading">
                Discover more than{" "}
                <span className="highlighted-text">5000+ Jobs</span>
              </h1>
              <img src={Vector} className="vector-img" alt="Vector decoration" />
            </div>
            <p className="home-subtext">
              Great platform for job seekers passionate about startups and
              seeking new career heights.
            </p>

            {/* Search Box */}
            <div className="home-search-container" ref={dropdownRef}>
              <div className="home-search-flex">
                {/* Job Title */}
                <div className="search-field search-icon-group">
                  <RiSearchLine size={18} />
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Job title or Keywords"
                  />
                </div>

                {/* Location */}
                <div
                  className={`search-field search-icon-group ${
                    isDropdownOpen ? "dropdown-open" : ""
                  }`}
                >
                  <SlLocationPin size={18} />
                  <div className="location-dropdown">
                    <div className="dropdown-toggle" onClick={toggleDropdown}>
                      <input
                        type="text"
                        value={selectedLocation}
                        readOnly
                        aria-label="Location"
                        className="dropdown-input"
                      />
                      <RiArrowDownSLine
                        className={`dropdown-arrow ${
                          isDropdownOpen ? "rotated" : ""
                        }`}
                      />
                    </div>

                    <div
                      className={`dropdown-menu ${
                        isDropdownOpen ? "show" : "hide"
                      }`}
                    >
                      <ul>
                        {locations.map((location) => (
                          <li
                            key={location}
                            className="dropdown-item"
                            onClick={() => handleLocationSelect(location)}
                          >
                            {location}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <button className="search-btn">Search my job</button>
              </div>
            </div>

            <p className="home-popular">
              Popular:
              {popularLists.map((list) => (
                <span key={list} className="popular-item">
                  {list}
                </span>
              ))}
            </p>
          </div>

          {/* Right Section */}
          <div className="home-right">
            <img src={HeroImage} className="hero-img" alt="Hero representation" />
            <div className="bg-rotate" />
          </div>
        </div>
        <img src={Pattern} className="pattern-img" alt="Background pattern" />
      </div>
    </section>
  );
};

export default Home;
