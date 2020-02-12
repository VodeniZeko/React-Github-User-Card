import React from "react";
import { Card } from "react-bootstrap";

class User extends React.Component {
  render() {
    const user = this.props.user;

    return (
      <Card
        style={{
          width: "18rem",
          border: "2px solid blue",
          textAlign: "center",
          margin: "1rem auto",
          padding: "1rem",
          lineHeight: "1.2rem"
        }}
      >
        <Card.Img
          style={{ width: "13rem", padding: "10px" }}
          src={user.avatar_url}
        />
        <Card.Body>
          <Card.Title>
            <span>name:</span> {user.name}
          </Card.Title>
          <Card.Text>
            <span>followed by</span> {user.followers} users
          </Card.Text>
          <Card.Text>
            <span>following</span> {user.following} users
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            <span>created:</span> {user.created_at}
          </small>
        </Card.Footer>
        <Card.Footer>
          <small className="text-muted">
            <span>updated:</span> {user.updated_at}
          </small>
        </Card.Footer>
      </Card>
    );
  }
}
export default User;
