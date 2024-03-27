// App.js
import React, { createContext, useState } from 'react';
import Employees from './Employees';
import Team from './Team';
import employeesData from './Data';
import './App.css';

export const ProductsContext = createContext();

const App = () => {
  const [team, setTeam] = useState([]);
  const [employees] = useState(employeesData);

  const addToTeam = (employee) => {
    setTeam([...team, employee]);
  };

  const removeFromTeam = (id) => {
    setTeam(team.filter(member => member.id !== id));
  };

  const calculateAverageAge = () => {
    const totalAge = team.reduce((acc, member) => acc + member.age, 0);
    return team.length > 0 ? Math.round(totalAge / team.length) : 0;
  };

  return (
    <ProductsContext.Provider value={{ team, employees, addToTeam, removeFromTeam, calculateAverageAge }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap:'wrap'}}>
        <Employees />
        <Team />
      </div>
    </ProductsContext.Provider>
  );
};

export default App;
