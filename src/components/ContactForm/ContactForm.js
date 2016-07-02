import React, { Component, PropTypes } from 'react';
import { SUBMIT_CONTACT_FORM } from './constants';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { connect } from 'react-redux';
import classNames from 'classnames';

const defaultFields = {
  name: '',
  email: '',
  message: '',
};

@connect(
  ({ contactForm }) => ({ contactForm })
)
class ContactForm extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    contactForm: PropTypes.object.isRequired,
  };

  state = defaultFields;

  componentWillReceiveProps({ contactForm }): void {
    const { fields, isSubmitted } = contactForm;

    if (isSubmitted) {
      this.setState(Object.assign({}, defaultFields));
    } else {
      this.setState(fields);
    }
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const styles = require('./ContactForm.scss');
    const {
      name,
      email,
      message,
    } = this.state;

    const {
      dispatch,
      contactForm: {
        isLoading,
        isSubmitted,
        errors,
      },
    } = this.props;

    const {
      name: nameError,
      email: emailError,
      message: messageError,
    } = errors;

    let headerMessageMarkup;
    let bodyMarkup;
    let loadingMarkup;

    if (Object.keys(errors).length > 0) {
      headerMessageMarkup = (<p>There has been an error</p>);
    } else if (isSubmitted) {
      headerMessageMarkup = (<p>Great success, your form has been submitted!</p>);
    }

    if (isSubmitted) {
      bodyMarkup = (
        <div>
          <FlatButton label="Send another message" primary />
        </div>
      );
    } else {
      bodyMarkup = (
        <div>
          <div>
            <TextField
              id="name"
              value={name}
              onChange={event => this.handleChange(event)}
              floatingLabelText="Name"
              fullWidth
              errorText={nameError && nameError.message}
              disabled={isLoading}
            />
          </div>
          <div>
            <TextField
              id="email"
              onChange={event => this.handleChange(event)}
              value={email}
              floatingLabelText="Email"
              fullWidth
              errorText={emailError && emailError.message}
              disabled={isLoading}
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
              errorText={messageError && messageError.message}
              disabled={isLoading}
            />
          </div>
          <div>
            <RaisedButton
              onMouseUp={() => dispatch({
                type: SUBMIT_CONTACT_FORM,
                payload: this.state,
              })}
              label="Submit"
              disabled={isLoading}
              primary
            />
          </div>
        </div>
      );
    }

    if (isLoading) {
      loadingMarkup = (
        <div className={styles.loaderBackground}>
          <div className={styles.loader}>
            <CircularProgress />
          </div>
        </div>
      );
    }

    return (
      <Paper className={styles.self}>
        <div className={classNames(styles.container, { [styles.isLoading]: isLoading })}>
          {headerMessageMarkup}
          {bodyMarkup}
        </div>
        {loadingMarkup}
      </Paper>
    );
  }
}

export default ContactForm;
