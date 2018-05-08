
import React, { Component } from 'react';

import './App.css';
import Login from './Login';
import Form from './Form';
import Outreach from './Outreach';

class App extends Component {
  state = {
    username: '',
    userid: '',
    userIsOutreach: false,
    isHiddenForm : true,
    isHiddenOutreach: true
  };

//  
setUser = (user) => {
  console.log('userApp', user);
  this.setState({
    username: user.username,
    userid: user.id,
    userIsOutreach: user.isOutreach
  })
  if(this.state.userIsOutreach === false){
    this.setState({
      isHiddenForm: !this.state.isHiddenForm
    })
  } else if (this.state.userIsOutreach === true) {
    this.setState({
      isHiddenOutreach: !this.state.isHiddenOutreach
    })
  } else {
    this.setState({
      isHiddenForm: true,
      isHiddenOutreach: true
    })
  }
  
}

  render() {
    
    return (
      <div className="App">
        <Login setUser={this.setUser} history={this.history}/>
        {!this.state.isHiddenForm && <Form setUser={this.state.userid} />}
        {!this.state.isHiddenOutreach && <Outreach />}
      </div>
    );
  }
}

export default App;
