import React, { useState } from "react";
import "./ReadMore.css";
import Header from "./Header";
import { Link } from "react-router-dom";

const ReadMore = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const pageStyle = {
    backgroundColor: darkMode ? "#333" : "#fff",
    color: darkMode ? "#fff" : "#333",
  };

  return (
    <>
      <Header />
      <nav
        style={{
        
          height: "50px",
        }}
        className="h-14 flex px-6 h-full items-center justify-end bg-gradient-to-r "
      >
        <ul className="flex gap-6  h-full justify-end px-2 ">
          <li className="h-full">
            <Link to="/" className="h-full items-center flex font-bold">
              Home
            </Link>
          </li>
          <li className="h-full">
            <a
              href="https://noteachingjustlearning.blogspot.com/"
              target="_blank"
              className="h-full items-center flex font-bold"
            >
              Blog
            </a>
          </li>
         
          
          <li className="h-full">
            <Link to="/research">
              <p className="h-full items-center flex font-bold">Research</p>
            </Link>
          </li>
          <li className="h-full">
            <Link to="/contact">
              <p className="h-full items-center flex font-bold">
                Have Questions
              </p>
            </Link>
          </li>
          <li className="h-full">
            <Link to="/login">
              <p className="h-full items-center flex font-bold">Logout</p>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="blog-page" style={pageStyle}>
        <div className="switch-tab">
          <label className="mode">
            Dark Mode
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
          </label>
        </div>
        <header className="header-dl">
          <h1>My React Blog</h1>
        </header>

        <nav className="nav-dl">
          <ul className="ul-dl">
            <li className="li-dl">Home</li>
            <li className="li-dl">Home</li>
            <li className="li-dl">Home</li>
            <li className="li-dl">Home</li>
            <li className="li-dl">Home</li>
          </ul>
        </nav>

        <div className="content">
          <h2>Blog Post Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </p>
        </div>
      </div>
    </>
  );
};

export default ReadMore;
