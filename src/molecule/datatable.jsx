import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import React, { useState, useMemo } from "react";

const TableComponent = ({ data, columns }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const sortedData = useMemo(() => {
    let sortableData = [...data];

    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableData;
  }, [data, sortConfig]);

  const filteredData = useMemo(() => {
    return sortedData.filter((item) =>
      columns.some((column) =>
        item[column.accessor]
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, sortedData, columns]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return filteredData.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredData, currentPage]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const getPaginationGroup = () => {
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    return [...Array(endPage - startPage + 1).keys()].map((i) => i + startPage);
  };
  return (
    <div className="p-4">
      <input
        type="text"
        className="border border-gray-300 rounded-lg p-2 mb-4 w-1/6 float-right text-sm"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="min-w-full border-collapse  block md:table">
        <thead className="block md:table-header-group">
          <tr className=" text-sm font-bold block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="px-4 py-2   text-left cursor-pointer block md:table-cell"
                onClick={() => requestSort(column.accessor)}
              >
                {column.header}
                {sortConfig.key === column.accessor && (
                  <span className="ml-2 text-gray-600">
                    {sortConfig.direction === "ascending" ? (
                      <KeyboardArrowUp className="text-gray-400" />
                    ) : (
                      <KeyboardArrowDown className="text-gray-400" />
                    )}
                  </span>
                )}
              </th>
            ))}
            <th className="px-4 py-2   text-left cursor-pointer block md:table-cell"></th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group text-sm">
          {paginatedData.map((row, index) => (
            <tr key={index} className=" block md:table-row ">
              {columns.map((column) => (
                <td
                  key={column.accessor}
                  className="px-4 py-2  block md:table-cell"
                >
                  {row[column.accessor]}
                </td>
              ))}
              <td>
                <MoreHoriz className="text-gray-400" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-center items-center text-xs">
        <button
          className="px-4 py-2 font-bold"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <div className="flex space-x-2 font-bold">
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={() => handleClick(item)}
              className={`px-2 py-1   rounded-full ${
                currentPage === item
                  ? "border bg-customGreen text-white"
                  : " text-gray-800"
              }`}
            >
              {item}
            </button>
          ))}
          {currentPage + 2 < totalPages && (
            <span className="px-2 py-1  text-gray-800">...</span>
          )}
        </div>
        <button
          className="px-4 py-2 font-bold"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TableComponent;
