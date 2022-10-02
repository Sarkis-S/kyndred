import $ from 'jquery';
import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard';

const Employees = () => {
  const [users, setUsers] = useState([]);

  // Makes multiple API calls and store users to populate employee listing
  // TODO: make conversion to populate redux store
  useEffect(() => {
    $.ajax({
      url: 'https://randomuser.me/api/?results=12',
      dataType: 'json',
      success: function(employee) {
        console.log('employees:', employee.results);
        setUsers(employee.results);
      }
    });
  },
    // eslint-disable-next-line
    []);

  return (
    <>
      <main>
        <div className="employee-header">
          <h1>Meet your kydred colleagues</h1>
        </div>
        <div className="employee-card">
          <EmployeeCard users={users} />
        </div>
      </main>
    </>
  )
}

export default Employees;
