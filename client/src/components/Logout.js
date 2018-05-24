import React from 'react';
import {RaisedButton} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../components/Outreach/SideBar/SideBar.css'


class Logout extends React.Component {
  
  logout = () => {
    window.location.reload();
  }
  render(){
    return (
      <MuiThemeProvider>
      <RaisedButton
        className='logout' 
        style={{border: '0 0 0 1px solid #99a1a7'}}
        label='Logout'
        onClick={this.logout}
        backgroundColor="#BADA55"
        labelColor='white' />
        </MuiThemeProvider>
    )
  }
}

export default Logout