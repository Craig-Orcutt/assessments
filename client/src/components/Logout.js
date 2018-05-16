import React from 'react';
import {RaisedButton} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class Logout extends React.Component {

  logout = () => {
    window.location.reload();
  }
  render(){
    return (
      <MuiThemeProvider>
      <RaisedButton 
        label='Logout'
        onClick={this.logout} />
        </MuiThemeProvider>
    )
  }
}

export default Logout