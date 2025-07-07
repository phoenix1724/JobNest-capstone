import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import PropTypes from "prop-types";
import "./SectionText.css"; // ✅ CSS import

const SectionText = ({ title, subTitle, ctaName }) => {
  return (
    <div className="section-text-container">
      <h2 className="section-text-heading">
        {title}
        <span className="section-text-subtitle"> {subTitle}</span>
      </h2>
      <Link to="/all-jobs" className="section-text-link">
        {ctaName}
        <GoArrowRight className="section-text-icon" size={23} />
      </Link>
    </div>
  );
};

SectionText.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  ctaName: PropTypes.string.isRequired,
};

export default SectionText;
