import React from "react";
import Table from "../components/table";
const data = [
  {
    ID: 1,
    Name: "John Doe",
    Dept: "Comp. Science",
    Course: "CSC 111",
    Date: "9:30 03/07",
    Status: <div className="bg-red-500 w-fit h-fit rounded-full py-1 px-2 capitalize text-gray-50"> Absent</div>,
  }
];

const columns = ["ID", "Name", "Dept", "Course", "Date", "Status"];

const Attendance = () => {
  return (
    <div className="App">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Students Attendance</h1>
        <Table data={data} rowsPerPage={10} columns={columns} />
      </div>
    </div>
  );
};

export default Attendance;
