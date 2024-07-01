import React, { useEffect, useState } from "react";
import JobComponent from "./JobComponent";

const JobsComponent = ({ keywords, jobs, setKeywords }) => {
  const [filteredData, setFilteredData] = useState([]);

  const modifiedData = () => {
    if (keywords.length > 0) {
      const newData = filteredData.filter((d) => {
        return keywords.every((key) => {
          return (
            d.role == key ||
            d.level == key ||
            d.languages.includes(key) ||
            d.tools.includes(key)
          );
        });
      });

      setFilteredData(newData);
    } else {
      setFilteredData(jobs);
    }
  };

  useEffect(() => {
    modifiedData();
  }, [keywords]);

  return (
    <div className="jobs">
      {filteredData.map((job) => (
        <JobComponent key={job.id} job={job} setKeywords={setKeywords} />
      ))}
    </div>
  );
};

export default JobsComponent;
