import React from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import axios from 'axios'

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    age: '',
    gender: "",
    substancesUsed: [],
    frequency: '',
    useLength: '',
    lastUse: '',
    previousSubstance: '',
    previousMentalHealth: '',
    si_hi: '',
    // state of hide/show for text area based on click
    showing : false,
    userid : this.props.setUser,
    points: 0
  }

// sets state of changes made to strings in form
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    // 
    this.addUpSubstances(this.state.substancesUsed); 
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
    if (use === '0-3months'){
      points = points * 1
    } else if(use === '3-6months'){
      points = points * 2
    } else if(use === '6-12months'){
      points = points * 3
    } else if(use ==='1-5years'){
      points = points * 4
    } else if(use === '5Upyears'){
      points = points * 5
    } else {
      console.log('no length of use identified');
    }
    console.log('lengthtttt', points);

    resolve(points);
  })
  }
// 
  totalPoints = () => {
    return new Promise((resolve,reject)=> {
      this.fieldCheck(this.state.previousSubstance); 
      this.fieldCheck(this.state.si_hi);

      console.log('PROMISE points',this.state );
      resolve(this.state.points)
    })
  }

  
  onSubmit = e => {
    e.preventDefault();
    console.log("this", this.state);
    this.totalPoints()
    .then((pointsAddedUp)=>{
      return this.useLengthMultiply(pointsAddedUp)
    })
    .then((data)=>{
      this.setState({
        points: data
      })
      console.log('this.state.treatment', this.state);
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
      <form>
          <label htmlFor="firstName">Client's First Name</label>
          <input 
          name="firstName" 
          placeholder="First Name"
          value={this.state.firstName}
          onChange={e => this.change(e)}/>
          <br/>
          <label htmlFor="lastName">Client's Last Name</label>
          <input 
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={e => this.change(e)} 
            />
          
          <br/>
          <label>Age</label>
          <input type="text" name="age" value={this.state.age} onChange={e=> this.change(e)}/>
          <br/>
          <label htmlFor="gender">Gender</label>
          <select name="gender"  value={this.state.gender} onChange={e => this.change(e)}>
          <option name="null" >Select</option>
          <option name="male" >Male</option>
          <option name="female">Other</option>
          <option name="other" >Female</option>
          </select>
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
          <label>Frequency of Use</label>
          <select name="frequency"  value={this.state.frequency} onChange={e => this.change(e)}>
          <option name="null" >Select</option>
          <option name="daily" >Daily</option>
          <option name="monthly">Monthly</option>
          <option name="yearly" >Yearly</option>
          <option name="occasionally" >Occasionally</option>
          </select>
          <br/>
          <br/>
          <label>Length of Use</label>
          <select name="useLength"  value={this.state.useLength} onChange={e => this.change(e)}>
          <option name="null" >Select</option>
          <option value="0-3months" >0 - 3 Months</option>
          <option value="3-6months">3 - 6 Months</option>
          <option value="6-12months" >6 - 12 Months</option>
          <option value="1-5years" >1 - 5 years</option>
          <option value="5Upyears" > > 5 years</option>
          </select>
          <br/>
          <label>Latest Use</label>
          <input type="text" name="lastUse" value={this.state.lastUse} onChange={e => this.change(e)}/>
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
          <label>Previouse Mental Health Diagnosis</label>
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
      </form>
    );
  }
}

export default Form;