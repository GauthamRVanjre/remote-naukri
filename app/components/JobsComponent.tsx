import { Dispatch, SetStateAction, useEffect, useState } from "react";
import JobComponent from "./JobComponent";
import React from "react";
import { jobType } from "../utils/types";

interface JobsComponentProps {
  keywords: string[];
  jobs: jobType[];
  setKeywords: (data: string) => void;
}

const JobsComponent: React.FC<JobsComponentProps> = ({
  jobs,
  keywords,
  setKeywords,
}) => {
  const [filteredData, setFilteredData] = useState<jobType[]>([]);

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
    console.log("data", jobs);
    setFilteredData(jobs);
  }, []);

  // useEffect(() => {
  //   modifiedData();
  // }, [keywords]);

  return (
    <div className="jobs">
      {filteredData &&
        filteredData.map((job) => (
          <div>Hello World</div>
          // <JobComponent key={job.id} job={job} setKeywords={setKeywords} />
        ))}
    </div>
  );
};

export default JobsComponent;
