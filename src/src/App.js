import React from "react";
import axios from "axios";
import "./App.css";
import User from "./components/User";
import UserFolowers from "./components/UserFolowers";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/VodeniZeko")
      .then(res => {
        console.log(res.data);
        this.setState({
          user: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <User user={this.state.user} />
        <UserFolowers />
      </div>
    );
  }
}
export default App;
