import React from "react";
import "./Loadingcard.css";

const LoadingCard = () => {
  return (
    <div>
      <div className="cards">
        <div className="card">
          {/* <div className="image">
            <img src="https://assets.codepen.io/43365/bulldog.jpeg" />
          </div>
          <div className="content">
            <h2>Sleepiest Doggo!</h2>
            <p>Look at this sleepiest pupper!</p>
          </div> */}
        </div>

        <div className="card is-loading">
          <div className="image"></div>
          <div className="content">
            <h2></h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
