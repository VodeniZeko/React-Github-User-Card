import React from "react";
import axios from "axios";
import "./App.css";
import User from "./components/User";
import UserFolowers from "./components/UserFolowers";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    };
  }

  componentDidMount() {
    Promise.all([
      axios.get("https://api.github.com/users/VodeniZeko"),
      axios.get("https://api.github.com/users/VodeniZeko/followers")
    ])
      .then(([res1, res2]) => {
        const user = res1.data;
        const followers = res2.data;
        console.log(followers);
        this.setState({ user, followers });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <User user={this.state.user} />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.state.followers.map(fol => (
            <UserFolowers follower={fol} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
