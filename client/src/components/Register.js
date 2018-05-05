import React from "react";

class Register extends React.Component {
  state = {
    email: "",
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
  }
  render() {
    return (
      <div className="register">
        <h2>Register</h2>
        <form>
          <label>Email</label>
          <input name="email" value={this.state.email} type="text" onChange={e => this.change(e)}/>
          <label>Password</label>
          <input type="password" />
          <label>Re-Enter Password</label>
          <input name="password" value={this.state.password} type="password" onChange={e => this.change(e)} />
          <label>Outreach?</label>
          <input type="checkbox" name='isOutreach' value={this.state.isOutreach} onClick={() => {this.setState({isOutreach: !this.state.isOutreach})}}/>
          <button onClick={e => this.onSubmit(e)}>Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
