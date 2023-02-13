import React, { useState } from 'react';
import Router from 'next/router';

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      // Implement your login logic here.
      // For example, send a request to your server to check if the user exists and the password is correct.

      // Redirect to the home page after successful login
      Router.push('/');
    } catch (error) {
      setErrorMessage('Login failed. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-xs mx-auto my-20">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-medium mb-6 text-center">Login</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && (
          <p className="text-red-500 text-xs italic">{errorMessage}</p>
        )}
        <div className="flex items-center justify-center">
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default login;
