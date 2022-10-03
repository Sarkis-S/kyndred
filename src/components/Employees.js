import $ from 'jquery';
import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard';

// TODO: Search feature, filter (place, gender, year/month of birth)

// TODO: create & apply debounce method on searches

const Employees = () => {
  const [users, setUsers] = useState([]);

  // Makes multiple API calls to populate employee listing from return statement

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
  }, []);

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
