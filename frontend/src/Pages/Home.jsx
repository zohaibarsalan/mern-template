import React, { useState } from 'react';
import { api } from '../Utils/Configs/AxiosConfig.js';
import { Logout } from '../Utils/Logout.js';

const Home = () => {
  const [users, setUsers] = useState();
  const click = async () => {
    api.get('/private/users').then((data) => {
      console.log(data);
      setUsers(data.data.message);
    });
  };

  const logout = () => {
    Logout();
  };

  return (
    <div>
      <h1>Home</h1>
      <button
        className="m-2 p-2 bg-sky-300 text-center text-lg"
        onClick={click}
      >
        Click me
      </button>
      <button
        className="m-2 p-2 bg-sky-300 text-center text-lg"
        onClick={logout}
      >
        Logout
      </button>
      <p>{users}</p>
    </div>
  );
};
export default Home;
