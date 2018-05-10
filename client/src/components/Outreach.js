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
      this.setState({
        clients: data.data
      })
    })
  }
  render(){
    const clients = this.state.clients.map((client, index)=>{
      return (
          <Client key={index} text={client.first_name} />
      )
    })
    return(
      <div className="clients">{clients}</div>
    )
  }
}

export default Outreach