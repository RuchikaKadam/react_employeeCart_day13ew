import React, { useContext, useState, useEffect } from 'react';
import { ProductsContext } from './App';

const Team = () => {
  const { team, removeFromTeam, calculateAverageAge } = useContext(ProductsContext);
  const [sortedTeam, setSortedTeam] = useState([]);

  useEffect(() => {
    setSortedTeam([...team]);
  }, [team]);

  const handleSortByAge = () => {
    const sorted = [...sortedTeam].sort((a, b) => a.age - b.age);
    setSortedTeam(sorted);
  };

  return (
    <div className='team_cont'>
      <h2>Team Members</h2>
      <button onClick={handleSortByAge}>Sort by Age</button>
      {sortedTeam.length === 0 ? <p>No team members added</p> : (
        <ul>
          {sortedTeam.map(member => (
            <li key={member.id} className='members'>
              <div>{member.first_name} {member.last_name}</div>
              <div>{member.age}</div>
              <div><button onClick={() => removeFromTeam(member.id)}>Remove</button></div>
            </li>
          ))}
        </ul>
      )}
      <p className='total'>Average Age: {calculateAverageAge()}</p>
    </div>
  );
};

export default Team;
