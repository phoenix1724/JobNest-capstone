import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { categories } from "../../Data/Data.js";
import SectionText from "../SectionText/SectionText.jsx";
import "./Categories.css";

const Categories = () => {
  const onload = false;

  return (
    <section className="categories-section">
      <div className="categories-container">
        <SectionText
          title="Explore by"
          subTitle="category"
          ctaName="Show all jobs"
        />

        <div className="categories-grid">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/jobs/category/${category.name.toLowerCase()}`}
              className={`category-card ${
                category.id === 3 ? "special" : ""
              }`}
            >
              <div className="category-icon">
                {!onload && (
                  <img
                    src={category.icon}
                    alt={category.name}
                    loading="lazy"
                  />
                )}
              </div>
              <div className="category-details">
                <h3
                  className={`category-title ${
                    category.id === 3 ? "special" : ""
                  }`}
                >
                  {category.name}
                </h3>
                <div
                  className={`category-info ${
                    category.id === 3 ? "special" : ""
                  }`}
                >
                  <p>{category.jobs} Jobs available</p>
                  <GoArrowRight size={24} className="arrow-icon" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
