"use client";
import JobsComponent from "./components/JobsComponent";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { NaukriType } from "./utils/types";
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

  const removeAllKeywords = () => {
    setFilterKeywords([]);
  };

  const getData = async () => {
    await fetch(`/api/fetchJobs?take=${pageState.take}&skip=${pageState.skip}`)
      .then((response) => response.json())
      .then((data) => {
        setPageState({
          count: data.count,
          skip: pageState.skip,
          take: pageState.take,
        });
        console.log("data of jobs", data.jobs);
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
  }, [pageState.count, pageState.skip]);

  return (
    <div>
      <div className="header"></div>
      <Header
        loading={loading}
        keywords={filterKeywords}
        setKeywords={setFilterKeywords}
        removeAllKeywords={removeAllKeywords}
      />

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
