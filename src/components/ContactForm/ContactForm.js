import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

@connect(null)
class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  };

  handleChange(event) {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  }

  handleSubmit(event) {
    // this.props.dispatch();
    console.log('submit', event);
  }

  render() {
    const {
      name,
      email,
      message,
    } = this.state;

    return (
      <Paper>
        <div>
          <div>
            <TextField
              id="name"
              value={name}
              onChange={event => this.handleChange(event)}
              floatingLabelText="Name"
              fullWidth
            />
          </div>
          <div>
            <TextField
              id="email"
              onChange={event => this.handleChange(event)}
              value={email}
              floatingLabelText="Email"
              fullWidth
            />
          </div>
          <div>
            <TextField
              id="message"
              onChange={event => this.handleChange(event)}
              value={message}
              floatingLabelText="Message"
              fullWidth
              multiLine
              rows={4}
            />
          </div>
          <div>
            <RaisedButton
              onTouchEnd={event => this.handleSubmit(event)}
              label="Submit"
              primary
            />
          </div>
        </div>
      </Paper>
    );
  }
}

export default ContactForm;
