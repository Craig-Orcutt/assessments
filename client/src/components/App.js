import React, { Component } from 'react';
import './App.css';
import Login from './Login';

class App extends Component {
  state = {
    username: '',
    userid: '',
    userIsOutreach: false
  };

//  
setUser = (user) => {
  console.log('userApp', user);
  this.setState({
    username: user.username,
    userid: user.id,
    userIsOutreach: user.isOutreach
  })
  console.log('hellooooo from setUser', this.state);
  
}

  render() {
    return (
      <div className="App">
        <Login setUser={this.setUser}/>
      </div>
    );
  }
}

export default App;
