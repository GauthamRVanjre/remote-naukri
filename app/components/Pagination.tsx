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
  const currentPage = Math.floor(pageState.skip / pageState.take) + 1;
  console.log("currentPage: " + currentPage);

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
          {/* <li className="page-item" onClick={goToFirstPage}>
            &laquo; First
          </li> */}
          <li className="page-item" onClick={goToPreviousPage}>
            &#60;
            <p>Previous</p>
          </li>
          <li className="page-input">
            {/* <input
              type="number"
              value={currentPage}
              onChange={(e) => {
                const pageNumber = Math.max(
                  1,
                  Math.min(totalPages, Number(e.target.value))
                );
                setPageState((prev) => ({
                  ...prev,
                  skip: (pageNumber - 1) * pageState.take,
                }));
              }}
              className="page-number"
            /> */}
            <div className="page-number">{currentPage}</div>
            <p>of</p>
          </li>
          <li>{totalPages}</li>
          <li className="page-item" onClick={goToNextPage}>
            <p>Next</p>
            &#62;
          </li>
          {/* <li className="page-item" onClick={goToLastPage}>
            Last &raquo;
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
