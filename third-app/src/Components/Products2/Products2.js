import React from "react";
import { Card, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import LaptopImage from "../../assets/laptop1.jpeg";
import "./Products2.css";
class Reviews extends React.Component {
  constructor(props) {
    super(props);
    console.log("Inside constructor");
    this.state = {
      count: 0,
      products: [],
    };
    this.addToCart = this.addToCart.bind(this);
  }
  componentDidMount() {
    console.log("Inside the componentDidMount");
    setTimeout(() => {
      //setTimeOut is optional just to see count changing from 0 to 1

      this.setState({
        count: 1,
        products: [
          {
            id: 1,
            title: "Laptop1",
            description:
              "Some quick example text to build on the card title and make up the bulk of the cards content",
            addedToCart: false,
          },
          {
            id: 2,
            title: "Laptop2",
            description:
              "Some quick example text to build on the card title and make up the bulk of the cards content",
            addedToCart: false,
          },
          {
            id: 3,
            title: "Laptop3",
            description:
              "Some quick example text to build on the card title and make up the bulk of the cards content",
            addedToCart: false,
          },
        ],
      });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Im in component update method");
  }

  componentWillUnmount() {
    console.log("Inside unmount method");
  }

  addToCart(id) {
    let updatedProducts = this.state.products;
    updatedProducts[id - 1].addedToCart = true;
    this.setState({
      products: updatedProducts,
    });
  }

  render() {
    console.log("Inside render");
    return (
      <Container>
        {this.state.products.length === 0 ? (
          <Spinner animation="border" />
        ) : (
          <Row>
            {this.state.products.map((product) => (
              <Col md={4} key={product.id}>
                <Card>
                  <Card.Img variant="top" src={LaptopImage} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Button variant="primary">Buy</Button>
                    <Button
                      variant="warning"
                      onClick={() => {
                        this.addToCart(product.id);
                      }}
                    >
                      {product.addedToCart ? "Added to cart" : "Add to cart"}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
      // <h2>Customers: {this.state.count}</h2>
    );
  }
}

export default Reviews;
