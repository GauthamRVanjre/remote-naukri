import { useEffect, useState } from "react";
import JobComponent from "./JobComponent";
import React from "react";
import { NaukriType } from "../utils/types";

interface JobsComponentProps {
  jobs: NaukriType[];
}

const JobsComponent: React.FC<JobsComponentProps> = ({ jobs }) => {
  const [filteredData, setFilteredData] = useState<NaukriType[]>([]);

  // const modifiedData = () => {
  //   if (keywords.length > 0) {
  //     const newData = filteredData.filter((d) => {
  //       return keywords.every((key) => {
  //         return (
  //           d.role == key ||
  //           d.level == key ||
  //           d.languages.includes(key) ||
  //           d.tools.includes(key)
  //         );
  //       });
  //     });

  //     setFilteredData(newData);
  //   } else {
  //   }
  // };
  // setFilteredData(data);

  useEffect(() => {
    console.log("hit");
    setFilteredData(jobs);
  }, [jobs]);

  // useEffect(() => {
  //   modifiedData();
  // }, [keywords]);

  return (
    <div className="jobs">
      {filteredData &&
        filteredData.map((job) => (
          // <div>Hello World</div>
          <JobComponent key={job.job_id} job={job} />
        ))}
    </div>
  );
};

export default JobsComponent;
