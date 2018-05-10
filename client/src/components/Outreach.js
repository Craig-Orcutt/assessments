import React from 'react';
import axios from 'axios'
import Client from './Client'

class Outreach extends React.Component{
  url = "http://localhost:5000";
  state = {
    clients : []
  }
  componentDidMount = () => {
    axios.get(`${this.url}/server/outreach`)
    .then((data)=>{
      console.log('data', data);
      
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
            frequency={client.frequency}
            useLength={client.length_of_use}
            lastUse={client.last_use}
            previousSubstance={client.previous_treatment}
            mentalHealth={client.mental_health}
            si_hi={client.si_hi}
            severity={client.severity}
            therapist={client.therapist}/>
      )
    })
    return(
      <div className="clients">{clients}</div>
    )
  }
}

export default Outreach