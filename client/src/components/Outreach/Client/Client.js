import React from 'react';
import {Card, CardActions, CardHeader, CardText, Divider, FlatButton, } from 'material-ui';
import {Button, TextField} from "@material-ui/core";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "./Client.css"

class Client extends React.Component {
  clientName = `${this.props.firstName } ${this.props.lastName}`;
  inquiryRecommend = `Inquiry Date :${this.props.inquiryDate} `;
  comment = React.createRef();
  state = {
    expanded: false,
    recommend: ''
  }
  componentDidMount = () => {
    let severity = this.props.severity
    if(severity > 40){
      this.setState({
        recommend: 'Inpatient'
      })
    } else if( severity < 40 && severity > 20) {
      this.setState({
        recommend: 'Partial Hospitalization'
      })
    } else {
      this.setState({
        recommend: 'Outpatient'
      })
    }
  }
  severityCheck = (score)=>{

      if(this.props.severity > 40){
        return `red` 
      } else if(this.props.severity < 40 && this.props.severity >= 20) {
        return  `orange`
      } else {
        return `yellow`
      }
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
      <div id={this.props.id} className="clientCard" >
      <Card className={this.state.expanded ? 'clientContainer controller-card expanded' : 'clientContainer controller-card'} onExpandChange={this.handleExpandChange} expanded={this.state.expanded} >
        <FlatButton onClick={this.handleClick} label="&times;" />
        <CardHeader
          className={this.severityCheck(this.props.severity)}
          title = {this.clientName}
          subtitle={this.inquiryRecommend}
          actAsExpander={true}
          showExpandableButton={true}
          />
        <CardText expandable={true} >
          <p>Recommendation: {this.state.recommend}</p>
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
          <TextField
          label='Client Comments'
          multiline
          rowsMax="4"
          fullWidth
          margin="normal"
          value={this.props.comment}
          onChange={this.props.change}
        />
        <CardActions>
          <Button size='small'>Add Comment</Button>
        </CardActions>
        </CardText>
        </Card>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Client




