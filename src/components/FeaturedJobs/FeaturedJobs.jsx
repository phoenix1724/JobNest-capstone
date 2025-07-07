import { Link } from "react-router-dom";
import { jobPosts } from "../../Data/Data.js";
import SectionText from "../SectionText/SectionText.jsx";
import { SlHeart } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";
import "./FeaturedJobs.css";

const FeaturedJobs = () => {
  return (
    <section className="featured-section">
      <div className="featured-container">
        <div className="w-full">
          <SectionText title="Featured" subTitle="jobs" ctaName="Show all jobs" />

          <div className="job-cards">
            {jobPosts.map((joblist) => (
              <Link
                to={`job-details/${joblist.title
                  .toLowerCase()
                  .split(" ")
                  .join("-")}`}
                key={joblist.company}
                className="job-card"
              >
                <div className="job-card-header">
                  <div className="job-company">
                    <div className="job-logo">
                      <img src={joblist.logo} alt={joblist.company} />
                    </div>
                    <div className="job-info">
                      <h3>{joblist.title}</h3>
                      <p className="job-meta">
                        <span>{joblist.company}</span>
                        <span className="dot"></span>
                        <span>{joblist.application} Application</span>
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="job-roles">
                  {joblist.role.map((role, index) => (
                    <li
                      key={index}
                      className={`job-role ${
                        index === 0
                          ? "role-primary"
                          : index === 1
                          ? "role-success"
                          : "role-warning"
                      }`}
                    >
                      {role}
                    </li>
                  ))}
                </ul>

                <p className="job-description">{joblist.description}</p>

                <div className="job-divider"></div>

                <div className="job-footer">
                  <h3 className="job-salary">
                    ${joblist.salary} <span>/hr</span>
                  </h3>
                  <div className="job-time">
                    <IoMdTime />
                    <p>Posted : {joblist.date}</p>
                  </div>
                </div>

                <div className="favorite-icon">
                  <SlHeart />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
