import React from "react";
import "./Loadingcard.css";

const LoadingCard = () => {
  return (
    <div className="loader-set">
    <h1 className="hang">Hang Tight<span className="dot-dot">...</span></h1>
    <h5 className="iam">I am loading<span className="dot-dot">...</span></h5>
    </div>
  );
};

export default LoadingCard;
