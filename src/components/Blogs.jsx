

import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { Link, useSearchParams } from "react-router-dom";
import "./Research.css";
import clock from "../assets/clock.png"
import cartImg from "../assets/cartImg.png";
import LoadingCard from "./LoadingCard";
import Footer from "./Footer";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading ] = useState(false);


  const fetchBlog = async () => {
    setLoading(true)
   try{
    const apiRes = await fetch("https://apiedportfolio.unicornfortunes.com/blog-post/all/");
    const response = await apiRes.json();
    const sortedBlogs = response.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
    console.log(response, "BLOGS")

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
            Recent Blog
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
    setLoading(false);
   }catch(error) {
    console.log(error)
   }
  };

  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <div style={{ width: "98vw" }} className="research">
        <span
          style={{
            fontWeight: "bold",
            fontSize: "25px",
            // background: "#00004C",
            color: "#00004C",
          }}
          className="sidebar-title"
        >
          Trending Now
        </span>
      {loading === true ? <LoadingCard /> : <>  {blogs.length <= 0 ? (
          <h1>No Blogs Found</h1>
        ) : (
          <>
            {blogs &&
              blogs.map((item) => (
                <div key={item.id}>

                       <div style={{backgroundColor:"#1F2937"}} class="max-w-sm h-96 bg-white border border-gray-200 rounded-lg shadow ">
                    <a
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "380px",
                        height:"373px !important"
                      }}
                      href="#"
                    >
                      <img
                        style={{
                          width: "354px",
                          marginTop: "-20px",
                          height: "210px",
                        }}
                        class="rounded-t-lg"
                        src={`data:image/png;base64,${item.image}`}
                        alt=""
                      />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {item?.title.length > 20
                            ? `${item?.title.slice(0, 30)}...`
                            : item?.title}
                        </h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {item?.content.length > 80
                          ? `${item?.content.slice(0, 80)}....Read More`
                          : item?.content}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "350px",
                          alignItems: "center",
                        }}
                      >
                        <a
                          href="#"
                          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Read more
                          <svg
                            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </a>
                        <button style={{height:"37px"}}
                          type="button"
                          class="text-white bg-[#4da3bd] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 "
                        >
                          <img
                            style={{ width: "30px", marginRight: "10px" }}
                            src={clock}
                          />
                       
                          <span>{item?.formattedDateTime}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </>
        )}</>}
      </div>
     
    </div>
  );
};

export default Blogs;
