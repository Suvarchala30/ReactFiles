import React from "react";
import "./Products.css"
import {Card,Button,Container,Row,Col} from "react-bootstrap"
import LaptopImage from "../assets/laptop1.jpeg"
function Products(){
    const cardData=[
        {
            id:1,
            title:'Laptop1',
            description: 'Some quick example text to build on the card title and make up the bulk of the cards content'
            
        },
        {
            id:1,
            title:'Laptop2',
            description: 'Some quick example text to build on the card title and make up the bulk of the cards content'
           
        },
        {
            id:1,
            title:'Laptop3',
            description: 'Some quick example text to build on the card title and make up the bulk of the cards content'
            
        }
    ]
    return(
        <div className="Products">
            <Container>
                <Row>
                    {cardData.map(product =>(

                        <Col md={4} key={product.id}>
                           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={LaptopImage} />
  <Card.Body>
    <Card.Title>{product.title}</Card.Title>
    <Card.Text>
        {product.description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> 
</Col>
                    ))}
                        
            {/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={LaptopImage} />
  <Card.Body>
    <Card.Title>Card Title 1</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
<Col md={4}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={LaptopImage} />
  <Card.Body>
    <Card.Title>Card Title 2</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
<Col md={4}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={LaptopImage} />
  <Card.Body>
    <Card.Title>Card Title 3</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}

</Row>
</Container>
        </div>
    )
}

export default Products