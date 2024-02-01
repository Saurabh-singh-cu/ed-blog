import React, { useState } from "react";
import image from "../assets/image.png";
import { notification } from "antd";
// import 'antd/dist/antd.css';
import { useNavigate } from "react-router-dom";

const Signin = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (email === "test@gmail.com" && password === "test@1234") {
      setIsAuthenticated(true);
      notification.success({
        message: "Login Successful",
        description: "You have successfully logged in.",
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      notification.error({
        message: "Login Failed",
        description: "Invalid credentials. Please try again.",
      });
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
                Login to Viral&Virtual
              </p>
              <p className="flex flex-col items-center justify-center mt-10 text-center">
                <span>Don't have an account?</span>
                <a href="#" className="underline">
                  Get Started!
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
              <form onSubmit={handleLogin} className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoFocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                    value={formData.email}
                    onChange={handleInputChange}
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
                    value={formData.password}
                    onChange={handleInputChange}
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
                    <span class="font-normal text-gray-500">or login with</span>
                    <span class="h-px bg-gray-400 w-14"></span>
                  </span>
                  <div class="flex flex-col space-y-4">
                    <a
                      href="#"
                      class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          preserveAspectRatio="xMidYMid"
                          viewBox="0 0 256 262"
                          id="google"
                        >
                          <path
                            fill="#4285F4"
                            d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                          ></path>
                          <path
                            fill="#34A853"
                            d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                          ></path>
                          <path
                            fill="#FBBC05"
                            d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                          ></path>
                          <path
                            fill="#EB4335"
                            d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                          ></path>
                        </svg>
                      </span>
                      <span class="text-sm font-medium text-gray-800 group-hover:text-white">
                        Google
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
