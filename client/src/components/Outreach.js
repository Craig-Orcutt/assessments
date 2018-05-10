import React from 'react';
import axios from 'axios'

class Outreach extends React.Component{
  url = "http://localhost:5000";

  componentDidMount = () => {
    axios.get(`${this.url}/server/outreach`)
    .then((data)=>{
      console.log('data', data);
      
    })
  }
  render(){
    console.log('hello from outreach' );
    return(
      <h1>HELLLLOOOOOOOOOO OUTTREACCCCHHHHHHHHH</h1>
    )
  }
}

export default Outreach