import React from 'react';
import Logout from '../Logout'

class OutreachNavbar extends React.Component {

  
  render(){
    return(
      <div>
      <h1>Test</h1>
      <p>Welcome! {this.props.userDeets.username}</p>
      <Logout />
      </div>
    )
  }
}

export default OutreachNavbar