import Image from "next/image";
import React, { useEffect, useState } from "react";
import { NaukriType, jobType } from "../utils/types";

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
          <img src={employer_logo} alt="logo" width={20} height={20} />
        </div>
        <div className="part1">
          <div className="company">
            <span className="cname">{employer_name}</span>
            {/* {props.job.new && <span className="new">new!</span>}
            {props.job.featured && <span className="featured">featured!</span>} */}
          </div>

          <div className="position">{job_title}</div>

          <div className="details">
            <span>{JSON.stringify(job_posted_at_timestamp)}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{job_employment_type}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{job_is_remote ? "Remote" : job_city}</span>
          </div>
        </div>
        <div className="part2">
          {job_required_skills &&
            job_required_skills.length > 0 &&
            job_required_skills.map((key, id) => (
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
      </div>
    </>
  );
};

export default JobComponent;
