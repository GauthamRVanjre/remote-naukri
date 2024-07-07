"use client";
import JobsComponent from "./components/JobsComponent";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { NaukriType, jobType } from "./utils/types";
import Pagination from "./components/Pagination";

function App() {
  const [filterKeywords, setFilterKeywords] = useState<string[]>([]);
  const [jobs, setJobs] = useState<NaukriType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageState, setPageState] = useState<{
    skip: number;
    take: number;
    count: number;
  }>({
    count: 0,
    skip: 0,
    take: 10,
  });

  const addFilterKeywords = (data: string) => {
    if (!filterKeywords.includes(data)) {
      setFilterKeywords([...filterKeywords, data]);
    }
  };

  const deleteFilterKeywords = (data: string) => {
    const newKeywords = filterKeywords.filter((key) => key !== data);
    setFilterKeywords(newKeywords);
  };

  const clearAllKeywords = () => {
    setFilterKeywords([]);
  };

  const getData = async () => {
    await fetch("/api/fetchJobs")
      .then((response) => response.json())
      .then((data) => {
        console.log("data from api", data);
        setJobs(data.jobs);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="header"></div>
      {/* {filterKeywords.length > 0 && (
        <Header
          keywords={filterKeywords}
          removekeywords={deleteFilterKeywords}
          removeAllKeywords={clearAllKeywords}
        />
      )} */}
      {jobs && jobs.length > 0 && !loading && (
        <>
          <JobsComponent
            keywords={filterKeywords}
            jobs={jobs}
            setKeywords={addFilterKeywords}
          />
        </>
      )}
      <Pagination pageState={pageState} setPageState={setPageState} />
    </div>
  );
}

export default App;
