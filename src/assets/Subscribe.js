// stylesheet
import "./Subscribe.css";

// Font awesome icon
import { FaArrowRight } from "react-icons/fa";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe_header">
        <h1>SUBSCRIBE</h1>
      </div>
      <div className="inner-subscribe">
        <div className="subscribe-email">
          <div className="email-box">
            <input type="text" placeholder="Enter your Email Address" />
            <FaArrowRight className="submit_email" />
          </div>
          <div className="email_info">
            <p>
              By providing your email, you indicate you have read and understood
              our <span>privacy policy</span>
            </p>
          </div>
        </div>
        <div className="subscribe-text">
          <p>
            Subscribe to receive the latest Fun blog posts and updates,
            promotions and partnerships from Catch Up
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
