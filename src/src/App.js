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
      followers: [],
      newUser: [],
      newUserName: ""
    };
  }

  onChange = e => {
    this.setState({
      newUserName: e.target.value
    });
  };
  componentDidMount() {
    Promise.all([
      axios.get("https://api.github.com/users/VodeniZeko"),
      axios.get("https://api.github.com/users/VodeniZeko/followers")
    ])
      .then(([res1, res2]) => {
        const user = res1.data;
        const followers = res2.data;
        this.setState({ user, followers });
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchUser = e => {
    e.preventDefault();
    Promise.all([
      axios.get(`https://api.github.com/users/${this.state.newUserName}`),
      axios.get(
        `https://api.github.com/users/${this.state.newUserName}/followers`
      )
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
  };

  render() {
    return (
      <div>
        <User user={this.state.user} />
        <form style={{ textAlign: "center", margin: "3em" }}>
          <input
            type="text"
            placeholder="search other users..."
            value={this.state.newUserName}
            onChange={this.onChange}
            style={{
              height: "3em",
              width: "20em",
              border: "2px solid",
              borderRadius: "10px"
            }}
          />
          <button
            style={{ border: "none", cursor: "pointer" }}
            onClick={this.fetchUser}
          >
            <h2>Submit</h2>
          </button>
        </form>
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
