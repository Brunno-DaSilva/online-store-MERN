import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import "../Footer/footer.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/c_scale,w_155/v1574831158/imgs_starwars/imgs/BLOGO_k36v5y.png"
            alt="logo"
          />
          <p>
            2020 Bruno DaSilva<span> Front-End Developer</span>
          </p>
          <div className="info-Bruno">
            <p>
              More <span>Projects</span>
            </p>
            <a href="https://github.com/DaSilvaBrunoTexas" target="_blank">
              <i className="fa fa-github-square"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/bruno-dasilva/"
              target="_blank"
            >
              <i className="fa fa-linkedin-square"></i>
            </a>

            <a href="http://bruno-dasilva.com/" target="_blank">
              <i className="fa fa-globe"></i>
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
