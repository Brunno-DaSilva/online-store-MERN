import React, { Component } from "react";
import About from "./About";
import "./aboutThisApp.css";

export default class AboutThisApp extends Component {
  render() {
    return (
      <section id="aboutMe" classNameName="container-about" tabindex="-1">
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
                React on Rails
                <br />
                Hotel Reservation System
              </h3>
            </div>
            <div className="left-container-text">
              <p>
                Full-stack Application featuring Ruby, Rails, Postgress, and
                React.
              </p>
              <p>
                Fully functional and interactive, this web application allows
                users to see a list of hotel's rooms, inspect information and
                reserve the room. Additionally, the user can see, update, and
                delete reservations.
              </p>
            </div>
          </div>
          <div className="right-content">
            <img
              id="img2"
              src="https://res.cloudinary.com/duprwuo4j/image/upload/v1581091889/imgs_starwars/imgs/Zilnai-logo2_xazqwf.png"
              alt="Zilnai Reservations"
            />
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
              Full-stack react-on-rails Hotel reservation system application.
              Fully functional and interactive, this web application allows
              users to see a list of hotel's room displayed as cards, inspect
              rooms information and reserve the room. The user also can edit and
              save a reservation, delete an existent reservation.
            </p>
          </div>
          <div className="text-area-two">
            <h4>Technologies Used:</h4>
            <div className="organize-links">
              <div className="skills-left-col">
                <p>React</p>
                <p>Rails</p>

                <p>Ruby</p>
                <p>PostgreSQL</p>

                <p>JS</p>
                <p>CSS</p>
              </div>

              <div className="skills-right-col">
                <p>FontAwesome</p>
                <p>Cloudinary</p>

                <p>Adobe Illustrator</p>
                <p>Image retrieved from Unsplash and unDraw</p>
                <p>
                  Image credits:
                  <a href="https://unsplash.com/">Unsplash.com </a>
                  <a href="https://undraw.co/"> unDraw.co</a>
                </p>
              </div>
            </div>
          </div>

          <div className="text-area-three">
            <h4>Approach: </h4>
            <p>
              I had a defined idea of what I was looking for. A hotel
              reservation system that provides users with a variety of room
              types, allowing the user to view more information about the rooms
              and to reserve that room, also providing a place where the user
              can see their booked reservation, delete and update at the same
              place. Additionally, I wanted to provide the user with the ability
              to search for the room and filter by some sort of criteria, which
              I had to set as a stretch goal due to the small deadline for this
              app.
            </p>
            <p>
              I am a super visual person, so I like to start my projects by
              designing the application wireframe on my GA draw handbook with a
              pencil, nothing too fancy but for a visual person it makes a whole
              lot of difference, I feel like I have a goal to meet, like when I
              am doing a mockup of some website, the design is layout for me I
              just need to follow the patterns. Once that part is completed I
              start thinking about some little details that would bring
              character to my projects, like a funny or meaningful name or a
              logo, or changing the icon on the cursor when the user approaches
              a certain area of my application, this character can be seen
              throughout the entire application (like an easter egg, except I am
              the only one who knows about it lol), this project I decided to
              create the logo and the name based on my sons and wife's name
              after I was playing around with a string reverse challenge. The
              hotel name was Zilnai, can you guess what my wife and son's names
              are? After this, I jumped into the design and develop my back-end
              and my client component structure.
            </p>
          </div>
          <div className="text-area-four">
            <h4>Challenges:</h4>
            <p>
              Delete method and update methods were not properly working as I
              would have to refresh the page to see changes.
            </p>
            <p>
              Then I learned a valuable lesson about state management. I had
              successfully tested my rails DELETE route in postman, once I
              ensured that everything was set the way it should be, I move the
              client development phase. Inside my UserReservation component, I
              have created a method called deleteReservation() and passed two
              variables -id and index- by initiated the fetch request and
              passing the id as template literals I would ensure that I was
              getting a unique id and not some other data. In my promes, I set
              the state of the userReservationData array (where the user data
              would be stored) to slice anything between the two specified
              indexes, which results in the specific reservation ID being
              deleted. All good, up to the point that I map over my reservation
              data passing an arrow function with the user's reservation
              information, mainly due to the fact that I passed only one
              variable called data and omitted index on my function, the delete
              button would only work if the state of the application were
              refreshed, otherwise, it would not identify what the index of the
              item being deleted. After I have added a second variable to the
              map function and called it on my onClick alongside with data.id it
              worked properly.
            </p>
          </div>
        </div>
        <br />
        <About />
      </section>
    );
  }
}
