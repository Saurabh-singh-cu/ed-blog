import React, { useEffect, useState } from "react";
// import image from "../assets/image.png";
import image from "../assets/logoh.png";

import { Link, useNavigate } from "react-router-dom";
import { loginManual } from "../redux/LoginAction";
import { notification } from "antd";

const Signin = () => {
  const navigate = useNavigate();

  const [email, setUserEmail] = useState([]);
  const [password, setUserPassword] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginManual(email, password);
    } catch (error) {
     notification.error({
      message:"Wrong Credential"
     })
    }
  };
  return (
    <div>
      <main>
        <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
          <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
            <div
              style={{ backgroundColor: "#00004C" }}
              className="p-4 py-6 text-white md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
            >
              <div className="my-3 text-4xl font-bold tracking-wider text-center">
                <img src={image} alt="Logo" />
              </div>
              <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
                Login to OnlineEdBuzz
              </p>
              <p className="flex flex-col items-center justify-center mt-10 text-center">
                <span>If not Admin, go to home page</span>
                <a href="/" className="underline">
                  Go!
                </a>
              </p>
              <p className="mt-6 text-sm text-center text-gray-300">
                Read our{" "}
                <a href="#" className="underline">
                  terms
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  conditions
                </a>
              </p>
            </div>
            <div className="p-5 bg-white md:flex-1">
              <h3 className="my-4 text-2xl font-semibold text-gray-700">
                Account Login
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Email address
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-sm font-semibold text-gray-500"
                    >
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline focus:text-blue-800"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                    value={password}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </div>
                <div class="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                  />
                  <label
                    for="remember"
                    class="text-sm font-semibold text-gray-500"
                  >
                    Remember me
                  </label>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                  >
                    Log in
                  </button>
                </div>
                <div class="flex flex-col space-y-5">
                  <span class="flex items-center justify-center space-x-2">
                    <span class="h-px bg-gray-400 w-14"></span>
                    <span class="font-normal text-gray-500">Not Admin</span>
                    <span class="h-px bg-gray-400 w-14"></span>
                  </span>
                  <div class="flex flex-col space-y-4">
                    <a
                      href="#"
                      class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                    >
                      <span class="text-sm font-medium text-gray-800 group-hover:text-white">
                        <Link to="/">Go to Home</Link>
                      </span>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signin;
