import React from 'react';
import {Card, CardActions, CardHeader, CardText, Divider, FlatButton} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "./Client.css"

class Client extends React.Component {
  clientName = `${this.props.firstName } ${this.props.lastName}`;
    state = {
    expanded: false
  }
  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});    
  };
  handleClick = () => {
    this.props.deleteClient(this.props.id)
  }
  render() {
    return(
      <MuiThemeProvider>
      <div id={this.props.id} className="clientCard">
      <Card className={this.state.expanded ? 'clientContainer controller-card expanded' : 'clientContainer controller-card'} onExpandChange={this.handleExpandChange} expanded={this.state.expanded} >
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
        </CardText>
        </Card>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Client