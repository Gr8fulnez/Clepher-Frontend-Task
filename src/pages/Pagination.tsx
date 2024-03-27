import React from "react";
import Button from "../components/Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex justify-center mt-4">
      <nav
        className="relative z-0 inline-flex shadow-sm -space-x-px"
        aria-label="Pagination"
      >
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isFirstPage}
          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          Previous
        </Button>
        <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
          {currentPage}
        </span>
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isLastPage}
          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          Next
        </Button>
      </nav>
    </div>
  );
};

export default Pagination;
