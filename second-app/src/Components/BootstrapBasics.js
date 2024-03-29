import React from "react";
import { Button,Card } from "react-bootstrap";
import developerImage from "../images/coder-image.jpeg"

function BootstrapButton(){
    return(
        <div className="BootstrapButton">
            <Button variant="success" size="sm">Click Me</Button>
            <Button variant="danger" size="lg">Click me</Button>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={developerImage} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    )
}
export default BootstrapButton