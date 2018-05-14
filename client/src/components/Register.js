import React from "react";
import axios from 'axios';


class Register extends React.Component {
  url= "http://localhost:5000";
  state = {
    username: '',
    email: '',
    password: "",
    isOutreach: false,
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("this", this.state);
    axios.post(`${this.url}/server/register`, this.state)
    .then((data)=> {

      
    })
  }
  render() {
    return (
      <div className="register">
        <h2>Register</h2>
        <form>
          <label>Email</label>
          <input name="email" value={this.state.email} type="text" onChange={e => this.change(e)}/>
          <label>Name</label>
          <input name="username" value={this.state.username} type="text" onChange={e => this.change(e)}/>
          <label>Password</label>
          <input type="password" />
          <label>Re-Enter Password</label>
          <input name="password" value={this.state.password} type="password" onChange={e => this.change(e)} />
          <label>Outreach?</label>
          <input type="checkbox" name='isOutreach' value={this.state.isOutreach} onClick={() => {this.setState({isOutreach: !this.state.isOutreach})}}/>
          <button type='button' onClick={(e) => {this.onSubmit(e);this.props.history.replace('/')}}>Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
