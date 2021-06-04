// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
// import './header.css';

// export default Header;
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

export default function Header() {
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
            <MDBNavbarLink href='#'><Link to="/profile">Profile</Link></MDBNavbarLink>
            <MDBNavbarLink href='#'><Link to="/contact">Contact Us</Link></MDBNavbarLink>
            <MDBNavbarLink href='#'>
            <Link to="/about">About Us</Link>
            </MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}