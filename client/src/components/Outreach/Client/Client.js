import React from 'react';
import {Card, CardActions, CardHeader, CardText, Divider, FlatButton} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "./Client.css"

class Client extends React.Component {
  componentDidMount = () => {
    if (this.props.severity > 40){
      this.setState({
        recommended: 'Inpatient'
      })
     } else if (this.props.severity < 39 && this.props.severity < 20){
        this.setState({
          recommended: "Partial Hospitalization"
        }) 
      }
        else {
          this.setState({
            recommended: "Outpatient"
          })
        }
      }

  clientName = `${this.props.firstName } ${this.props.lastName}`;
    state = {
    expanded: false,
    recommended: ''
  }
  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});    
  };
  handleClick = () => {
    this.props.deleteClient(this.props.id)
  }

  expand = () => {
    return this.state.expanded ? 'clientContainer expanded' : 'clientContainer'
  }

  
  severityCheck = (score) => {
    this.expand()
    if (score >= 40){
      return 'red'
    } else {
      console.log('this isnt wokring', );
      
    }
  }
  render() {
    return(
      <MuiThemeProvider>
      <div id={this.props.id}>
      <Card className={this.severityCheck(this.props.severity)} onExpandChange={this.handleExpandChange} expanded={this.state.expanded} >
        <FlatButton onClick={this.handleClick} label="&times;" />
        <CardHeader
          title = {this.clientName}
          subtitle={this.props.inquiryDate}
          actAsExpander={true}
          showExpandableButton={true}
          />
        <CardText expandable={true}>
          <p> Age : {this.props.age}</p>
          <Divider />
          <p>Gender : {this.props.gender}</p>
          <Divider />
          <p>Frequency of Use : {this.props.frequency}</p>
          <Divider />
          <p>Substances Used : {this.props.substancesUsed.join(', ')}</p>
          <Divider />
          <p>Length of Use : {this.props.useLength}</p>
          <Divider />
          <p>Last Time Client Used : {this.props.lastUse}</p>
          <Divider />
          <p>Previous Substance Abuse Treatment : {this.props.previousSubstance}</p>
          <Divider />
          <p>Mental Health Diagnosis : {this.props.mentalHealth}</p>
          <Divider />
          <p>Previous SI/HI : {this.props.si_hi}</p>
          <Divider />
          <p>Severity : {this.props.severity}</p>
          <Divider />
          <p>Therapist : {this.props.therapist}</p>
          <p>{this.state.recommended}</p>
        </CardText>
        </Card>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Client