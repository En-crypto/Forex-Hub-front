import { Link } from "react-router-dom";
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogOut";
import { withAuth0 } from '@auth0/auth0-react';

function Header(props) {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light' className='nav'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'><Link to="/">Navbar</Link></MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink active aria-current='page' href='#'>
            <Link to="/">Home</Link>
            </MDBNavbarLink>
            {props.auth0.isAuthenticated && <MDBNavbarLink href='#'><Link to="/profile">Profile</Link></MDBNavbarLink>}
            <MDBNavbarLink href='#'><Link to="/contact">Contact Us</Link></MDBNavbarLink>
            <MDBNavbarLink href='#'>
            <Link to="/about">About Us</Link>
            </MDBNavbarLink>
            <LoginButton/>
            <LogoutButton/>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default withAuth0(Header);