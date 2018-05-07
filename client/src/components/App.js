import React, { Component } from 'react';
import './App.css';
import Login from '/Login';

class App extends Component {
  // state = {
  //   response: ''
  // };

//  
setUser = (user) => {
  console.log('userApp', user);
  
  // this.setState
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
