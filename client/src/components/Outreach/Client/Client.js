import React from 'react';
import {Paper} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "./Client.css"

class Client extends React.Component {
  render() {
    return(
      <MuiThemeProvider>
      <Paper className="clientContainer">
      <div id={this.props.id} className="clientCard">
        <p >{this.props.firstName} {this.props.lastName}</p>
        <p> Age : {this.props.age}</p>
        <p>Gender : {this.props.gender}</p>
        <p>Frequency of Use : {this.props.frequency}</p>
        <p>Substances Used : {this.props.substancesUsed.join(', ')}</p>
        <p>Length of Use : {this.props.useLength}</p>
        <p>Last Time Client Used : {this.props.lastUse}</p>
        <p>Previous Substance Abuse Treatment : {this.props.previousSubstance}</p>
        <p>Mental Health Diagnosis : {this.props.mentalHealth}</p>
        <p>Previous SI/HI : {this.props.si_hi}</p>
        <p>Severity : {this.props.severity}</p>
        <p>Therapist : {this.props.therapist}</p>
      </div>
      </Paper>
      </MuiThemeProvider>
    )
  }
}

export default Client