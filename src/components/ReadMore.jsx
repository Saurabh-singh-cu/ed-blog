import React, { useEffect, useState } from "react";
import "./ReadMore.css";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const ReadMore = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  useEffect(() => {
    const fetchBlogData = async () => {
      const apiUrl = `https://apiedportfolio.unicornfortunes.com/research-post/${id}`;
      console.log("API URL:", apiUrl);
  
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
  
    fetchBlogData();
  }, [id]);
  



  const pageStyle = {
    backgroundColor: darkMode ? "#333" : "#fff",
    color: darkMode ? "#fff" : "#333",
  };

  return (
    <>
      {/* <Header /> */}
    <Navbar />
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
          <h1>Read</h1>
        </header>

        <nav className="nav-dl">
          <ul className="ul-dl">
            <li className="li-dl">Read</li>
            <li className="li-dl">Understand</li>
            <li className="li-dl">Summerize</li>
            <li className="li-dl">Think</li>
            <li className="li-dl">Execute</li>
          </ul>
        </nav>

        <div className="content">
        <div className="content">
          {blogData ? (
            <>
              <h2>{blogData.title}</h2>
              <p>{blogData.content}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        </div>
      </div>
    </>
  );
};

export default ReadMore;
