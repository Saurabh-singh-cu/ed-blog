import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import bgImage from "../assets/star_1.png";
import Footer from "../components/Footer";
import profileImg from "../assets/profile.png";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import cartImg from "../assets/cartImg.png";
import Navbar from "../components/Navbar";
import clock from "../assets/clock.png";
import Loader from "../components/Loader";

export default function Home() {
  const navigate = useNavigate();

  const [truncate, setTruncate] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [research, setResearch] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const apiRes = await fetch(
        "https://apiedportfolio.unicornfortunes.com/blog-post/all/"
      );
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
                color: "#fff",
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

      // Take only the first two blogs
      const recentBlogs = formattedBlogs.slice(0, 2);

      setBlogs(recentBlogs);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const fetchResearch = async () => {
    try {
      setLoading(true);
      // const apiRes = await fetch("http://172.17.18.255:8080/research-post/all/");
      const apiRes = await fetch(
        "https://apiedportfolio.unicornfortunes.com/research-post/all/"
      );
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
                color: "#fff",
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

      // Take only the first two blogs
      const recentBlogs = formattedBlogs.slice(0, 2);

      setResearch(recentBlogs);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleTruncate = () => {
    setTruncate((prev) => !prev);
  };

  const handleClick = () => {
    navigate("/readmore");
  };

  useEffect(() => {
    fetchBlog();
    fetchResearch();
  }, []);

  return (
    <div>
      {/* <Header /> */}
      <main className="">
        <Navbar />
        <div
          className={`h-[410px] w-full bg-center bg-cover text-white`}
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="transformme p-10 bg-[#00004C]/50 w-full h-full ">
            <h1 className="text-4xl font-medium">Aims & Objectives</h1>
            <p
              className={` w-1/2 overflow-y-auto ${
                !truncate ? "truncate" : ""
              } my-12`}
            >
              The aim of this website is to provide a platform for learners to
              educate themselves about the nuances of online education. The
              learners across disciplines and geographical and temporal
              boundaries can come together and share their knowledge about
              online education.
              {!truncate && <br />}
              The discussions will be primarily focused on, but not limited to,
              Online Education and Learning.
              {!truncate && <br />}
              The key areas will include Curriculum Design & Development,
              pedagogical innovations, instructional design & technology,
              Technology Integration into Classroom Teaching, Student Engagement
              & Satisfaction, game-based teaching, simulations, and case
              studies, role of metaverse in online learning, and higher
              education.
            </p>
            <button
              className="border text-white p-2 rounded-md"
              onClick={handleTruncate}
            >
              {!truncate ? "Know More" : "Know Less"}
            </button>
          </div>
        </div>

        <div className="home-blog">
          <div className="home-left">
            <div className="flex-1 grid place-items-center">
              <div
                id="imgsir"
                className="w-60 h-60 mt-10 rounded-full overflow-hidden  justify-center "
              >
                <img className="shadow-lg" src={profileImg} />
              </div>
              <p className="text-black/90 font-bold text-xl mt-8">
                Prof. (Dr.) Suresh C. Joshi
              </p>
              <p
                style={{ letterSpacing: "1.5px" }}
                className="text-gray-900 text-black mt-6 text-center w-80 "
              >
                Pedagogical Innovations | Instructional Design & Technology |
                Game-Based Teaching | Online Learning | Higher Education |
                Green-House Leadership
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "30px",
                flexDirection: "column",
              }}
            >
              <span
                style={{ fontWeight: "bold", fontSize: "15px" }}
                className="sidebar-title"
              >
                About Me
              </span>
              <span className="aboyDis">
                Experienced instructional designer and educational psychologist.
                Proven leadership in strategic planning for academic affairs,
                instructional design, assessment, and digital marketing. Skilled
                in enhancing online instruction for diverse learners and
                fostering collaboration among multidisciplinary teams.
              </span>
              <span
                style={{ fontWeight: "bold", fontSize: "15px" }}
                className="sidebar-title"
              >
                Connect with me
              </span>
              <div class="social-menu">
                <ul>
                  <li></li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/joshisc/"
                      target="blank"
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://noteachingjustlearning.blogspot.com/"
                      target="_bk"
                    >
                      <i class="fab fa-codepen" target="blank"></i>
                    </a>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="home-right">
            <div className="blog-post">
              <span
                style={{ fontWeight: "bold", fontSize: "20px", width: "auto" }}
                className="sidebar-title"
              >
                Latest Publications
              </span>
              {loading === true ? (
                <>
                  <Loader />{" "}
                </>
              ) : (
                <>
                  {" "}
                  {blogs &&
                    blogs.map((item) => (
                      <div key={item.id}>
                        <div
                          style={{ backgroundColor: "#1F2937" }}
                          class="max-w-sm bg-white border border-gray-200 rounded-lg shadow "
                        >
                          <a
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              width: "380px",
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
                              <button
                                style={{ height: "37px" }}
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
              )}

              <div style={{ display: "flex", justifyContent: "center" }}>
                <h2
                  style={{
                    letterSpacing: "1.5px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  <Link to="/bg">Read More</Link>
                </h2>
              </div>
            </div>
            <div className="research-post">
              <span
                style={{ fontWeight: "bold", fontSize: "20px", width: "auto" }}
                className="sidebar-title"
              >
                Trending Now
              </span>

             {loading === true ? <Loader /> : <> {research &&
                research.map((item) => (
                  <div key={item.id}>
                    <div
                      style={{ backgroundColor: "#1F2937" }}
                      class="max-w-sm bg-white border border-gray-200 rounded-lg shadow "
                    >
                      <a
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          width: "380px",
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
                            ? `${item?.content.slice(0, 80)}...`
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
                          <button
                            style={{ height: "37px" }}
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
                ))}</>}

              <div style={{ display: "flex", justifyContent: "center" }}>
                <h2
                  style={{
                    letterSpacing: "1.5px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  <Link to="/research">Read More</Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
