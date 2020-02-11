import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/VodeniZeko")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Card
        style={{
          width: "18rem",
          border: "1px solid red",
          textAlign: "center",
          margin: "1rem",
          padding: "1rem",
          lineHeight: "1.2rem"
        }}
      >
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body style={{ margin: "10px", padding: "10px" }}>
          <Card.Link style={{ margin: "5px" }} href="#">
            Card Link
          </Card.Link>
          <Card.Link style={{ margin: "5px" }} href="#">
            Another Link
          </Card.Link>
        </Card.Body>
      </Card>
    );
  }
}
export default App;
