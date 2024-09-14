import {  FacebookOutlined, Google } from "@mui/icons-material";
import React from "react";
import loginBanner from "../assets/login-banner.jpg"
const LoginPage = () => {
  return (
    <div className="flex h-screen p-4 rounded-lg ">
      <div
        className="w-1/2 bg-cover bg-center rounded-l-lg"
        style={{ backgroundImage: `url(${loginBanner})` }}
      ></div>

      {/* Right side - Login Form */}
      <div className="w-1/2 flex items-center justify-center bg-white rounded-r-lg">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6  text-2xl font-extrabold text-gray-900">
              Login
            </h2>
            <span className="flex items-center gap-2 text-sm">
              Continue with
              <div className="rounded-full h-8 w-8 flex justify-center items-center bg-orange-300">
                <Google className="text-white p-1" />
              </div>
              <div className="rounded-full h-8 w-8 flex justify-center items-center bg-orange-300">
                <FacebookOutlined className="text-white p-1" />
              </div>
              or
            </span>
          </div>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
             
              <div className="text-sm">
              <a
                  className="font-medium text-gray-500"
                >
                  Forgot your password?
                </a>
                <a
                  className="font-medium  px-2 text-red-300"
                >
                  Reset password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-customGreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </form>
          <div className="font-extrabold  text-sm text-gray-500 text-center">Don't have account? <span className="text-red-300">Sign up.</span></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
