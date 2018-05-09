import React from "react";
import {Link} from 'react-router-dom';
import { createBrowserHistory as createHistory } from "history";


import axios from 'axios';

class Login extends React.Component {
  history = createHistory(this.props);
  url = "http://localhost:5000";

  userName = React.createRef();
  userPwd = React.createRef();

  handleClick = (e) => {
    e.preventDefault();
    let user = {
      username: this.userName.value,
      password: this.userPwd.value,
    };
    console.log('user', user);
    axios.post(`${this.url}/server/login`, user)
    .then( (user) => {
      console.log('USER LOGIN', user.data);
      this.props.setUser(user.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="formBody">
        <h3> Welcome To Assessments. If you are new please register</h3>
        <Link to="/register">
          <button type="button">Register</button>
        </Link>
        <form>
          <label>User Name</label>
          <input type="text" ref={input => {this.userName = input}} />
          <label>Password</label>
          <input type="password" ref={input => {this.userPwd = input}} />
          <button onClick={e => this.handleClick(e)}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
