import { Link } from "react-router-dom";
import React from 'react';
import logo from './img/Logos/h4.png';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogOut";
import { withAuth0 } from '@auth0/auth0-react';
import { Navbar, Nav } from 'react-bootstrap';
import './css/Nav.css';

function Header(props) {
  let isAdmin = false;

  if (props.auth0.isAuthenticated) {
    isAdmin = (props.auth0.user.email === 'mmohiesen996@gmail.com');

  }

  return (

    <Navbar bg="light" variant="light">
      <div className='container' id='top'>
        <Navbar.Brand href="#home" className = 'logo'>
          <img src={logo} alt = 'logo'>
          </img>
        <h3>Forex<span>Hub</span></h3>
        </Navbar.Brand>
        <Nav className="ml-auto nav-items">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/convert">Converter</Link>
          </Nav.Link>
          {
            isAdmin &&
          <Nav.Link >
            <Link to="/feed">FeedBack</Link>
          </Nav.Link>
          }
          {
            props.auth0.isAuthenticated &&
          <Nav.Link >
            <Link to="/favorite">Favorite</Link>
          </Nav.Link>
          }
          <Nav.Link >
            <Link to="/contact">Contact Us</Link>
          </Nav.Link>
          <Nav.Link >
            <Link to="/about">About Us</Link>
          </Nav.Link>
          <Nav.Link>
            {
              props.auth0.isAuthenticated &&
              <Link to="/profile"><img src = {props.auth0.user.picture} alt='profile' class = 'profile'/></Link>
            }
          </Nav.Link>

        </Nav>
      </div>
      {props.auth0.isAuthenticated ? <LogoutButton /> :
        <LoginButton />
      }
    </Navbar>
  );
}

export default withAuth0(Header);