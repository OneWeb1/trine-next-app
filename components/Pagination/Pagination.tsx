import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "../../hooks/usePagination";
import "./Pagination.scss";
import CustomImage from "../ui/images/CustomImage/CustomImage";

type PaginationProps = {
  onPageChange: (pageNumber: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className: string;
};

const Pagination = (props: PaginationProps) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (!paginationRange) return;

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames("pagination-container", { [className]: className })}
    >
      <li
        style={{ marginTop: "2px" }}
        className={classnames("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <CustomImage
          style={{ marginLeft: "3px" }}
          src="/assets/home/arrow-left.svg"
          alt="image"
          width={11}
          height={11}
        />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li key={Math.random()} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={Math.random()}
            style={{ marginTop: "2px" }}
            className={classnames("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(Number(pageNumber))}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        style={{ marginTop: "2px" }}
        className={classnames("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <CustomImage
          style={{ marginLeft: "-3px" }}
          src="/assets/home/arrow-right.svg"
          alt="image"
          width={11}
          height={11}
        />
      </li>
    </ul>
  );
};

export default Pagination;
