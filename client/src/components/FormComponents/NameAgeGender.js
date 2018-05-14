import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { TextField, MenuItem, SelectField } from "material-ui";

class Name extends React.Component {
  // state = {
  //   firstName: "",
  //   lastName: ""
  // };
  firstName = React.createRef();
  lastName = React.createRef();
  age = React.createRef();
  gender = React.createRef();

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <TextField
            name="firstName"
            floatingLabelText="First Name"
            fullWidth={true}
            onChange={this.props.change}
            ref={input => {
              this.firstName = input;
            }}
          />
          <br />
          <br/>
          <TextField
            name="lastName"
            floatingLabelText="Last Name"
            fullWidth={true}
            onChange={this.props.change}
            ref={input => {
              this.lastName = input;
            }}
          />

          <br />
            <br/>
          <TextField
            floatingLabelText="Age"
            fullWidth={true}
            name="age"
            onChange={this.props.change}
            ref={input => {
              this.age = input;
            }}
          />
          <br />
          <br />

        </div>
      </MuiThemeProvider>
    );
  }
}

export default Name;
