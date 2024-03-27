// Employees.js
import React, { useContext } from 'react';
import { ProductsContext } from './App';

const Employees = () => {
  const { employees, team, addToTeam } = useContext(ProductsContext);

  const isEmployeeInTeam = (id) => {
    return team.some(member => member.id === id);
  };

  return (
    <div className='emp_cont'>
      <h2>All Employees</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id} className={`members ${isEmployeeInTeam(employee.id) ? 'in-team' : ''}`}>
            <div>{employee.first_name} {employee.last_name}</div>
            <div>{employee.age}</div>
            {isEmployeeInTeam(employee.id) ? (
              <button disabled>Added</button>
            ) : (
              <button onClick={() => addToTeam(employee)}>Add</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;
