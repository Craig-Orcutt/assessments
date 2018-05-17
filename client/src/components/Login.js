import React from "react";
import { Link } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import { RaisedButton, Paper, TextField } from "material-ui";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import axios from "axios";

class Login extends React.Component {
  history = createHistory(this.props);
  url = "http://localhost:5000";

  userName = React.createRef();
  userPwd = React.createRef();

  handleClick = e => {
    e.preventDefault();
    let user = {
      username: this.userName.input.value,
      password: this.userPwd.input.value
    };
    console.log("user", user);
    axios
      .post(`${this.url}/server/login`, user)
      .then(user => {
        console.log("USER LOGIN", user.data);
        this.props.setUser(user.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <MuiThemeProvider>
        <Paper className="logInForm">
          <h3> Welcome To Quick Assess. If you are new please register.</h3>
          <form className="logInFields">
            <TextField
              floatingLabelText="User Name"
              type="text"
              ref={input => {
                this.userName = input;
              }}
            />
            <TextField
              floatingLabelText="Password"
              type="password"
              ref={input => {
                this.userPwd = input;
              }}
            />
            <RaisedButton className='formButton' label="Login" onClick={e => this.handleClick(e)} />
            <Link to="/register">
              <RaisedButton className='formButton' label="Register" fullWidth={true} />
            </Link>
          </form>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default Login;
