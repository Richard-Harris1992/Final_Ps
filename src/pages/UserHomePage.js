import React from 'react';

const UserHomePage = ({ id }) => {
  return (
    <div>
      <h1>Welcome to your profile page</h1>
      <p>Your id is: {id}</p>
    </div>
  );
};

export default UserHomePage;