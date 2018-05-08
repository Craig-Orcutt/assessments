import React from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
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
    points: null
  }

  componentDidMount = () => {
    
    
  }
// sets state of changes made to strings in form
  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
    this.addUpPoints(this.state.substancesUsed)
  };
  // setting state of checkbox group
  substancesChecked = (newSubs) => {
    this.setState({
      substancesUsed: newSubs
    })
  }
  useFrequency = (frequecy) => {
    this.setState({
      frequency: frequecy
    })

  }

  addUpPoints = (subs) => {
    let substances = this.state.substancesUsed;
    let points = 0;
    substances.forEach((data)=> {
      if(data === "marijuana") {
        points += 1
        console.log('points in a', points);
      }
      else if (data === 'alcohol') {
        points +=3
        console.log('points in a', points);
      }
      else if( data === 'heroin') {
        points +=2
        console.log('points in h', points);
      }
      console.log('points overall', points);
      
    })
    this.setState({
      points: points
    })
    console.log('POINTS', points);
    
  }
  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
   
    console.log("this", this.state);
    // this.setState({
    //   firstName: "",
    //   lastName: "",
    //   age: '',
    //   gender: "",
    //   substancesUsed: [],
    //   frequency: '',
    //   useLength: '',
    //   previousSubstance: '',
    //   previousMentalHealth: '',
    //   si_hi: ''
    // })
    // const {firstName,lastName,age,gender,substancesUsed,frequency,useLength,previousSubstance,previousMentalHealth,si_hi} = this.state
    this.sendForm(this.state)
    
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
          <option name="male" >Male</option>
          <option name="female">Other</option>
          <option name="other" >Female</option>
          </select>
          <br/>
          <label>Substances Used</label>
          <CheckboxGroup 
          name="substancesUsed"
          value={this.state.substancesUsed} 
          onChange={this.substancesChecked}>
          <label>Marijuana</label>
          <Checkbox value="marijuana" />
          <label>Alcohol</label>
          <Checkbox value="alcohol" />
          <label>Heroin</label>
          <Checkbox value="heroin"/>
          </CheckboxGroup>
          <br/>
          <label>Frequency of Use</label>
          <RadioGroup name='frequency' value={this.state.frequency} onChange={ this.useFrequency }>
            <RadioButton value="daily">
              Daily
            </RadioButton>
            <RadioButton value="weekly">
              Weekly
            </RadioButton>
            <RadioButton value="monthly">
              Monthly
            </RadioButton>
            <RadioButton value="occasionally">
              Occasionally
            </RadioButton>
          </RadioGroup>

          <br/>
          <label htmlFor="useLengthRef">Length Of Use</label>
          <input type="text" name="useLength" value={this.state.useLength} onChange={e => this.change(e)}   />
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