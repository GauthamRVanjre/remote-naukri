import React from "react";

interface PaginationProps {
  pageState: {
    skip: number;
    take: number;
    count: number;
  };
  setPageState: React.Dispatch<
    React.SetStateAction<{
      skip: number;
      take: number;
      count: number;
    }>
  >;
}

const Pagination: React.FC<PaginationProps> = ({ pageState, setPageState }) => {
  const totalPages = Math.ceil(pageState.count / pageState.take);

  const goToFirstPage = () => {
    setPageState((prev) => ({ ...prev, skip: 0 }));
  };

  const goToLastPage = () => {
    const lastPageSkip = Math.max(0, totalPages - 1) * pageState.take;
    setPageState((prev) => ({ ...prev, skip: lastPageSkip }));
  };

  const goToPreviousPage = () => {
    const prevPageSkip = Math.max(0, pageState.skip - pageState.take);
    setPageState((prev) => ({ ...prev, skip: prevPageSkip }));
  };

  const goToNextPage = () => {
    const nextPageSkip = Math.min(
      pageState.skip + pageState.take,
      (totalPages - 1) * pageState.take
    );
    setPageState((prev) => ({ ...prev, skip: nextPageSkip }));
  };

  return (
    <div className="container">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item" onClick={goToFirstPage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon"
            ></svg>
          </li>
          <li className="page-item" onClick={goToPreviousPage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon"
            ></svg>
            <p>Previous</p>
          </li>
          <li className="page-input">
            <input
              type="number"
              value={pageState.count}
              onChange={(e) => {
                setPageState({
                  count: parseInt(e.target.value, 10),
                  skip: 0,
                  take: pageState.take,
                });
              }}
              className="page-number"
            />
            <p>of</p>
          </li>
          <li>{totalPages}</li>
          <li className="page-item" onClick={goToNextPage}>
            <p>Next</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon"
            ></svg>
          </li>
          <li className="page-item" onClick={goToLastPage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon"
            ></svg>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
