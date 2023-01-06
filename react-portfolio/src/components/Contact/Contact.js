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
            I was born in San Diego, California but moved to Mesa, Arizona when
            I was 7 years old, you can say I am a native here at this point! I
            recently graduated from the UofA Full Stack Web Developer coding
            course, and excited to put my skills out in the field. My background
            currently is in Banking/Financing where I'm known for my creative
            and effective problem solving skills to develop user-friendly
            applications as well as my strong teamwork and attention to detail
            no matter the complexity of the project.
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

export default Contact;
