import React, { useState } from "react";
import Header from "../components/Header";
import bgImage from "../assets/star_1.png";
import Footer from "../components/Footer";
import profileImg from "../assets/profile.png";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import cartImg from "../assets/cartImg.png";

export default function Home() {
  const navigate = useNavigate();

  const [truncate, setTruncate] = useState(false);
  const handleTruncate = () => {
    setTruncate((prev) => !prev);
  };

  const handleClick = () => {
    navigate("/readmore");
  };
  return (
    <div>
      <Header />
      <main className="">
        <nav
          id="nav-small"
          style={{
            
            height: "50px",
          }}
          className=" h-14 flex px-6 h-full items-center justify-end bg-gradient-to-r "
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
        <div
          className={`h-[410px] w-full bg-center bg-cover text-white`}
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="p-10 bg-[#00004C]/50 w-full h-full ">
            <h1 className="text-4xl font-medium">Aims & Objectives</h1>
            <p
              className={`w-1/2 overflow-y-auto ${
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
                style={{ fontWeight: "bold", fontSize: "20px", width:"auto" }}
                className="sidebar-title"
              >
                Blogs
              </span>
              <div>
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                    class="rounded-t-lg"
                    src={cartImg}
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    onClick={handleClick}
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
                        // stroke="currentColor"
                        // stroke-linecap="round"
                        // stroke-linejoin="round"
                        // stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                    class="rounded-t-lg"
                    src={cartImg}
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    onClick={handleClick}
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
                        // stroke="currentColor"
                        // stroke-linecap="round"
                        // stroke-linejoin="round"
                        // stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            </div>
            <div className="research-post">
            <span
                style={{ fontWeight: "bold", fontSize: "20px", width:"auto" }}
                className="sidebar-title"
              >
                Latest Research
              </span>

              
            <div>
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                    class="rounded-t-lg"
                    src={cartImg}
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    onClick={handleClick}
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
                        // stroke="currentColor"
                        // stroke-linecap="round"
                        // stroke-linejoin="round"
                        // stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                    class="rounded-t-lg"
                    src={cartImg}
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    onClick={handleClick}
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
                        // stroke="currentColor"
                        // stroke-linecap="round"
                        // stroke-linejoin="round"
                        // stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            </div>


          


     
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
