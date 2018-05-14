import React from 'react';
import axios from 'axios'
import Client from '../Outreach/Client/Client'
import SideBar from './SideBar/SideBar'
import moment from 'moment'
import "./Outreach.css"

class Outreach extends React.Component{
  url = "http://localhost:5000";
  state = {
    clients : []
  }
  componentDidMount = () => {
    axios.get(`${this.url}/server/outreach`)
    .then((data)=>{      
      this.setState({
        clients: data.data
      })
    })
  }
  sortBySeverity = () => {
    axios.get(`${this.url}/server/sortBySeverity`)
    .then((data)=>{
      this.setState({
        clients: data.data
      })
    })
  }
  sortByGender = () => {
    axios.get(`${this.url}/server/sortByGender`)
    .then((data)=>{
      this.setState({
        clients: data.data
      })
    })
  }
  sortByInquiry = () => {
    axios.get(`${this.url}/server/sortByInquiryDate`)
    .then((data)=>{
      this.setState({
        clients: data.data
      })
    })
  }
  sortByTherapist = () => {
    axios.get(`${this.url}/server/sortByTherapist`)
    .then((data)=>{
      this.setState({
        clients: data.data
      })
    })
  }
  render(){
    const clients = this.state.clients.map((client, index)=>{
      return (
          <Client key={index} 
            id={client.clientId}
            firstName={client.first_name}
            lastName={client.last_name}
            age={client.dob}
            gender={client.gender}
            substancesUsed={client.substancesUsed}
            frequency={client.frequency}
            useLength={client.length_of_use}
            lastUse={moment(client.last_use).format('MM/DD/YYYY')}
            previousSubstance={client.previous_treatment}
            mentalHealth={client.mental_health}
            si_hi={client.si_hi}
            severity={client.severity}
            therapist={client.therapist}
            inquiryDate={moment(client.inquiry).format("dddd, MMMM Do YYYY, h:mm:ss a")}
            />
      )
    })
    return(
      <div className="outreachContainer">
      <div className="clients">{clients}</div>
      <SideBar severity={this.sortBySeverity} gender={this.sortByGender} inquiry={this.sortByInquiry} therapist={this.sortByTherapist} />
      </div>
    )
  }
}

export default Outreach