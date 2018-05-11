import React from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {TextField, SelectField, MenuItem, DatePicker } from 'material-ui';
import axios from 'axios';

class Form extends React.Component {


  state = {
    firstName: "",
    lastName: "",
    age: '',
    gender: "",
    substancesUsed: [],
    frequency: '',
    useLength: '',
    lastUse: {},
    previousSubstance: '',
    previousMentalHealth: '',
    si_hi: '',
    // state of hide/show for text area based on click
    showing : false,
    userid : this.props.setUser,
    points: 0,


  }
  handleGenderChange = (event, index, gender) => this.setState({gender});
  handleFrequencyChange = (event, index, frequency) => this.setState({frequency});
  handleUseLengthChange = (event, index, useLength) => this.setState({useLength});
  handleDateChange = (event, date) => this.setState({lastUse: date});
// sets state of changes made to strings in form
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    // 
    this.addUpSubstances(this.state.substancesUsed); 
    console.log('this.state', this.state);
    
  };
  
  // setting state of checkbox group
  substancesChecked = (newSubs) => {
    this.setState({
      substancesUsed: newSubs
    })
  }
  
  addUpSubstances = (subs) => {
    let points = 0;
    subs.forEach((data)=> {
      switch(data) {
        
        case '1' :
        points += 0.5;
          break;
        case "2" :
        points +=3
          break;
        case "3" :
        points +=2.5
          break;
        case "4" :
        points +=2
          break;
        case "5" :
        points +=3
          break;
        case "6" :
        points +=1.5
          break;
        case "7" :
        points +=2
          break;
        case "8" :
        points +=2
          break;
        case "9" :
        points +=1.5
          break;
        case "10" :
        points +=0.5
          break;
        default :
          console.log('No substances selected');
      }
    })
    this.setState({
      points: points
    })
  }
  fieldCheck = (stateCheck) => {
    if(stateCheck !== ""){
      this.state.points +=1 
    } 
  }

  useLengthMultiply = (points) => {
    return new Promise((resolve,reject)=>{
    let use = this.state.useLength
    if (use === '0-3 months'){
      points = points * 1
    } else if(use === '3-6 months'){
      points = points * 2
    } else if(use === '6-12 months'){
      points = points * 3
    } else if(use ==='1-5 years'){
      points = points * 4
    } else if(use === 'More than 5 years'){
      points = points * 5
    } else {
      console.log('no length of use identified');
    }
    resolve(points);
  })
  }
// promise for checking for non empty fields and then adding points to state
  totalPoints = () => {
    return new Promise((resolve,reject)=> {
      this.fieldCheck(this.state.previousSubstance); 
      this.fieldCheck(this.state.si_hi);
      resolve(this.state.points)
    })
  }

  
  onSubmit = e => {
    e.preventDefault();
    // checks to see if previous treatment and si_hi are null, if not, points are added to the total
    this.totalPoints()
    .then((pointsAddedUp)=>{
      // takes the total points and multiplies them base on length of substance abuse
      return this.useLengthMultiply(pointsAddedUp)
    })
    .then((data)=>{
      // sets the multiplied points to state
      this.setState({
        points: data
      })
      // sends off the state obj to back end for processing
      return this.sendForm(this.state)
    })
  };

  sendForm = (client) => {
    axios.post('http://localhost:5000/server/submitForm', client)
    .then(()=>{
      console.log('form sent', );
    })
  }
  render(){
    // sets state of showing or hiding the text area
    const { showing } = this.state;
    return (
      <MuiThemeProvider>
        <div>
          <TextField 
          name="firstName" 
          floatingLabelText='First Name'
          value={this.state.firstName}
          onChange={e => this.change(e)}/>
          <br/>
          <TextField 
            name="lastName"
            floatingLabelText='Last Name'
            value={this.state.lastName}
            onChange={e => this.change(e)} 
            />
          
          <br/>

          <TextField 
            floatingLabelText='Age'
            name="age" 
            value={this.state.age} 
            onChange={e=> this.change(e)}/>
          <br/>

          <br/>
          <SelectField floatingLabelText='Gender' name="gender" value={this.state.gender} onChange={this.handleGenderChange}>
          <MenuItem value='null' primaryText='' />
          <MenuItem value='Male' primaryText='Male'/>
          <MenuItem value='Female' primaryText='Female' />
          <MenuItem value='Other' primaryText ='Other' />
          </SelectField>
          <br/>
          <label>Substances Used</label>
          <CheckboxGroup 
          name="substancesUsed"
          value={this.state.substancesUsed} 
          onChange={this.substancesChecked}
          checkboxDepth={2}>
          <label><Checkbox value="1" />Marijuana</label>
          <label><Checkbox value="2" />Alcohol</label>
          <label><Checkbox value="3"/>Heroin</label>
          <label><Checkbox value="4"/>Prescription Opiates</label>
          <label><Checkbox value="5"/>Benzodiazepines</label>
          <label><Checkbox value="6"/>Cocaine</label>
          <label><Checkbox value="7"/>Crack Cocaine</label>
          <label><Checkbox value="8"/>Methamphetamine</label>
          <label><Checkbox value="9"/>Amphetamines</label>
          <label><Checkbox value="10"/>Hallucinogens</label>
          </CheckboxGroup>
          <br/>
          <SelectField floatingLabelText= 'Frequency Of Use' value={this.state.frequency} onChange={this.handleFrequencyChange}>
          <MenuItem value="daily" primaryText="Daily"/>
          <MenuItem value="monthly" primaryText="Monthly"/>
          <MenuItem value="yearly" primaryText="Yearly"/>
          <MenuItem value="occasionally" primaryText="Occasionally"/>
          </SelectField>
          <br/>
          <br/>

          <SelectField floatingLabelText= 'Length Of Use' value={this.state.useLength} onChange={this.handleUseLengthChange}>
          <MenuItem value="0-3 months" primaryText="0-3 months"/>
          <MenuItem value="3-6 months" primaryText="3-6 months"/>
          <MenuItem value="6-12 months" primaryText= "6-12 months"/>
          <MenuItem value="1-5 years" primaryText="1-5 years"/>
          <MenuItem value="More than 5 years" primaryText="More than 5 years"/> 
          </SelectField>
          <br/>

          <DatePicker floatingLabelText="Latest Use" value={this.state.lastUse} onChange={this.handleDateChange}/>
          <br/>
          <label>Previous Substance Abuse Treament</label>
          <CheckboxGroup name="previouseSubstance">
            <label>Yes</label>
            <Checkbox onClick={() => this.setState({ showing: !this.state.showing })} />
            <textarea
              name="previousSubstance"
              value={this.state.previousSubstance}
              onChange={e => this.change(e)}  
              placeholder="Please Provide Further Information"
              // setting style of hide/show based on whether yes has been clicked
              style={{ display: showing ? "inline" : "none" }}
            />
            <label>No</label>
            <Checkbox value={"no"} />
          </CheckboxGroup>
          <label>Previous Mental Health Diagnosis</label>
          <CheckboxGroup name="previouseMentalHealth">
            <label>Yes</label>
            <Checkbox onClick={() => this.setState({ showing: !showing })} />
            <textarea
              name="previousMentalHealth"
              value={this.state.previousMentalHealth}
              onChange={e => this.change(e)}  
              placeholder="Please Provide Further Information"
              // setting style of hide/show based on whether yes has been clicked
              style={{ display: showing ? "inline" : "none" }}
            />
            <label>No</label>
            <Checkbox value={"no"} />
          </CheckboxGroup>
          <label>Previous SI/HI?</label>
          <CheckboxGroup name="si_hi">
            <label>Yes</label>
            <Checkbox onClick={() => this.setState({ showing: !showing })} />
            <textarea
              name="si_hi"
              value={this.state.si_hi}
              onChange={e => this.change(e)}  
              placeholder="Please Provide Further Information"
              // setting style of hide/show based on whether yes has been clicked
              style={{ display: showing ? "inline" : "none" }}
            />
            <label>No</label>
            <Checkbox value={"no"} />
          </CheckboxGroup>

          <button onClick={e => this.onSubmit(e)}>Subbbmit</button>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default Form;