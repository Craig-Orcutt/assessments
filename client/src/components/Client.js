import React from 'react';

class Client extends React.Component {
  render() {
    return(
      <div>
        <h1 id={this.props.id}>{this.props.text}</h1>
      </div>
    )
  }
}

export default Client