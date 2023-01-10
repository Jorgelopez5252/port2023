import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="container">
      <br></br>
      <div className="row">
        <div className="col l6">
          <h2>About Me</h2>
          <p>
          Solution-driven web developer adept at contributing to highly collaborative and fast paced work environments. Love to collaborate in group settings as my ability to communicate and pass information in a friendly and understanding way always comes helpful! I am reliable and committed to meet all deadlines and request. I have worked in various projects from small local restaurant menus to bigger projects requests from Coke, Pepsi, NFL, Buffalo Wild Wings, Starbucks, Venmo, PayPal to name a few and hopefully more to come. 

          </p>
          <h3>Known Technologies</h3>
          <p>
            HTML5, CSS, Javascript, JQuery, Bootstrap, Bulma, Nodejs, MySQL, REST API MongoDB, Express, C#, VUE.JS, React.js
          
          </p>

        </div>
        <div className="col l6">
          <img
            className="portImage"
            src="https://github.com/Jorgelopez5252/port2023/blob/master/react-portfolio/public/images/profilePic.jpeg?raw=true"
            alt="mock"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
