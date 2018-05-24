import React from "react";
import "./SideBar.css";
import { RaisedButton, Paper } from "material-ui";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Logout from "../../Logout";
class SideBar extends React.Component {
  filter = React.createRef();

  render() {
    return (
      <MuiThemeProvider>
        <div className="sidebarContainer">
          <Paper style={{background: 'none'}}>
              <div className="sortButtons">
              <RaisedButton
                label="Severity"
                className="sidebarButton"
                backgroundColor="#BADA55"
                labelColor='white'
                onClick={this.props.severity}
              />
              <RaisedButton
                label="Gender"
                className="sidebarButton"
                backgroundColor="#BADA55"
                labelColor='white'
                onClick={this.props.gender}
              />
              <RaisedButton
                label="Inquiry Date"
                className="sidebarButton"
                backgroundColor="#BADA55"
                labelColor='white'
                onClick={this.props.inquiry}
              />
              <RaisedButton
                label="Therapist"
                className="sidebarButton"
                backgroundColor="#BADA55"
                labelColor='white'
                onClick={this.props.therapist}
              />
              <Logout className='sidebarButton'/>
            </div>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default SideBar;
