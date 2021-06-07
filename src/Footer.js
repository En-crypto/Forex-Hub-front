import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




class Footer extends React.Component {
  render() {
    return (
      <>
        <FontAwesomeIcon icon={["fal", "coffee"]} />
        <footer className="footer-distributed">
          <div className='ftr-logo'>
            <h3>Forex<span>Hub</span></h3>
          </div>
          <div className='ftr-flex'>
            <div className="footer-left">

              <Link to="/">Home</Link>
              <Link to="/about">Profile</Link>
              <Link to="/contact">Converter</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/contact">About Us</Link>

            </div>

            <div className="footer-center">

              <div>
                <i className="fa fa-map-marker"></i>
                <p>Mecca street Amman, Jordan</p>
              </div>

              <div>
                <i className="fa fa-phone"></i>
                <p>+962 650 50000</p>
              </div>

              <div>
                <i className="fa fa-envelope"></i>
                <p><a href="mailto:forex-hub@gmail.com">forex-hub@gmail.com</a></p>
              </div>

            </div>

            <div className="footer-right">

              <p className="footer-company-about">
                <span>About the company</span>
                  Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                </p>

            <div className="footer-icons">

              <SocialIcon network="facebook" url="https://github.com/Haneenabonser" />
              <SocialIcon network="instagram" url="https://github.com/Haneenabonser" />
              <SocialIcon network="twitter" url="https://github.com/Haneenabonser" />
              <SocialIcon network="google" url="https://github.com/Haneenabonser" />

            </div>

            </div>

          </div>
            <hr></hr>
          <p className="footer-company-name">ForexHub © 2021</p>
        </footer>
      </>
    )
  }
}

export default Footer;
