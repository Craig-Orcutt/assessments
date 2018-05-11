import React from 'react';

class Client extends React.Component {
  render() {
    return(
      <div id={this.props.id} className="clientCard">
        <h1 >Name : {this.props.firstName} {this.props.lastName}</h1>
        <p> Age : {this.props.age}</p>
        <p>Gender : {this.props.gender}</p>
        <p>Frequency of Use : {this.props.frequency}</p>
        <p>Substances Used : {this.props.substancesUsed.join(', ')
          // subs = ` ${subs.charAt(0).toUpperCase() + subs.slice(1)}, `
          //   return subs.substring(0, subs.length - 1)
     }</p>
        <p>Length of Use : {this.props.useLength}</p>
        <p>Last Time Client Used : {this.props.lastUse}</p>
        <p>Previous Substance Abuse Treatment : {this.props.previousSubstance}</p>
        <p>Mental Health Diagnosis : {this.props.mentalHealth}</p>
        <p>Previous SI/HI : {this.props.si_hi}</p>
        <p>Severity : {this.props.severity}</p>
        <p>Therapist : {this.props.therapist}</p>
      </div>
    )
  }
}

export default Client