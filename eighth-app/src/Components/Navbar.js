import React from "react";
import {Navbar,Container,Nav} from "react-bootstrap"

import { Link } from 'react-router-dom'

function Navbars(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Social Media Site</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link><Link to="/"  className="router-link">Login</Link></Nav.Link>
      <Nav.Link><Link to ="/aboutus" className="router-link" >About Us</Link></Nav.Link>

      <Nav.Link><Link to ="/posts" className="router-link" >Posts</Link></Nav.Link>

      <Nav.Link><Link to ="/post2/:id" className="router-link" >Posts 2</Link></Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Navbars