import React from 'react';
import './SideBar.css';
import {RaisedButton, Paper } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class SideBar extends React.Component {
  
  render(){
    return(
      <MuiThemeProvider>
      <Paper>
      <div className="sidebarContainer">SideBar

      <div className="sortButtons"></div>
        <RaisedButton 
          label="Severity"
          className="sidebarButton"
          backgroundColor="#B9C6AE"
          onClick={this.props.severity}
        />
        <RaisedButton 
          label="Gender"
          className="sidebarButton"
          backgroundColor="#B9C6AE"
          onClick={this.props.gender}
        />
        <RaisedButton 
          label="Inquiry Date"
          className="sidebarButton"
          backgroundColor="#B9C6AE"
          onClick={this.props.inquiry}
        />
        <RaisedButton 
          label="Therapist"
          className="sidebarButton"
          backgroundColor="#B9C6AE"
          onClick={this.props.therapist}
        />

      </div>
      </Paper>
      </MuiThemeProvider>
    )
  }
}

export default SideBar