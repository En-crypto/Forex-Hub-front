import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogOut";
import { withAuth0 } from '@auth0/auth0-react';
import { Navbar, Nav } from 'react-bootstrap';
import './css/Nav.css';

function Header(props) {
  // const [showNavSecond, setShowNavSecond] = useState(false);
  let isAdmin = false;

  if (props.auth0.isAuthenticated) {
    isAdmin = (props.auth0.user.email === 'mmohiesen996@gmail.com');

  }

  return (
    // <MDBNavbar expand='lg' light bgColor='light' id="navBar">
    //   <MDBContainer fluid>
    //     <MDBNavbarBrand className='nav' href='#'><Link to="/">Navbar</Link></MDBNavbarBrand>
    //     <MDBNavbarToggler
    //       aria-expanded='false'
    //       aria-label='Toggle navigation'
    //       onClick={() => setShowNavSecond(!showNavSecond)}
    //     >
    //       <MDBIcon icon='bars' fas />
    //     </MDBNavbarToggler>
    //     <MDBCollapse navbar show={showNavSecond}>
    //       <MDBNavbarNav>
    //         <MDBNavbarLink className='nav' active aria-current='page' href='#'>
    //         <Link to="/">Home</Link>
    //         </MDBNavbarLink >
    //         {props.auth0.isAuthenticated && 
    //         <MDBNavbarLink href='#'><Link to="/profile">Profile</Link></MDBNavbarLink>
    //         }
    //         <MDBNavbarLink href='#'><Link to="/convert">Converter</Link></MDBNavbarLink>
    //         {isAdmin && 
    //         <MDBNavbarLink href='#'><Link to="/feed">FeedBack</Link></MDBNavbarLink>}
    //         {props.auth0.isAuthenticated && 
    //         <MDBNavbarLink href='#'><Link to="/favorite">Favorite</Link></MDBNavbarLink>}
    //         <MDBNavbarLink className='nav' href='#'><Link to="/contact">Contact Us</Link></MDBNavbarLink>
    //         <MDBNavbarLink className='nav' href='#'>
    //         <Link to="/about">About Us</Link>
    //         </MDBNavbarLink>
    //         <LoginButton/>
    //         <LogoutButton/>
    //       </MDBNavbarNav>
    //     </MDBCollapse>
    //   </MDBContainer>
    // </MDBNavbar>

    <Navbar bg="light" variant="light">
      <div className='container' id='top'>
        <Navbar.Brand href="#home"><h3>Forex<span>Hub</span></h3></Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/convert">Converter</Link>
          </Nav.Link>
          <Nav.Link >
            <Link to="/feed">FeedBack</Link>
          </Nav.Link>
          <Nav.Link >
            <Link to="/favorite">Favorite</Link>
          </Nav.Link>
          <Nav.Link >
            <Link to="/contact">Contact Us</Link>
          </Nav.Link>
          <Nav.Link >
            <Link to="/about">About Us</Link>
          </Nav.Link>
          <Nav.Link>
            {
              props.auth0.isAuthenticated &&
              <Link to="/profile"><FaRegUserCircle className='profile' /></Link>
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