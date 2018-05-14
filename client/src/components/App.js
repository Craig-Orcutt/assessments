import React, { Component } from "react";

import "./App.css";
import Login from "./Login";
import Logout from "./Logout";
import Form from "../components/Form/Form";
import Outreach from "../components/Outreach/Outreach";

class App extends Component {
  state = {
    username: "",
    userid: "",
    userIsOutreach: false,
    isHiddenForm: true,
    isHiddenOutreach: true,
    isHiddenLogin: false,
    isHiddenLogout: true
  };

  //
  setUser = user => {
    console.log("userApp", user);
    this.setState({
      username: user.username,
      userid: user.id,
      userIsOutreach: user.isOutreach
    });
    if (this.state.userIsOutreach !== null) {
      this.setState({
        isHiddenLogin: !this.state.isHiddenLogin,
        isHiddenLogout: !this.state.isHiddenLogout
      });
      if (this.state.userIsOutreach === false) {
        this.setState({
          isHiddenForm: !this.state.isHiddenForm
        });
      } else if (this.state.userIsOutreach === true) {
        this.setState({
          isHiddenOutreach: !this.state.isHiddenOutreach
        });
      } else {
        this.setState({
          isHiddenForm: true,
          isHiddenOutreach: true
        });
      }
    }
  };

  render() {
    return (
      <div className="App">
        {!this.state.isHiddenLogout && <Logout />}
        {!this.state.isHiddenLogin && (
          <Login setUser={this.setUser} history={this.history} />
        )}
        {!this.state.isHiddenForm && <Form setUser={this.state.userid} />}
        {!this.state.isHiddenOutreach && <Outreach />}
      </div>
    );
  }
}

export default App;
