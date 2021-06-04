import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocialIcon } from 'react-social-icons';




class Footer extends React.Component {
  render() {
    return (
      <>
        <section>
          <p></p>
        </section>
        <footer class="footer-distributed">

          <div class="footer-left">

            <h3>ForexHub<span>logo</span></h3>

            <p class="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </p>

            <p class="footer-company-name">ForexHub © 2021</p>
          </div>

          <div class="footer-center">

            <div>
              <i class="fa fa-map-marker"></i>
              <p><span>Macca street</span> Amman, Jordan</p>
            </div>

            <div>
              <i class="fa fa-phone"></i>
              <p>+962 650 50000</p>
            </div>

            <div>
              <i class="fa fa-envelope"></i>
              <p><a href="mailto:forex-hub@gmail.com">forex-hub@gmail.com</a></p>
            </div>

          </div>

          <div class="footer-right">

            <p class="footer-company-about">
              <span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

            <div class="footer-icons">

            <SocialIcon network="facebook" url="https://github.com/Haneenabonser" />
            <SocialIcon network="instagram" url="https://github.com/Haneenabonser" />
            <SocialIcon network="twitter" url="https://github.com/Haneenabonser" />
            <SocialIcon network="google" url="https://github.com/Haneenabonser" />

            </div>

          </div>

        </footer>
      </>
    )
  }
}

export default Footer;
