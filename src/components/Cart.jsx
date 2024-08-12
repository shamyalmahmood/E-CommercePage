import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CardFooter, Container, Row, Col } from "react-bootstrap";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  const cards = products.map((product) => (
    <Col md={4} className="mb-4" key={product.id}>
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
          <Button variant="danger" onClick={() => removeFromCart(product.id)}>
            Remove Item
          </Button>
        </CardFooter>
      </Card>
    </Col>
  ));

  return (
    <Container>
      <h2 className="text-center my-4">My Cart</h2>
      <Row>{cards}</Row>
    </Container>
  );
};
export default Cart;