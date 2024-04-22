import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EmailCheck } from '../Utils/Functions/EmailCheck.js';
import { PasswordCheck } from '../Utils/Functions/PasswordCheck.js';
import { CheckAllFields } from '../Utils/Functions/CheckAllFields.js';
import { PasswordMatch } from '../Utils/Functions/PasswordMatch.js';
import { api } from '../Utils/Configs/AxiosConfig.js';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const signup = async () => {
    const data = { firstName, lastName, email, password, confirmPassword };

    if (
      !CheckAllFields([firstName, lastName, email, password, confirmPassword])
    ) {
      return false;
    }
    if (!EmailCheck(email)) {
      return false;
    }
    if (!PasswordCheck(password)) {
      return false;
    }
    if (!PasswordMatch(password, confirmPassword)) {
      return false;
    }

    try {
      await api
        .post('/public/signup', response)
        .then((response) => {
          console.log(response);
          navigate('/login');
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen relative overflow-hidden bg-gradient-to-br from-white to-sky-500 mix-blend-multiply dark:bg-gradient-to-br dark:from-black dark:to-sky-900">
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute w-80 h-80 bg-sky-300 opacity-40 mix-blend-multiply transform rotate-45 -translate-x-20 -translate-y-20"></div>
        <div className="absolute w-80 h-80 bg-sky-400 opacity-40 mix-blend-multiply transform rotate-45 translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute w-80 h-80 bg-sky-500 opacity-40 mix-blend-multiply transform rotate-45 -translate-x-1/4 translate-y-1/2"></div>
        <div className="absolute w-80 h-80 bg-sky-300 opacity-40 mix-blend-multiply transform rotate-45 translate-x-1/2 translate-y-1/4"></div>
        <div className="absolute w-80 h-80 bg-sky-400 opacity-40 mix-blend-multiply transform rotate-45 translate-x-3/4 -translate-y-1/2"></div>
        <div className="absolute w-80 h-80 bg-sky-500 opacity-40 mix-blend-multiply transform rotate-45 -translate-x-1/4 translate-y-3/4"></div>
        <div className="absolute w-80 h-80 bg-sky-300 opacity-40 mix-blend-multiply transform rotate-45 translate-x-1/2 translate-y-3/4"></div>
        <div className="absolute w-80 h-80 bg-sky-400 opacity-40 mix-blend-multiply transform rotate-45 translate-x-3/4 translate-y-3/4 bottom-0 right-0"></div>
      </div>

      <div>
        {/* App Name Header */}
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">
          Your App Name
        </h1>
        <div className="w-full p-8 opacity-80 shadow-lg rounded-lg z-10 relative border-2 border-black border-opacity-20 dark:border-white dark:border-opacity-20 bg-blend-multiply backdrop-blur-md">
          {/* Sign Up Form */}
          <div>
            <div className="flex justify-between mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mr-10">
                Create an Account
              </h2>
              <button className="text-sky-500 hover:text-sky-600 font-semibold focus:outline-none border border-sky-500 rounded px-4 py-1">
                <Link to="/login">Log In</Link>
              </button>
            </div>
            <div className="mb-6">
              <p className="text-black dark:text-white">First Name</p>
              <input
                className="w-full block bg-transparent text-gray-800 dark:text-gray-200 border-b-2 border-sky-500 py-2 focus:outline-none focus:border-sky-600 placeholder-gray-500 dark:placeholder-gray-400"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <p className="text-black dark:text-white">Last Name</p>
              <input
                className="w-full block bg-transparent text-gray-800 dark:text-gray-200 border-b-2 border-sky-500 py-2  focus:outline-none focus:border-sky-600 placeholder-gray-500 dark:placeholder-gray-400"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <p className="text-black dark:text-white">Email</p>
              <input
                className="w-full block bg-transparent text-gray-800 dark:text-gray-200 border-b-2 border-sky-500 py-2  focus:outline-none focus:border-sky-600 placeholder-gray-500 dark:placeholder-gray-400"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <p className="text-black dark:text-white">Password</p>
              <input
                className="w-full block bg-transparent text-gray-800 dark:text-gray-200 border-b-2 border-sky-500 py-2  focus:outline-none focus:border-sky-600 placeholder-gray-500 dark:placeholder-gray-400"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-8">
              <p className="text-black dark:text-white">Confirm Password</p>
              <input
                className="w-full block bg-transparent text-gray-800 dark:text-gray-200 border-b-2 border-sky-500 py-2  focus:outline-none focus:border-sky-600 placeholder-gray-500 dark:placeholder-gray-400"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              type="submit"
              onClick={signup}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
