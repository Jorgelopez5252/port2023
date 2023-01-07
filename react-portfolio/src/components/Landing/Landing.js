import React from "react";
import "./Landing.css";

function Landing() {
  return (
    <div className="container">
      <br></br>
      <div className="row">
        <div className="col l6">
          <h2>2023</h2>
          <p>
            2023
          </p>
          <h3>Known Technologies</h3>
          <p>
            HTML5, CSS, Javascript, JQuery, Bootstrap, Bulma, Nodejs, MySQL, MongoDB, Express, C#, VUE.JS, React.js
          
          </p>

        </div>
        <div className="col l6">
          <img
            className="portImage"
            src="https://github.com/Jorgelopez5252/port2023/blob/master/react-portfolio/public/images/portphoto.jpeg?raw=true"
            alt="mock"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;