import React, { Component } from 'react';
import Form from './components/Form'
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/form');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  render() {
    return (
      <div className="App">
      <p className="App-intro">{this.state.response}</p>
      <Form />
      </div>
    );
  }
}

export default App;
