import React, { useState, useEffect } from 'react';
import { getProfiles } from '../api/profileApi';


const TotalUsers = ({id}) => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProfiles(id)
        console.log(response.data)
        setUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);



  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id} >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TotalUsers;
