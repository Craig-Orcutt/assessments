import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { TextField } from "material-ui";

class Name extends React.Component {
  // state = {
  //   firstName: "",
  //   lastName: ""
  // };
  firstName = React.createRef();
  lastName = React.createRef();
  age = React.createRef();


  render() {
    return (
      <MuiThemeProvider>
        <div>
          <TextField
            name="firstName"
            floatingLabelText="First Name"
            onChange={this.props.change}
            ref={input => {this.firstName = input}}
          />
          <br />
          <TextField
            name="lastName"
            floatingLabelText="Last Name"
            onChange={this.props.change}
            ref={input => {this.lastName = input}}
          />

          <br />

          <TextField 
          floatingLabelText='Age'
          name="age" 
          onChange={this.props.change}
          ref={input => {this.age = input}}/>
        <br/>

        
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Name;
