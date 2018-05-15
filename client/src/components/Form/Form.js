import React from "react";
import { Checkbox, CheckboxGroup  } from "react-checkbox-group";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {
  TextField,
  Paper,
  SelectField,
  MenuItem,
  DatePicker
} from "material-ui";
import moment from "moment";
import axios from "axios";
import Name from "../Form/FormComponents/NameAgeGender";
import FormModal from "../Form/FormComponents/Dialog";
import OutreachNavbar from '../../components/Outreach/Navbar'
import "./Form.css";

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    substancesUsed: [],
    frequency: "",
    useLength: "",
    lastUse: {},
    previousSubstance: "",
    previousMentalHealth: "",
    si_hi: "",
    // state of hide/show for text area based on click
    showingSI: false,
    showingTreat: false,
    showingMent: false,
    userid: this.props.setUser,
    points: 0,
    open: false
  };
  // closes modal dialog

  handleClose = () => {
    this.setState({open: false ,     
      gender: "",
      substancesUsed: [],
      frequency: "",
      useLength: "",
      lastUse: {},
      previousSubstance: "",
      previousMentalHealth: "",
      si_hi: "",
      // state of hide/show for text area based on click
      showingSI: false,
      showingTreat: false,
      showingMent: false,
      points: 0,
    })    
  };
  handleGenderChange = (event, index, gender) => this.setState({ gender });
  handleFrequencyChange = (event, index, frequency) =>
    this.setState({ frequency });
  handleUseLengthChange = (event, index, useLength) =>
    this.setState({ useLength });
  handleDateChange = (event, date) => this.setState({ lastUse: date });
  // sets state of changes made to strings in form
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    //
    this.addUpSubstances(this.state.substancesUsed);
  };

  // setting state of checkbox group
  substancesChecked = newSubs => {
    this.setState({
      substancesUsed: newSubs
    });
  };
// adds up points of substances checked
  addUpSubstances = subs => {
    let points = 0;
    subs.forEach(data => {
      switch (data) {
        case "1":
          points += 0.5;
          break;
        case "2":
          points += 3;
          break;
        case "3":
          points += 2.5;
          break;
        case "4":
          points += 2;
          break;
        case "5":
          points += 3;
          break;
        case "6":
          points += 1.5;
          break;
        case "7":
          points += 2;
          break;
        case "8":
          points += 2;
          break;
        case "9":
          points += 1.5;
          break;
        case "10":
          points += 0.5;
          break;
        default:
          console.log("No substances selected");
      }
    });
    this.setState({
      points: points
    });
  };
  // checks to see if there is data filled in si/hi, previous treament, or mental health diagnosis. If so a point is added to severity
  fieldCheck = stateCheck => {
    if (stateCheck !== "") {
      this.state.points += 1;
    }
  };
// multiplies the total points based on how long potential client was using for
  useLengthMultiply = points => {
    return new Promise((resolve, reject) => {
      let use = this.state.useLength;
      if (use === "0-3 months") {
        points = points * 1;
      } else if (use === "3-6 months") {
        points = points * 2;
      } else if (use === "6-12 months") {
        points = points * 3;
      } else if (use === "1-5 years") {
        points = points * 4;
      } else if (use === "More than 5 years") {
        points = points * 5;
      } else {
        console.log("no length of use identified");
      }
      resolve(points);
    });
  };
  // promise for checking for non empty fields and then adding points to state
  totalPoints = () => {
    return new Promise((resolve, reject) => {
      this.fieldCheck(this.state.previousSubstance);
      this.fieldCheck(this.state.si_hi);
      resolve(this.state.points);
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // checks to see if previous treatment and si_hi are null, if not, points are added to the total
    this.totalPoints()
      .then(pointsAddedUp => {
        // takes the total points and multiplies them base on length of substance abuse
        return this.useLengthMultiply(pointsAddedUp);
      })
      .then(data => {
        // sets the multiplied points to state
        this.setState({
          points: data,
          open: true
        });
        // sends off the state obj to back end for processing
        this.sendForm(this.state)

      });
  };

  sendForm = client => {
    axios.post("http://localhost:5000/server/submitForm", client).then(() => {
      console.log("form sent");
    })
    .then(()=>{

    })
  };
  logout = () => {
    window.location.reload()
  }
  render() {
    // sets state of showing or hiding the text area
    const { showingSI, showingMental, showingTreat } = this.state;

    return (
      <MuiThemeProvider>
      <div>
      <OutreachNavbar userDeets={this.props.userDeets} />

      <Paper className="formContainer">
          <div>
            <Name change={this.change} />
            <SelectField
              fullWidth={true}
              floatingLabelText="Gender"
              onChange={this.handleGenderChange}
              value={this.state.gender}>
              <MenuItem value="null" primaryText="" />
              <MenuItem value="Male" primaryText="Male" />
              <MenuItem value="Female" primaryText="Female" />
              <MenuItem value="Other" primaryText="Other" />
            </SelectField>
            <br />
            <br />
            <label className="subLabel">Substances Used</label>
            <CheckboxGroup
              className="checkboxContainer"
              name="substancesUsed"
              value={this.state.substancesUsed}
              onChange={this.substancesChecked}
              checkboxDepth={2}>
                <label className="checkLabel">
                  <Checkbox className="regular-checkbox big-checkbox" value="1" />{" "}
                  Marijuana
                </label>
                <label className="checkLabel">
                  <Checkbox className="regular-checkbox big-checkbox" value="2" />Alcohol
                </label>
                <label className="checkLabel">
                  <Checkbox className="regular-checkbox big-checkbox" value="3" />Heroin
                </label>
                <label className="checkLabel">
                  <Checkbox className="regular-checkbox big-checkbox" value="4" />Prescription
                  Opiates
                </label>
                <label className="checkLabel">
                  <Checkbox className="regular-checkbox big-checkbox" value="5" />Benzodiazepines
                </label>
                <label className="checkLabel">
                  <Checkbox className="regular-checkbox big-checkbox" value="6" />Cocaine
                </label>
                <label className="checkLabel">
                  <Checkbox className="regular-checkbox big-checkbox" value="7" />Crack
                  Cocaine
                </label>
                <label className="checkLabel">
                  <Checkbox className="regular-checkbox big-checkbox" value="8" />Methamphetamine
                </label>
                <label className="checkLabel">
                  <Checkbox className="regular-checkbox big-checkbox" value="9" />Amphetamines
                </label>
                <label className="checkLabel">
                  <Checkbox
                    className="regular-checkbox big-checkbox"
                    value="10"
                  />Hallucinogens
                </label>
            </CheckboxGroup>
            <SelectField
              fullWidth={true}
              floatingLabelText="Frequency Of Use"
              value={this.state.frequency}
              onChange={this.handleFrequencyChange}>
                <MenuItem value="daily" primaryText="Daily" />
                <MenuItem value="monthly" primaryText="Monthly" />
                <MenuItem value="yearly" primaryText="Yearly" />
                <MenuItem value="occasionally" primaryText="Occasionally" />
            </SelectField>
            <br />
            <br />
            <SelectField
              fullWidth={true}
              floatingLabelText="Length Of Use"
              value={this.state.useLength}
              onChange={this.handleUseLengthChange}>
                <MenuItem value="0-3 months" primaryText="0-3 months" />
                <MenuItem value="3-6 months" primaryText="3-6 months" />
                <MenuItem value="6-12 months" primaryText="6-12 months" />
                <MenuItem value="1-5 years" primaryText="1-5 years" />
                <MenuItem
                  value="More than 5 years"
                  primaryText="More than 5 years"
                />
            </SelectField>
            <br />
            <br />
            <DatePicker
              fullWidth={true}
              formatDate={date => moment(date).format("MM/DD/YYYY")}
              floatingLabelText="Latest Use"
              value={this.state.lastUse}
              onChange={this.handleDateChange}
            />
            <br />
            <br />
            <label>Previous Substance Abuse Treament</label>
            <CheckboxGroup
              checkboxDepth={2}
              className="textShow"
              name="previousSubstance">
              <label>
                <Checkbox
                  className="regular-checkbox big-checkbox"
                  onClick={() =>
                    this.setState({ showingTreat: !this.state.showingTreat })
                  }
                />Yes
              </label>
              <TextField
                multiLine={true}
                rows={2}
                rowsMax={4}
                fullWidth={true}
                name="previousSubstance"
                value={this.state.previousSubstance}
                onChange={e => this.change(e)}
                hintText="Please Provide Further Information"
                // setting style of hide/show based on whether yes has been clicked
                style={{ display: showingTreat ? "grid" : "none" }}
              />
              <label>
                <Checkbox
                  className="regular-checkbox big-checkbox"
                  value={"no"}
                />No
              </label>
              <br />
              <br />
            </CheckboxGroup>
            <label>Previous Mental Health Diagnosis</label>
            <CheckboxGroup
              checkboxDepth={2}
              name="previouseMentalHealth"
              className="textShow">
              <label>
                <Checkbox
                  className="regular-checkbox big-checkbox"
                  onClick={() =>
                    this.setState({ showingMental: !showingMental })
                  }
                />Yes
              </label>
              <TextField
                multiLine={true}
                rows={2}
                rowsMax={4}
                fullWidth={true}
                name="previousMentalHealth"
                value={this.state.previousMentalHealth}
                onChange={e => this.change(e)}
                hintText="Please Provide Further Information"
                // setting style of hide/show based on whether yes has been clicked
                style={{ display: showingMental ? "grid" : "none" }}
              />
              <label>
                <Checkbox
                  className="regular-checkbox big-checkbox"
                  value={"no"}
                />No
              </label>
              <br />
              <br />
            </CheckboxGroup>
            <label>Previous SI/HI?</label>
            <CheckboxGroup checkboxDepth={2} className="textShow" name="si_hi">
              <label>
                <Checkbox
                  className="regular-checkbox big-checkbox"
                  onClick={() => this.setState({ showingSI: !showingSI })}
                />Yes
              </label>
              <TextField
                multiLine={true}
                rows={2}
                rowsMax={4}
                fullWidth={true}
                name="si_hi"
                value={this.state.si_hi}
                onChange={e => this.change(e)}
                hintText="Please Provide Further Information"
                // setting style of hide/show based on whether yes has been clicked
                style={{ display: showingSI ? "grid" : "none" }}
              />
              <label>
                <Checkbox
                  className="regular-checkbox big-checkbox"
                  value={"no"}
                />No
              </label>
            </CheckboxGroup>
            <br />
            <button onClick={e => this.onSubmit(e)}>Submit</button>
            <FormModal open={this.state.open} handleClose={this.handleClose} logout={this.logout}/>
          </div>
        </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Form;
