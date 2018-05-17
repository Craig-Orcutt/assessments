import React from 'react';
import axios from 'axios'
import Client from '../Outreach/Client/Client'
import SideBar from './SideBar/SideBar'
import OutreachNavbar from './Navbar'
import moment from 'moment'
import "./Outreach.css"

class Outreach extends React.Component{
  url = "http://localhost:5000";
  state = {
    clients : [
    ],
    comment: '',
    searchFilter: ''
  }
  componentDidMount = () => {
    axios.get(`${this.url}/server/outreach`)
    .then((data)=>{      
      this.setState({
        clients: data.data
      })
      console.log('this.state', this.state);
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
  
  deleteClient = (id) => {
    console.log('client id', id);
    // deletes client and then gets the updated list of clientsq
    axios.post(`${this.url}/server/deleteClient`, {id})
    .then((response)=>{
      return axios.get(`${this.url}/server/outreach`)
      .then((data)=>{
        this.setState({
          clients: data.data
        })
        console.log('this.state after delete', this.state);
      })
    })
  }
  change = (e) =>{
    
    this.setState({
      comment: e.target.value
    })    
    console.log('change is working?', this.state.comment);
  }
  // searchFilterFunc = () => {
  //   // get copy of clients 
  //   const clients = [...this.state.clients];
  //   // get value of what has been typed in
  //   let searchFilter = this.state.searchFilter
  //   // filter out clients that match criteria

  //   // set state of new clients
  //   // this.setState([ clients ]);
  
  // }
  
  render(){

    const clients = this.state.clients.map((client, index)=>{
      return (
          <Client key={client.id}
            id={client.id}
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
            deleteClient={this.deleteClient}
            recommend={this.recommend}
            progress={client.progress}
            clientComment={client.comment}
            change={this.change}
            comment={this.state.comment}

            />
      )
    })
    return(
      <div >
      <OutreachNavbar className='nav' userDeets={this.props.userDeets} />
      <div className="outreachContainer">
      <div className="clients" >{clients}</div>
      <SideBar change={this.change} severity={this.sortBySeverity} gender={this.sortByGender} inquiry={this.sortByInquiry} therapist={this.sortByTherapist} />
      </div>
      </div>
    )
  }
}

export default Outreach