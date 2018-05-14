import React from 'react';
import axios from 'axios';


class Logout extends React.Component {

  logout = () => {
    window.location.reload();
  }
  render(){
    return (
  
      <button onClick={this.logout}>Logout</button>
      
    )
  }
}

export default Logout