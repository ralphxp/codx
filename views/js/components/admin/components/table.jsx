import React, { useState } from "react";

const Table = ({ data, rowsPerPage, columns }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the indexes of the first and last items on the current page
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const renderColumns = columns?.map((column, index) => (
    <th
      key={index}
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      {column}
    </th>
  ));

  const renderTableRows = currentItems.map((item, index) => (
    <tr key={index} className="bg-white border-b">
      {columns.map((cname, i) => (
        
          <td key={i} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {item[cname]}
          </td>
      ))}
    </tr>
  ));

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => (
    <li
      key={number}
      id={number}
      onClick={handleClick}
      className={`px-3 py-2 border border-gray-300 bg-white text-gray-500 hover:bg-gray-200 cursor-pointer ${
        currentPage === number ? "bg-gray-300" : ""
      }`}
    >
      {number}
    </li>
  ));

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 overflow-auto">
          <div className="overflow-hidden shadow-md sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>{renderColumns}</tr>
              </thead>
              <tbody>{renderTableRows}</tbody>
            </table>
            <ul className="flex justify-center mt-4">{renderPageNumbers}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
