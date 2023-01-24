import React, { useState } from 'react';
import { createUser } from '../api';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
  
  const createNewUser =  (e) => {
    e.preventDefault();

      
    const newUser = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      password: password,
    };

    //axios route, later move this to its own file
    createUser(newUser);
    nav('/login');
  };

  return (
    <form onSubmit={createNewUser}>
      <input
        type="text"
        placeholder="First Name"
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;
