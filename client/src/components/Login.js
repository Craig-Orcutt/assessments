import React from "react";
import {Link} from 'react-router-dom'

class Login extends React.Component {
  render() {
    return (
      <div className="formBody">
        <h3> Welcome To Assessments. If you are new please register</h3>
        <Link to="/register">
          <button type="button">Register</button>
        </Link>
        <form>
          <label>Email</label>
          <input type="text" name="userEmail" />
          <label>Password</label>
          <input type="password" name="userPwd" />
          <input type="submit" name="" id="" />
        </form>
      </div>
    );
  }
}

export default Login;
