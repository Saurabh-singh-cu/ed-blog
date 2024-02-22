import React from "react";
// import image from "../assets/image.png";
import image from "../assets/logoh.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="text-white p-2 bg-[#00004C] flex items-center justify-between h-20">
      <a href="#/" className="transformme2 text-2xl font-bold">
        <img style={{width:"198px", marginLeft:"30px"}} src={image} />
      </a>
      <div className="flex justify-center flex-col">
        <span style={{fontFamily:"inherit", }} className="text-xl text-right mr-6 uppercase ">
          Online Education Informational Journal
        </span>

       
      </div>
    </header>
  );
}
