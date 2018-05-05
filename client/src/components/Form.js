import React from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    gender: "",
    substancesUsed: [],
    frequecy: "",
    previousMentalHealth: "",
    // state of hide/show for text area based on click
    showing : false,
  }

// sets state of changes made to strings in form
  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
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

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    console.log("this", this.state);
    this.setState({
      firstName: "",
      lastName: "",
      gender: "",
      substancesUsed: []
    })
  };
  componentDidMount() {
    this.callApi()
      .then((data)=>{
        console.log('data', data);
        
        
      })
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('http://localhost:5000/server/form');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
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
          <label htmlFor="gender">Gender</label>
          <select name="gender"  value={this.state.gender} onChange={e => this.change(e)}>
          <option name="male" >Male</option>
          <option name="female">Other</option>
          <option name="other" >Female</option>
          </select>
          <br/>

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
            <label> Frequency of Use</label>
            <label>Daily</label>
            <input type="radio" name="frequency" value="daily" />
            <label>Weekly</label>
            <input type="radio" name="frequency" value="weekly" />
            <label>Monthly</label>
            <input type="radio" name="frequency" value="monthly" />
            <label>Occasionally</label>
            <input type="radio" name="frequency" value="occasionally" />
          <br/>
          <label>Previous Mental Health Treament?</label>
          <CheckboxGroup
          name="previousMentalHealth">
            <label>Yes</label>
            <Checkbox onClick={() => this.setState({ showing: !showing })} />
            <textarea
              name="previousMentalHealth"
              value={this.state.previousMentalHealth}
              onChange={e => this.change(e)}  
              placeholder="Please Provide Futher Information"
              // setting style of hide/show based on whether yes has been clicked
              style={{ display: (showing ? 'inline' : 'none') }}
              ></textarea>
            <label>No</label>
            <Checkbox value={'no'}/>
          </CheckboxGroup>
          <button onClick={e => this.onSubmit(e)}>Subbbmit</button>
      </form>
    );
  }
}

export default Form;