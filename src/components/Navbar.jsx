import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [adminData, setAdminData] = useState([]);

  useEffect(() => {
    const getAdmin = localStorage.getItem("AdminSaurabh");
    if (getAdmin) {
      const parseData = JSON.parse(getAdmin.trim());
      setAdminData(parseData);
      console.log(adminData?.accessToken, "DEKHO")
    }
  }, []);

  const logout = () => {
    localStorage.clear("AdminSaurabh");
    // window.location.href = "/";
  };

  return (
    <div>
      <nav
        style={{
          height: "50px",
         
        }}
        className="h-14 flex px-6 h-full items-center justify-between  bg-gradient-to-r "
      >
        <ul className="flex gap-6  h-full justify-start px-2 ">
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
              <p className="h-full items-center flex font-bold">Read Research</p>
            </Link>
          </li>

          <li className="h-full">
            <Link to="/bg">
              <p className="h-full items-center flex font-bold">Read Blogs</p>
            </Link>
          </li>

         

          <li className="h-full">
            <Link to="/contact">
              <p className="h-full items-center flex font-bold">
                Have Questions?
              </p>
            </Link>
          </li>

         
        </ul>
        <ul className=" flex gap-6  h-full justify-start px-2 " >
        <li className="h-full">
            <Link to="/cb">
              <p className="h-full items-center flex font-bold">{adminData?.accessToken ? <p>Create Blog</p> : " " }</p>
            </Link>
          </li>

          <li className="h-full">
            <Link to="/cr">
              <p className="h-full items-center flex font-bold">{adminData?.accessToken ? <p>Create Research</p> : " " }</p>
            </Link>
          </li>
          <li className="h-full">
            <Link to="/ut">
              <p className="h-full items-center flex font-bold">{adminData?.accessToken ? <p>Users Response</p> : " " }</p>
            </Link>
          </li>

        <li className="h-full">
            <Link to="/login">
              <p className="h-full items-center flex font-bold">
                {adminData?.accessToken ? (
                  <p onClick={logout}>Logout</p>
                ) : (
                  <p>Login</p>
                )}
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;





