

import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { Link, useSearchParams } from "react-router-dom";
import "./Research.css";
import cartImg from "../assets/cartImg.png";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlog = async () => {
    const apiRes = await fetch("http://172.17.18.255:8080/blog-post/all/");
    const response = await apiRes.json();
    const sortedBlogs = response.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    const formattedBlogs = sortedBlogs.map((blog) => {
      const date = new Date(blog.created_at);
      const now = new Date();
      const timeDifference = (now - date) / (1000 * 60 * 60); // Difference in hours

      let formattedDateTime;
      if (timeDifference < 1) {
        formattedDateTime = (
          <p
            style={{
              fontWeight: "bold",
              letterSpacing: "1.5px",
              fontSize: "14px",
              color: "#E2FB08",
            }}
          >
            Recent Post
          </p>
        );
      } else {
        const formattedDate = `${date.getDate()}-${
          date.getMonth() + 1
        }-${date.getFullYear()}`;
        const formattedTime = `${date.getHours()}:${String(
          date.getMinutes()
        ).padStart(2, "0")}`;
        formattedDateTime = `${formattedDate} ${formattedTime}`;
      }

      return { ...blog, formattedDateTime };
    });

    setBlogs(formattedBlogs);
  };

  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <div style={{ width: "98vw" }} className="research">
        <span
          style={{
            fontWeight: "bold",
            fontSize: "25px",
            background: "#00004C",
            color: "white",
          }}
          className="sidebar-title"
        >
          Blogs
        </span>
        {blogs.length < 0 ? (
          <h1>No Blogs Found</h1>
        ) : (
          <>
            {blogs &&
              blogs.map((item) => (
                <div key={item.id}>
                  <div
                    style={{ width: "310px" }}
                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                  >
                    <a
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "-30px",
                      }}
                      href="#"
                    >
                      <img
                        style={{ width: "300px" }}
                        className="rounded-t-lg"
                        src={item?.image}
                        alt=""
                      />
                    </a>
                    <div style={{ padding: "2.5rem" }} className="p-5">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {item?.title}
                        </h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {item?.content.length > 80
                          ? `${item?.content.slice(0, 80)}...`
                          : item?.content}
                      </p>

                      <a
                        onClick={handleClick}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Read more
                        <svg
                          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </a>
                      <p
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "20px",
                          color: "white",
                        }}
                      >
                        {item?.formattedDateTime}
                        {item?.formattedTime}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Blogs;
