import React, { Component } from "react";

import "./App.css";
import Login from "./Login";
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
    this.userDeets =  {
      username: this.state.username
    }
    if (this.state.userIsOutreach !== null) {
      this.setState({
        isHiddenLogin: !this.state.isHiddenLogin,
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
        {!this.state.isHiddenLogin && (
          <Login setUser={this.setUser} history={this.history} />
        )}
        {!this.state.isHiddenForm && <Form setUser={this.state.userid} userDeets={this.userDeets} />}
        {!this.state.isHiddenOutreach && <Outreach setUser={this.state.userid} userDeets={this.userDeets}/>}
      </div>
    );
  }
}

export default App;
