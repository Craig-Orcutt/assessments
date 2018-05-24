import React from 'react';
import './Navbar.css'

class OutreachNavbar extends React.Component {

  
  render(){
    return(
      <div className='navBarContainer'>
      <p className='logo'>Quick Assess</p>
      <p className='welcomeName'>Welcome! {this.props.userDeets.username}</p>
      
      </div>
    )
  }
}

export default OutreachNavbar