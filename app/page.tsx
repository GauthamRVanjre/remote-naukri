"use client";
import JobsComponent from "./components/JobsComponent";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { NaukriType } from "./utils/types";
import Pagination from "./components/Pagination";

function App() {
  const [filterKeywords, setFilterKeywords] = useState<{
    searchValue: string;
    experienceValue: string | undefined | boolean;
    locationValue: boolean | undefined | string;
    employementTypeValue: string | undefined | boolean;
  }>({
    employementTypeValue: "",
    experienceValue: "",
    locationValue: "",
    searchValue: "",
  });
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

  const removeAllKeywords = () => {
    setFilterKeywords({
      employementTypeValue: "",
      experienceValue: "",
      locationValue: "",
      searchValue: "",
    });
  };

  console.log("keywords", filterKeywords);

  const getData = async () => {
    await fetch(`/api/fetchJobs?take=${pageState.take}&skip=${pageState.skip}&employementType=${filterKeywords.employementTypeValue}
        &experienceValue=${filterKeywords.experienceValue}&location=${filterKeywords.locationValue}&searchValue=${filterKeywords.searchValue}
      `)
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
    console.log("useEffect hit");
    getData();
  }, [pageState.count, pageState.skip, filterKeywords]);

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
          <JobsComponent jobs={jobs} />
        </>
      )}
      <Pagination pageState={pageState} setPageState={setPageState} />
    </div>
  );
}

export default App;
