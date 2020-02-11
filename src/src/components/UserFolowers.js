import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

class UserFolowers extends React.Component {
  render() {
    const follower = this.props.follower;
    return (
      <Card
        style={{
          width: "18rem",
          border: "2px solid green",
          textAlign: "center",
          margin: "1rem",
          padding: "1rem",
          lineHeight: "1.2rem"
        }}
      >
        <Card.Img style={{ width: "13rem" }} src={follower.avatar_url} />
        <Card.Body>
          <Card.Title>
            <span>login:</span>
            {follower.login}
          </Card.Title>
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

export default UserFolowers;
