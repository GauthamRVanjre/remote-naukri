import Image from "next/image";
import React, { useEffect, useState } from "react";
import { jobType } from "../utils/types";

interface JobComponentProps {
  job: jobType;
  setKeywords: (data: string) => void;
}

const JobComponent: React.FC<JobComponentProps> = ({ job, setKeywords }) => {
  const {
    company,
    job_type,
    // featured,
    id,
    technologies,
    main_technology,
    // level,
    location = "remote",
    logo_url,
    title,
    created_at,
  } = job;

  let skills = technologies ? [...technologies] : [];
  skills.push(main_technology);

  return (
    <>
      <div
        className={
          location === "remote"
            ? "job-container job-container borderLeft"
            : "job-container"
        }
      >
        {/* <div className="logo">
          <Image src={logo_url} alt="logo" width={20} height={20} />
        </div> */}
        <div className="part1">
          <div className="company">
            <span className="cname">{company}</span>
            {/* {props.job.new && <span className="new">new!</span>}
            {props.job.featured && <span className="featured">featured!</span>} */}
          </div>

          <div className="position">{title}</div>

          <div className="details">
            <span>{JSON.stringify(created_at)}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{job_type}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{location}</span>
          </div>
        </div>
        <div className="part2">
          {skills &&
            skills.length > 0 &&
            skills.map((key, id) => (
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
