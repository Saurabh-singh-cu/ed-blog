import React from "react";
import image from "../assets/image.png";
export default function Header() {
  return (
    <header className="text-white p-2 bg-[#00004C] flex items-center justify-between h-20">
      <a href="#/" className="text-2xl font-bold">
        <img style={{width:"120px", marginLeft:"30px"}} src={image} />
      </a>
      <div className="flex justify-center flex-col">
        <span style={{fontFamily:"inherit", }} className="text-xl text-right mr-6 uppercase ">
          Online Education Informational Journal
        </span>

       
      </div>
    </header>
  );
}
