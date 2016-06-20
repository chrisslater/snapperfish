import React, { Component, PropTypes } from 'react';
import { SUBMIT_CONTACT_FORM } from './constants';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';


@connect(null)
class ContactForm extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

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

  handleSubmit(event, dispatch) {
    console.log('submit', event);
    console.log(dispatch);
    return dispatch({ type: SUBMIT_CONTACT_FORM });
  }

  render() {
    const {
      name,
      email,
      message,
    } = this.state;
    const {
      dispatch,
    } = this.props;

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
              onMouseUp={event => this.handleSubmit(event, dispatch)}
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
