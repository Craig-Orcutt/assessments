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
    points: null
  }
  substances = this.state.substancesUsed;
  componentDidMount = () => {
    
    
  }
// sets state of changes made to strings in form
  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
    this.addUpSubstances(this.state.substances)
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

  addUpSubstances = (subs) => {
    let substances = this.state.substancesUsed;
    let points = 0;
    substances.forEach((data)=> {
      switch(data) {
        case 'marijuana' :
          points += 0.5;
          break;
        case "alcohol" :
          points +=3
          break;
        case "heroin" :
          points +=2.5
          break;
        case "opiates" :
          points +=2
          break;
        case "benzodiazepines" :
          points +=3
          break;
        case "cocaine" :
          points +=1.5
          break;
        case "crack" :
          points +=2
          break;
        case "methamphetamine" :
          points +=2
          break;
        case "amphetamines" :
          points +=1.5
          break;
        case "hallucinogens" :
          points +=0.5
          break;
        default :
          console.log('No substances selected');
      }
    })
    this.setState({
      points: points
    })
    console.log('POINTS ON SUBS', points);
  }

  onSubmit = e => {
    e.preventDefault();
    console.log("this", this.state);   
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
          <label>Prescription Opiates</label>
          <Checkbox value="opiates"/>
          <label>Benzodiazepines</label>
          <Checkbox value="benzodiazepines"/>
          <label>Cocaine</label>
          <Checkbox value="cocaine"/>
          <label>Crack Cocaine</label>
          <Checkbox value="crack"/>
          <label>Methamphetamine</label>
          <Checkbox value="methamphetamine"/>
          <label>Amphetamines</label>
          <Checkbox value="amphetamines"/>
          <label>Hallucinogens</label>
          <Checkbox value="hallucinogens"/>
          </CheckboxGroup>
          <br/>
          <label>Frequency of Use</label>
          <select name="frequency"  value={this.state.frequency} onChange={e => this.change(e)}>
          <option name="daily" >Daily</option>
          <option name="monthly">Monthly</option>
          <option name="yearly" >Yearly</option>
          <option name="occasionally" >Occasionally</option>
          </select>
          <br/>
          <br/>
          <label>Length of Use</label>
          <select name="useLength"  value={this.state.useLength} onChange={e => this.change(e)}>
          <option name="0months" >0 - 3 Months</option>
          <option name="3months">3 - 6 Months</option>
          <option name="6months" >6 - 12 Months</option>
          <option name="1years" >1 - 5 years</option>
          <option name="5years" > > 5 years</option>
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