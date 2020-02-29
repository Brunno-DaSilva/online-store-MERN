import React, { Component } from "react";
import About from "./About";

import "./aboutThisApp.css";
import img2 from "./logotype.png";

export default class AboutThisApp extends Component {
  render() {
    return (
      <section
        id="aboutMeApp"
        classNameName="container-about-this-app"
        tabindex="-1"
      >
        <div className="overlay-about-this"></div>
        <div className="title-about-this">
          <h1>
            About
            <span className="span-one">
              <span className="span-two">This App</span>
            </span>
          </h1>
        </div>
        <div className="intro-container-about">
          <div className="left-content-this">
            <div className="left-container-title-this">
              <h3>
                MERN stack
                <br />
                TechFy E-commerce App
              </h3>
            </div>
            <div className="left-container-text">
              <p>
                Full-stack Application featuring MongoDB, Express, React, and
                Node.
              </p>
              <p>
                Fully functional and interactive, this web application allows
                users to see a list of products, see details about each product,
                add them to the cart and buy the products.
              </p>
            </div>
          </div>
          <div className="right-content-about">
            <img id="img2" src={img2} alt="TechFy" />
          </div>
        </div>
        <div className="sub-title-this">
          <h1>
            Development
            <span className="span-one-this">
              <span className="span-two-this">Phase</span>
            </span>
          </h1>
        </div>

        <div className="about-container">
          <div className="text-area-one">
            <h4>App Concept: </h4>
            <p>
              Full-stack MERN E-Commerce site. Fully functional and interactive,
              this web application allows users to see a list of products, see
              details about each product, add them to the cart, increment the
              number of items and buy the products utilizing PayPal.
            </p>
          </div>
          <div className="text-area-two">
            <h4>Technologies Used:</h4>
            <div className="organize-links">
              <div className="skills-left-col">
                <p>React</p>
                <p>MongoDB</p>

                <p>Express</p>
                <p>Node</p>

                <p>JS</p>
                <p>CSS</p>
                <p>NPM React Slideshow</p>
                <p>FireBase</p>
                <p>NPM PayPal Button</p>
              </div>

              <div className="skills-right-col">
                <p>FontAwesome</p>
                <p>Cloudinary</p>

                <p>Adobe Illustrator</p>
                <p>Image retrieved from Unsplash and unDraw</p>
                <p>
                  Credits:
                  <br />
                  <a href="https://unsplash.com/">Unsplash.com </a>
                  <br />
                  <a href="https://undraw.co/"> unDraw.co</a>
                  <br />
                  <a href="https://github.com/femioladeji/react-slideshow">
                    Slideshow Repo
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="text-area-three">
            <h4>Approach: </h4>
            <p>
              I had a defined idea of what I was looking for. A E-commerce site
              that provides users with a variety of technologies devices from
              cell phones to TVs, allowing the user to view more information
              about the products and to add to the cart, increment the number of
              items before purchase and a PayPal button to complete the
              transaction.
            </p>
            <p>
              I am a super visual person, so I like to start my projects by
              designing the application wireframe on my GA draw handbook with a
              pencil, nothing too fancy but for a visual person like me it makes
              a whole lot of difference, I feel like I have a goal to meet, like
              when I am doing a mockup of some website, the design is layout for
              me I just need to follow the patterns. Once that part is completed
              I start thinking about some little details that would bring
              character to my projects, like a funny or meaningful name or a
              logo, or changing the icon on the cursor when the user approaches
              a certain area of my application, this particular character can be
              seen throughout the entire application (like an easter egg, except
              I am the only one who knows about it lol). In particular, for this
              project I decided to create the logo and the name come after the
              company Shopfy. After this, I jumped into the design and develop
              my back-end and my client component structure as always.
            </p>
          </div>
          <div className="text-area-four">
            <h4>Challenges:</h4>
            <p>
              Get the UserLogin and SignUp components to work properly utilizing
              Firebase.
            </p>
            <p>
              I have worked with FireBase prior this project to set up my
              contact form, which worked pretty well. Although the overall
              concept still the same, there were couple variants like passing up
              the state to gather the user name or email to display in my navbar
              and hide the Login and display the logout. I also tried OKTA which
              did not worked well. So I was able to get the user logged in
              however it still not making a lot of sense on how to passing the
              information from Firebase up to a higher component.
            </p>
          </div>
        </div>
        <br />
        <About />
      </section>
    );
  }
}
