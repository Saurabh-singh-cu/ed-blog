import React, { useState } from "react";
import Header from "../components/Header";
import bgImage from "../assets/star_1.png";
import Footer from "../components/Footer";
import profileImg from "../assets/profile.png";
import { Link } from "react-router-dom";

export default function Home() {
  const [truncate, setTruncate] = useState(false);
  const handleTruncate = () => {
    setTruncate((prev) => !prev);
  };
  return (
    <div>
      <Header />
      <main className="">
        <nav
          style={{
            background: "linear-gradient(to right, #000046, #fff",
            height: "50px",
          }}
          className="h-14 flex px-6 h-full items-center justify-end bg-gradient-to-r "
        >
          <ul className="flex gap-6  h-full justify-end px-2 ">
            <li className="h-full">
              <Link to="/home" className="h-full items-center flex font-bold">
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
              <Link to="/contact">
                <p className="h-full items-center flex font-bold">We're Here</p>
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
          className={`h-[480px] w-full bg-center bg-cover text-white`}
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
        <div className="px-10 my-20">
          <div className="flex gap-6 flex-row flex-wrap">
            <div className="flex-1 grid place-items-center">
              <div className="w-60 h-60 bg-gray-400 rounded-full overflow-hidden  justify-center ">
                <img className="shadow-lg" src={profileImg} />
              </div>
              <p className="text-black/90 font-bold text-xl mt-8">
                Prof. (Dr.) Suresh C. Joshi
              </p>
              <p className="text-gray-900 text-black mt-6 text-center w-96">
                Pedagogical Innovations | Instructional Design & Technology |
                Game-Based Teaching | Online Learning | Higher Education |
                Green-House Leadership
              </p>
            </div>
            <div className="flex-1">
              <h1 className="text-[#00004C] text-2xl font-bold">
                About The Author{" "}
              </h1>
              <p className="mt-11">
                Experienced instructional designer and educational psychologist
                with a proven track record of over 28 years in the realms of
                teaching, learning, and technology. Demonstrated leadership in
                shaping strategic plans for academic affairs, instructional
                design, assessment, and digital marketing.{" "}
              </p>
              <p className="mt-4">
                Proficient in developing and executing initiatives to enhance
                online instruction effectiveness while catering to diverse
                learner needs. Adept at fostering collaboration among
                multidisciplinary teams from academia, technology, and industry.
                Passionate about leveraging research insights in areas such as
                gamification, e-learning, and teacher professional development
                to create engaging learning experiences.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
