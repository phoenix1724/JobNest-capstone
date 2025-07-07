import { Link } from "react-router-dom";
import { latestJobLists } from "../../Data/Data.js";
import Pattern from "../../assets/images/latest-jobs/Pattern.svg";
import SectionText from "../SectionText/SectionText.jsx";
import "./LatestJobs.css"; // ✅ Import CSS

const LatestJobs = () => {
  return (
    <section className="latest-jobs-section">
      <div className="latest-jobs-container">
        <div>
          <SectionText
            title="Latest"
            subTitle="jobs open"
            ctaName="Show all jobs"
          />

          {/* Job cards */}
          <div className="latest-jobs-grid">
            {latestJobLists.map((joblist) => (
              <div className="job-card" key={joblist.id}>
                <div className="job-logo">
                  <img
                    src={joblist.logo}
                    className="logo-img"
                    alt={joblist.companyName}
                  />
                </div>
                <div className="job-info">
                  <Link
                    to={`${joblist.title
                      .toLowerCase()
                      .trim()
                      .split(" ")
                      .join("-")}`}
                    className="job-title-link"
                  >
                    <h3 className="job-title">{joblist.title}</h3>
                  </Link>
                  <p className="job-subtext">
                    {joblist.companyName} <span>{joblist.location}</span>
                  </p>

                  <div className="job-meta">
                    <label className="job-type">{joblist.JobType}</label>
                    <div className="vertical-divider"></div>
                    <div className="job-fields">
                      {joblist.jobFields.map((jobfield, index) => (
                        <div
                          key={index}
                          className={`job-field ${
                            index === 0
                              ? "job-field-yellow"
                              : index === 1
                              ? "job-field-purple"
                              : ""
                          }`}
                        >
                          {jobfield.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background pattern */}
        <img
          src={Pattern}
          alt="Pattern"
          className="pattern-img"
        />
      </div>
    </section>
  );
};

export default LatestJobs;
