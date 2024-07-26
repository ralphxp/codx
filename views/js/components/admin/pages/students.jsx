import React from 'react';
import Table from '../components/table';

const data = [
  {ID:1, Name:"Ralph Panchi", Dept:"C.S", Level:"100L"}
]

const columns = ["ID", "Name", "Dept", "Level"]

const Students = () => {
  return (
    <div className="App">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Students Attendance</h1>
        <Table data={data} rowsPerPage={10} columns={columns} />
      </div>
    </div>
  );
};

export default Students;
