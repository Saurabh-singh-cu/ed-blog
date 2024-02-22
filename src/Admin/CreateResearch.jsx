import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { notification } from "antd";

const CreateResearch = () => {
  const [loading, setLoading] = useState(false);

  const [postType, setPostType] = useState("research");
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);
  const [adminData, setAdminData] = useState(null);
  const [username, setUserName] = useState([]);
  const [password, setPassword] = useState([]);

  useEffect(() => {
    const getAdmin = localStorage.getItem("AdminSaurabh");
    if (getAdmin) {
      const parseGetAdmin = JSON.parse(getAdmin.trim());
      setAdminData(parseGetAdmin);
      console.log(parseGetAdmin, "ADMIN");
    } else {
      notification.error({
        message: "Not Authenticated!!",
        description: "Please login first",
      });
    }
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "image/png") {
      setImage(file);
    } else {
      notification.error({
        message: "File type error!!",
        description: "Please upload valid png",
      });
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!username || !password) {
        notification.error({
          message: "Login Failed",
          description: "Invalid or no credentials. Please try again.",
        });
        return;  // Return to exit the function if credentials are invalid.
      }
  
      if (!title || !content || !image) {
        notification.error({
          message: "Something went wrong!!",
          description: "Please make sure to fill title and content.",
        });
        return;  // Return to exit the function if title, content, or image is missing.
      }
  
      const basicAuth = btoa(`${username}:${password}`);
  
      if (image) {
        const formData = new FormData();
        formData.append("postType", postType);
        formData.append("title", title);
        formData.append("image", image);
        formData.append("content", content);
  
        fetch("https://apiedportfolio.unicornfortunes.com/research-post/create/", {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Basic ${basicAuth}`,
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log("API response:", data);
            notification.success({
              message: "Post Successful",
              description: "Successfully uploaded a post",
            });
          })
          .catch((error) => {
            console.error("Error sending POST request:", error);
            notification.error({
              message: "Failed",
              description: "Something went wrong",
            });
          });
      } else {
        notification.error({
          message: "Failed",
          description: "Please upload a valid PNG",
        });
      }
    } catch (error) {
      console.log(error);
      notification.error({
        message: "Failed",
        description: "Something went wrong",
      });
    }
  };

  return (
    <div>
      {/* <Header /> */}
      <Navbar />

      <main>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          <section
            style={{ display: "flex", justifyContent: "center" }}
            className="grid grid-cols-1 m-4 shadow-xl md:grid-cols-4"
          >
            <div
              style={{ width: "70%" }}
              className="col-span-2 p-4 pt-12 rounded-md bg-gray-50 "
            >
              <h2 className="mb-8 text-lg font-medium">
                Create Research
              </h2>


              <div className="flex flex-col space-y-1 mt-5">
                <label
                  htmlFor="username"
                  className="text-sm font-semibold text-gray-500"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>

              <div>
                <div className="flex flex-col mt-2 space-y-2">
                  <label htmlFor="send2m-name" className="">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="px-4 py-2 bg-white border-2 border-gray-200 rounded-md outline-none focus:border-blue-600"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="flex flex-col mt-2 space-y-2">
                  <label htmlFor="send2m-email">Thumbnail</label>
                  <input
                    type="file"
                    accept=".png"
                    name="image"
                    id="file"
                    onChange={handleFileChange}
                    className="px-4 py-2 bg-white border-2 border-gray-200 rounded-md outline-none focus:border-blue-600"
                  />
                </div>

                <div className="flex flex-col mt-2 space-y-2">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="px-4 py-2 bg-white border-2 border-gray-200 rounded-md outline-none focus:border-blue-600"
                    onChange={(e) => setContent(e.target.value)}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="btn"
                  style={{ backgroundColor: "#00004C" }}
                  className="w-full px-4 py-3 mt-8 text-white transition-colors  rounded-md hover:bg-blue-900"
                >
                  Post
                </button>
              </div>
            </div>
          </section>
        </form>
      </main>
    </div>
  );
};

export default CreateResearch;
