import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';



export default class FormModal extends React.Component {




  render() {
    const actions = [
      <FlatButton
        label="Submit another client"
        primary={true}
        onClick={this.props.handleClose}
      />,
      <FlatButton
        label="Logout"
        primary={true}
        keyboardFocused={true}
        onClick={this.props.logout}
      />,
    ];

    return (

        <Dialog
          title="Thanks!"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.handleClose}
          >
            Thank you for your interest. One of our outreach coordinators will be in touch with you as soon as possible
          </Dialog>

    );
  }
}