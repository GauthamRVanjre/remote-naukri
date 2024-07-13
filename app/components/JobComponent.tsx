import Link from "next/link";
import React from "react";
import { NaukriType } from "../utils/types";

interface JobComponentProps {
  job: NaukriType;
}

const JobComponent: React.FC<JobComponentProps> = ({ job }) => {
  const {
    employer_name,
    job_employment_type,
    // featured,
    job_id,
    job_apply_link,
    job_required_skills,
    job_required_experience,
    // level,
    job_is_remote,
    job_city,
    employer_logo,
    job_title,
  } = job;

  const redirectToJobDetail = () => {
    // console.log("redirect");
    window.location.href = `job/${job.job_id}`;
  };

  return (
    <>
      <div
        className={
          job_is_remote === true
            ? "job-container job-container borderLeft"
            : "job-container"
        }
      >
        <div className="logo">
          <img src={employer_logo} alt="logo" width={40} height={40} />
        </div>
        <div className="part1">
          <div className="company">
            <span className="cname">{employer_name}</span>
          </div>

          <div className="position">
            {/* <Link href="/">{job_title}</Link> */}
            <span onClick={redirectToJobDetail} className="position-style">
              {job_title}
            </span>
          </div>

          <div className="experience">
            <span>Experience: {job_required_experience} Months</span>
          </div>

          <div className="details">
            <span>{job_required_experience} months</span>
            <span className="details-dots">•</span>
            <span>{job_employment_type}</span>
            <span className="details-dots">•</span>
            <span>{job_is_remote ? "Remote" : job_city}</span>
          </div>
        </div>
        <div className={`part2 ${job_required_skills ? "mobile-height" : ""}`}>
          <div className="apply_link_btn_container">
            <Link href={job_apply_link} target="_blank" className="apply_link">
              Apply Now
            </Link>
          </div>
          {job_required_skills && job_required_skills.length > 0 ? (
            <div className="skills-container">
              {job_required_skills.slice(0, 4).map((key, id) => (
                <span
                  className="part2span"
                  // onClick={() => {
                  //   props.setKeywords(key);
                  // }}
                  key={id}
                >
                  {key}
                </span>
              ))}
            </div>
          ) : (
            <div className="part2span">No Skills Mentioned</div>
          )}
        </div>
      </div>
    </>
  );
};

export default JobComponent;
