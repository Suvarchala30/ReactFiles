import React from "react";
import {Navbar,Container,Nav} from "react-bootstrap"

import { Link ,NavLink } from 'react-router-dom'

function Navbars(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to='/'>Social Media Site</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">

      <Nav.Link as={NavLink} to='/' className={({ isActive }) => (isActive ? "active" : "")}>Login</Nav.Link>

      <Nav.Link><NavLink to ="/aboutus" className={({ isActive }) => (isActive ? "active" : "")} >About Us</NavLink></Nav.Link>

      <Nav.Link><NavLink to ="/posts" className={({ isActive }) => (isActive ? "active" : "")} >Posts</NavLink></Nav.Link>

      <Nav.Link><NavLink to ="/post2/7" className={({ isActive }) => (isActive ? "active" : "")} >Posts 2</NavLink></Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Navbars