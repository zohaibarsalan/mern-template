import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import SignUp from './Pages/SignUp.jsx';
import Login from './Pages/Login.jsx';
import ThemeSwitcher from './Components/ThemeSwitcher.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Private Routes */}
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
