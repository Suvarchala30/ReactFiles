import React from "react"
import {Navbar,Container,Nav} from "react-bootstrap"

function Navbars(){
    return(
    <div className="Navbar">
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">E-commerce Site</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default Navbars