import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Contact = () => {
  return (
    <div>
      <Header />
      <nav
          style={{
            background: "linear-gradient(to right, #000046, #fff",
            height: "50px",
          }}
          className="h-14 flex px-6 h-full items-center justify-end bg-gradient-to-r "
        >
          <ul className="flex gap-6  h-full justify-end px-2 ">
            <li className="h-full">
              <a href="/" className="h-full items-center flex font-bold">
                Home
              </a>
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
              <p className="h-full items-center flex font-bold">
                We're Here
              </p>
              </Link>
            
            </li>
          </ul>
        </nav>
      <main>
        <section className="grid grid-cols-1 m-4 shadow-xl md:grid-cols-4">
          <div style={{backgroundColor:"#00004C"}} className="flex flex-col col-span-2 p-4 py-16 rounded-t-md md:rounded--none md:rounded-l-md">
            <h2 className="text-4xl font-bold tracking-tight text-gray-50 sm:text-5xl lg:text-6xl">
              We're Here For You
            </h2>
            <p className="mt-6 text-gray-100">
              We value your feedback and inquiries. If you have any questions,
              suggestions, or concerns, please feel free to reach out to us. Our
              dedicated team is here to assist you. Email:
              ed.coed@cumail.in Phone: +918006060999 Alternatively, you
              can use the contact form below to send us a message. We appreciate
              your interest and look forward to hearing from you.
            </p>
            <div className="flex flex-col mt-8 space-y-3 text-white">
              <a className="flex items-center text-base" href="tel:+1123-456-7890">
                <i
                  data-lucide="phone"
                  className="flex-shrink-0 w-5 h-auto stroke-text-gray-100"
                ></i>
                <span className="ml-4 text-gray-100">+918006060999</span>
              </a>

              <a
                className="flex items-center text-base"
                href="mailto:ed.coed@cumail.in"
              >
                <i
                  data-lucide="mail"
                  className="flex-shrink-0 w-5 h-auto stroke-text-gray-100"
                ></i>
                <span className="ml-4 text-gray-100">ed.coed@cumail.in</span>
              </a>
            </div>
          </div>

          <div className="col-span-2 p-4 pt-12 rounded-md bg-gray-50">
            <h2 className="mb-8 text-lg font-medium">
              Have a Doubt? Send us a Message
            </h2>
            <form  id="flex flex-col">
              <div className="flex flex-col mt-2 space-y-2">
                <label for="send2m-name" className="">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="px-4 py-2 bg-white border-2 border-gray-200 rounded-md outline-none focus:border-blue-600"
                />
              </div>

              <div className="flex flex-col mt-2 space-y-2">
                <label for="send2m-email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  className="px-4 py-2 bg-white border-2 border-gray-200 rounded-md outline-none focus:border-blue-600"
                />
              </div>

              <div className="flex flex-col mt-2 space-y-2">
                <label for="send2m-subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="px-4 py-2 bg-white border-2 border-gray-200 rounded-md outline-none focus:border-blue-600"
                />
              </div>

              <div className="flex flex-col mt-2 space-y-2">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="px-4 py-2 bg-white border-2 border-gray-200 rounded-md outline-none focus:border-blue-600"
                ></textarea>
              </div>

              <button
                type="submit"
                id="btn"
                style={{backgroundColor:"#00004C"}}
                className="w-full px-4 py-3 mt-8 text-white transition-colors  rounded-md hover:bg-blue-900"
              >
                Send Message
              </button>

              {/* <div className="p-2 mt-4 text-base leading-7 text-black bg-blue-200">
               
                <a
                  className="text-blue-600 hover:underline font-medium"
                  target="_blank"
                  href="https://send2m.com?ref=codepen-contact-form-with-contact-details"
                >
                  Send2M
                </a>
              </div> */}
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
