import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];

    // If total pages are more than 100, we show a limited range
    if (totalPages > 100) {
      if (currentPage <= 5) {
        // First few pages (1 to 5)
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages); // Always show the last page
      } else if (currentPage >= totalPages - 5) {
        // Last few pages (totalPages-5 to totalPages)
        pageNumbers.push(1); // Always show the first page
        pageNumbers.push("...");
        for (let i = totalPages - 5; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // Pages around the current page
        pageNumbers.push(1); // Always show the first page
        pageNumbers.push("...");
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages); // Always show the last page
      }
    } else {
      // If total pages are 100 or less, show all page numbers
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    }
    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center p-4 space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-2 py-2 rounded-full ${
          currentPage === 1
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-customNavy text-white hover:bg-blue-600"
        }`}
      >
        <FaAngleLeft />
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => page !== "..." && onPageChange(page)}
          className={`px-1 py-1 rounded-full text-sm w-8 h-8 text-center ${
            page === currentPage
              ? "bg-customNavy text-white"
              : page === "..."
              ? "bg-gray-200 text-gray-500 cursor-default"
              : "bg-gray-200 text-gray-700 hover:bg-customNavy hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-2 py-2 rounded-full ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-customNavy text-white hover:bg-customNavy"
        }`}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Pagination;
