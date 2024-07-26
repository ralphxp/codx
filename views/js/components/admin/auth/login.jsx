import React from "react";
import logo from "../../../assets/plasu.jpg";

const Login = () => {
  return (
    <div className="bg-green-200 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-sm">
        <div className="flex justify-center items-center">
            <img src={logo} alt="Plasu" className="h-20 w-20 rounded-full" />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form action="/auth" method="post">
          <div className="mb-4">
            <label
              htmlFor="token"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Token
            </label>
            <input
              type="text"
              id="token"
              name="token"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your token"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
