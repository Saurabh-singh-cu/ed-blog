import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import axios from "axios";
import { notification } from "antd";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [message, setMessage] = useState([]);

  const fetchApi = async () => {
    setLoading(true);

    try {
      let data = {
        title: name,
        email: email,
        content: message,
      };

      let config = {
        method: "POST",
        url: "https://apiedportfolio.unicornfortunes.com/text-post/create/",
        headers: {
          "Content-Type": "application/json",
        },
        data,
      };

      const response = await axios(config);
      const apiResponse = response.data;
      notification.success({
        message: "Message Sent",
        description: "Successfully Sent Message to Admin",
      });
      setName("");
      setEmail("");
      setMessage("");


      setLoading(false);
    } catch (error) {
      console.log(error, "MESSAGE");
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetchApi(name, email, message);

    } catch (error) {
      console.log(error, "POST");
    }
  };

  return (
    <div>
      <Header />
      <Navbar />
      <main>
        <section className="grid grid-cols-1 m-4 shadow-xl md:grid-cols-4">
          <div
            style={{ backgroundColor: "#00004C" }}
            className="flex flex-col col-span-2 p-4 py-16 rounded-t-md md:rounded--none md:rounded-l-md"
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-50 sm:text-5xl lg:text-6xl">
              We're Here For You
            </h2>
            <p className="mt-6 text-gray-100">
              We value your feedback and inquiries. If you have any questions,
              suggestions, or concerns, please feel free to reach out to us. Our
              dedicated team is here to assist you. You can use the contact form
              below to send us a message. We appreciate your interest and look
              forward to hearing from you.
            </p>
            <div className="flex flex-col mt-8 space-y-3 text-white">
              <a
                className="flex items-center text-base"
                href="tel:+1123-456-7890"
              >
                <i
                  data-lucide="phone"
                  className="flex-shrink-0 w-5 h-auto stroke-text-gray-100"
                ></i>
              </a>

              <a
                className="flex items-center text-base"
                href="mailto:ed.coed@cumail.in"
              >
                <i
                  data-lucide="mail"
                  className="flex-shrink-0 w-5 h-auto stroke-text-gray-100"
                ></i>
              </a>
            </div>
          </div>

          <div className="col-span-2 p-4 pt-12 rounded-md bg-gray-50">
            <h2 className="mb-8 text-lg font-medium">
              Have a Doubt? Send us a Message
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mt-2 space-y-2">
                <label for="send2m-name" className="">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-2 bg-white border-2 border-gray-200 rounded-md outline-none focus:border-blue-600"
                />
              </div>

              <div className="flex flex-col mt-2 space-y-2">
                <label for="send2m-email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autocomplete="email"
                  className="px-4 py-2 bg-white border-2 border-gray-200 rounded-md outline-none focus:border-blue-600"
                />
              </div>

              <div className="flex flex-col mt-2 space-y-2">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="px-4 py-2 bg-white border-2 border-gray-200 rounded-md outline-none focus:border-blue-600"
                ></textarea>
              </div>

              <button
                type="submit"
                id="btn"
                style={{ backgroundColor: "#00004C" }}
                className="w-full px-4 py-3 mt-8 text-white transition-colors  rounded-md hover:bg-blue-900"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        <script src="https://cdn.tailwindcss.com"></script>
        {/* <script src="https://unpkg.com/lucide@latest"></script> */}
        {/* <script>lucide.createIcons();</script> */}
      </main>
      <Footer />
    </div>
  );
};
/* Rectangle 9 */

export default Contact;
