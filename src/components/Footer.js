// stylesheet
import './Footer.css';

// NavLink
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
        <div className="inner-footer">
            <div className="footer-logo">
            <NavLink to="/" className="footer-header">
            <h1>
              Catch <span>Up</span>
            </h1>
          </NavLink>
            </div>
            <div className="footer-link">
                <ul className='first_group'>
                    <li><NavLink to="/company" className="footer-header single_link">Company</NavLink></li>
                    <li><NavLink to="/careers" className="footer-header single_link">Careers</NavLink></li>
                    <li><NavLink to="/about-us" className="footer-header single_link">About Us</NavLink></li>
                    <li><NavLink to="/contact-us" className="footer-header single_link">Contact Us</NavLink></li>
                    <li><NavLink to="/partner" className="footer-header single_link">Partner with Us</NavLink></li>
                </ul>
                <ul className='second_group'>
                    <li><NavLink to="/learn" className="footer-header single_link">Learn</NavLink></li>
                    <li><NavLink to="/blogs" className="footer-header single_link">Blogs</NavLink></li>
                    <li><NavLink to="/webinars" className="footer-header single_link">Webinars</NavLink></li>
                    <li><NavLink to="/how-it-works" className="footer-header single_link">How it works</NavLink></li>
                </ul>
                <ul className='third_group'>
                    <li><NavLink to="/legal" className="footer-header single_link">Legal</NavLink></li>
                    <li><NavLink to="/security" className="footer-header single_link">Security</NavLink></li>
                    <li><NavLink to="/privacy-policy" className="footer-header single_link">Privacy Policy</NavLink></li>
                    <li><NavLink to="/cookies-setting" className="footer-header single_link">Cookies Setting</NavLink></li>
                    <li><NavLink to="/terms" className="footer-header single_link">Terms & Conditions</NavLink></li>
                </ul>
                <ul className='fourth_group'>
                    <li><NavLink to="/help" className="footer-header single_link">Help</NavLink></li>
                    <li><NavLink to="/faqs" className="footer-header single_link">FAQs</NavLink></li>
                    <li><NavLink to="/help-center" className="footer-header single_link">Help Center</NavLink></li>
                    <li><NavLink to="/customer-support" className="footer-header single_link">Customer support</NavLink></li>
                </ul>
            </div>
        </div>
        <div className="copy_right">
            <p>Made with love  ©2022 Team Pry Bar</p>
        </div>
    </footer>
  )
}

export default Footer