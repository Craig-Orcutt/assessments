import React from "react";
import axios from 'axios';
import {RaisedButton, TextField, Paper, Checkbox} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './Register.css'


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
    console.log('this.state', this.state);
    
    axios.post(`${this.url}/server/register`, this.state)
    .then((data)=> {

    })
  }
  render() {
    return (
      <div className="register">
      <MuiThemeProvider>
      <Paper>
        <h2>Register</h2>
        <form className='registerForm'>

          <TextField className='registerEl' floatingLabelText='Email' name="email" value={this.state.email} type="text" onChange={e => this.change(e)}/>
          
          <TextField className='registerEl' floatingLabelText='Name' name="username" value={this.state.username} type="text" onChange={e => this.change(e)}/>
          
          <TextField className='registerEl' type="password" floatingLabelText='Password' />
          
          <TextField className='registerEl' floatingLabelText='Confirm Password' name="password" value={this.state.password} type="password" onChange={e => this.change(e)} />
          
          <Checkbox id='registerCheck' className='registerEl' type="checkbox" label='Outreach?'name='isOutreach' value={this.state.isOutreach} onClick={() => {this.setState({isOutreach: !this.state.isOutreach})}}/>
          
          <RaisedButton className='registerEl' label='Register' onClick={(e) => {this.onSubmit(e);this.props.history.replace('/')}} />
        </form>
        </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Register;
