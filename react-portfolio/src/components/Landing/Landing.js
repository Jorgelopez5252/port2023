import React from "react";
import "./Landing.css";

function Landing() {
  return (
    <div className="container">
    <div class="row">
    <div class="col s12 m4">
          <div>
          <img
            className="techImage"
            src="https://github.com/Jorgelopez5252/port2023/blob/master/react-portfolio/public/images/html.png?raw=true"
            alt="mock"
          />
            <h5 class="center">HTML</h5>
            <p class="light">Heavy Knowledge of basic and advance HTML5 syntax, all from paragraphs, links, forms, media
              to more advanced features such as ASP.NET Razor Syntax. Created HTML emails and tested functionality
              across multiple email providers with various tools such as Firebase. An Understanding how to create custom
              attributes using data-*. Keen understanding on how to build HTML documents semantically and keep within
              ADA Rules and any compliance required.</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div>
          <img
            className="techImage"
            src="https://github.com/Jorgelopez5252/port2023/blob/master/react-portfolio/public/images/css.png?raw=true"
            alt="mock"
          />
            <h5 class="center">FRONT-END</h5>

            <p class="light">Knowledge of various frameworks such as but not limited to Bulma, Bootstrap, ZURB
              Foundation and Materialize. Ability to use Sass to build websites based on mockups and prototypes.
              Optimized images with Photoshop and Illustrator. Worked within UX/UI design tools including XD, Sketch and
              Figma. Integrated websites with social networks & SVG animations to provide details and style, usability
              to websites.</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div>
          <img
            className="techImage"
            src="https://github.com/Jorgelopez5252/port2023/blob/master/react-portfolio/public/images/javascript.png?raw=true"
            alt="mock"
          />
            <h5 class="center">BACK-END</h5>

            <p class="light">Various experience's using a wide range of back-end tools and languages successfully such
              as JavaScript, C#, Express.js, REST API, Node.js, MySQL, REACT.js, and VUE.js. Heavy knowledge in
              Asynchronous programming, writing cross-browser code, React JSX, Hooks & components. Virtual DOM
              manipulation, testing and debugging. Server side knowledge on how to make calls and responses to and from
              Databases & Servers.</p>
          </div>
        </div>
    </div>
    </div>
  );
}

export default Landing;