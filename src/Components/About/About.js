import React, { Component } from "react";
import "./about.css";

export default class About extends Component {
  render() {
    return (
      <section id="aboutMe" classNameName="container-about" tabindex="-1">
        <div className="overlay-about"></div>
        <div className="title-about">
          <h1>
            About
            <span className="span-one">
              <span className="span-two">Bruno</span>
            </span>
          </h1>
        </div>
        <div className="intro-container-about">
          <div className="left-content">
            <div className="left-container-title">
              <h3>
                I am a Web Developer
                <br />
                Based in Dallas, Tx
              </h3>
            </div>
            <div className="left-container-text">
              <p>I am a Front-End Developer with Full-Stack exposure</p>
              <p>
                An IT professional with 6 years of experience in different
                IT-related fields; from Application Support, to server
                configuration, and Data Analysis
              </p>
            </div>
          </div>
          <div className="right-content">
            <img
              src="https://res.cloudinary.com/duprwuo4j/image/upload/v1578605373/imgs_starwars/imgs/80195726_10156948905838597_8993168142045806592_n_bylsfs.jpg"
              alt="This is my Family"
            />
          </div>
        </div>
        <div className="text-area">
          <div className="text-one">
            <p className="icon-holder">
              <i className="fa fa-heart"></i>
            </p>
            <p className="text-holder">
              I am particularly passionate about my family, well designed, clean
              coded-front-to-back-web applications, to serve poor communities in
              my spare time, and to drink coffee
              <i className="fa fa-coffee"></i>
            </p>
          </div>

          <div className="text-two">
            <p className="text-holder">
              A perfectly accomplished day for me is when I spend some time with
              my son and wife, I learn something new, and when I debug/develop
              something awesome, all of this accompanied with a nice warm cup of
              coffee <i className="fa fa-mug-hot"></i>
            </p>
            <p className="icon-holder">
              <i className="fa fa-check-circle"></i>
            </p>
          </div>
          <div className="text-three">
            <p className="icon-holder">
              <i className="fa fa-handshake-o"></i>
            </p>
            <p className="text-holder">
              My previous experiences as a full-time missionary and 6+ years in
              IT application support, not only reflects my passions for
              technology and care for people but taught me how to approach every
              situation and individual as unique and how to develop a
              well-organized strategy to problem solve.
            </p>
          </div>

          <div className="text-four">
            <p className="icon-holder">
              <i className="fa fa-laptop"></i>
            </p>
            <p className="text-holder">
              I am always searching for self-improvement. So, I completed a
              <span>
                24-week, 500-hour full-stack Software Engeneering bootcamp at
                General Assembly
              </span>
              . It was conducted in a remote setting, providing experience with
              the latest front- and back-end programming languages, tools, and
              methodologies.
            </p>
          </div>
        </div>

        <div className="sub-title">
          <h1>
            Some
            <span className="span-one">
              <span className="span-two">Projects</span>
            </span>
          </h1>
        </div>
        <div className="projects">
          <div className="card-one">
            <div className="card">
              <div className="card-image-one"></div>
              <div className="card-text">
                <span className="demo">
                  <a
                    href="https://dasilvabrunotexas.github.io/project_1/index.html"
                    target="_blank"
                  >
                    DEMO
                  </a>
                </span>
                <h2>Learn & Play</h2>
                <p>
                  It is a platform where children at the age of 3-8 can learn
                  while playing Drag&Drop Grames.
                </p>
              </div>
              <div className="card-stats">
                <div className="stat">
                  <div className="value">HTML/CSS</div>
                  <div className="type">JavaScript</div>
                </div>
                <div className="stat border">
                  <div className="value">jQuery</div>
                  <div className="type">jQuery-UI</div>
                </div>
                <div className="stat">
                  <div className="value">Illustrator</div>
                  <div className="type">Bootstrap</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-two">
            <div className="card">
              <div className="card-image-two"></div>
              <div className="card-text">
                <span className="demo">
                  <a
                    href="https://star-wars-heroes-app.herokuapp.com/"
                    target="_blank"
                  >
                    DEMO
                  </a>
                </span>
                <h2>Star Wars Heroes</h2>
                <p>
                  A full-stack web application. Users can view, edit
                  informations of the most iconic Star Wars heroes. Also, they
                  can create their own characters.
                </p>
              </div>
              <div className="card-stats">
                <div className="stat">
                  <div className="value">React</div>
                  <div className="type">JSX</div>
                </div>
                <div className="stat border">
                  <div className="value">JSON</div>
                  <div className="type">SWAPI-API</div>
                </div>
                <div className="stat">
                  <div className="value">Express</div>
                  <div className="type">MongoDB</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-three">
            <div className="card">
              <div className="card-image-three"></div>
              <div className="card-text">
                <span className="demo">
                  <a
                    href="https://youtube-api-learning-app.herokuapp.com/#/youtubeList"
                    target="_blank"
                  >
                    DEMO
                  </a>
                </span>
                <h2>YouTube DEVLearn</h2>
                <p>
                  A learning App for Web developers.It uses a Youtube API call
                  to fetch and display a list of tutorials based on the user's
                  learning preferences.
                </p>
              </div>
              <div className="card-stats">
                <div className="stat">
                  <div className="value">React</div>
                  <div className="type">Express</div>
                </div>
                <div className="stat border">
                  <div className="value">MongoDB</div>
                  <div className="type">Mongoose</div>
                </div>
                <div className="stat">
                  <div className="value">YouTubeAPI</div>
                  <div className="type">Bootstrap</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-two">
            <div className="card">
              <div className="card-image-four"></div>
              <div className="card-text">
                <span className="demo">
                  <a
                    href="https://star-wars-heroes-app.herokuapp.com/"
                    target="_blank"
                  >
                    DEMO
                  </a>
                </span>
                <h2>Hotel Reservation</h2>
                <p>
                  A full-stack web application built with React on Rails stack.
                  A CRUD application which provides users with a option to
                  reserve, delete, and update a room.
                </p>
              </div>
              <div className="card-stats">
                <div className="stat">
                  <div className="value">React</div>
                  <div className="type">On Rails</div>
                </div>
                <div className="stat border">
                  <div className="value">Ruby</div>
                  <div className="type">JavaScript</div>
                </div>
                <div className="stat">
                  <div className="value">Postman</div>
                  <div className="type">PostgreSQL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
