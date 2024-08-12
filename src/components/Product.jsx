import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CardFooter, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status === 'Loading') {
    return <p>Loading...</p>;
  }

  if (status === 'Error') {
    return <p>Something went wrong...</p>;
  }

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <Col md={3} className="mb-4" key={product.id}>
      <Card className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.category.image}
            style={{ width: "100px", height: "130px", marginTop: "10px" }}
          />
        </div>
        <Card.Body className="text-center">
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>PKR. {product.price}</Card.Text>
        </Card.Body>
        <CardFooter className="bg-white text-center">
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to cart
          </Button>
        </CardFooter>
      </Card>
    </Col>
  ));

  return (
    <Container>
      <h1 className="text-center my-4">Product List</h1>
      <Row>{cards}</Row>
    </Container>
  );
};
export default Product;