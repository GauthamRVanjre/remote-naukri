import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { NaukriType, jobType } from "../utils/types";
import { formatDate } from "../utils/formatDate";

interface JobComponentProps {
  job: NaukriType;
  setKeywords: (data: string) => void;
}

const JobComponent: React.FC<JobComponentProps> = ({ job, setKeywords }) => {
  const {
    employer_name,
    job_employment_type,
    // featured,
    job_id,
    job_apply_link,
    job_required_skills,
    // level,
    job_is_remote,
    job_city,
    employer_logo,
    job_title,
    job_posted_at_timestamp,
  } = job;

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
            {/* {props.job.new && <span className="new">new!</span>}
            {props.job.featured && <span className="featured">featured!</span>} */}
          </div>

          <div className="position">{job_title}</div>

          <div className="details">
            <span>{formatDate(job_posted_at_timestamp)}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{job_employment_type}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{job_is_remote ? "Remote" : job_city}</span>
          </div>
        </div>
        <div className={`part2 ${job_required_skills ? "mobile-height" : ""}`}>
          <div>
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
