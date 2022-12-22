// stylesheet
import "./Showcase.css";

// Images
import showcaseImage from "../images/showcase.svg";

// NavLink
import { NavLink } from "react-router-dom";

// Font awesome icon
// import { FaArrowRight } from "react-icons/fa";

const Showcase = () => {
  return (
    <>
      {/* First showcase */}
      <div className="show_case">
        <div className="show_case_image">
          <img src={showcaseImage} alt="showcaseImage" />
        </div>
        <div className="show_case_text">
          <h1>Fun Event for people from different age Range</h1>
          <p>
            Find interviews, tips, and stories from Black entrepreneurs and
            creators to help inspire your journey.
          </p>
          <div className="read_more">
            <NavLink to="" className="read_more_link">
              Read More
            </NavLink>
          </div>
        </div>
      </div>
      {/* Second showcase */}
      <div className="second_showcase">
        <div className="inner_second_showcase">
          <p>Catch Up</p>
          <h1>Schedule Hangouts with your friends very easily.</h1>
          <NavLink><button id="button">Get Started</button></NavLink>
        </div>
      </div>
    </>
  );
};

export default Showcase;
