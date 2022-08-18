import { useState, Dispatch, SetStateAction } from "react";

interface PaginationProps {
  total?: number;
  limit: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  setLimit: Dispatch<SetStateAction<number>>;
}

export default function Pagination({
  // total,
  // setPage,
  // page,
  limit,
  setLimit,
}: PaginationProps) {
  const [isActive, setIsActive] = useState([true]);
  // let numPages = 0;
  // if (typeof total === "number") {
  //   numPages = Math.ceil(total / limit);
  // }

  return (
    <div className="flex flex-row justify-center space-x-5 pb-10 text-md">
      {/* <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </button> */}
      {/* {Array(numPages)
        .fill(undefined)
        .map((undef, i) => {
          return (
            <button
              key={i}
              onClick={() => {
                setPage(i + 1);
                const copy = Array(numPages).fill(false);
                copy[i] = true;
                setIsActive(copy);
              }}
              disabled={isActive[i]}
              className={isActive[i] ? "underline underline-offset-4" : ""}
            >
              {i + 1}
            </button>
          );
        })} */}
      {/* <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </button> */}

      {/* 한무 스크롤 */}
      <button
        onClick={() => {
          setLimit((prev: number) => prev + 7);
        }}
      >
        Load More
      </button>
    </div>
  );
}