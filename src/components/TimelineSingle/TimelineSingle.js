// @flow
import React, { Component, PropTypes } from 'react';
import { themeable } from 'rethemeable';
import moment from 'moment';
import Paper from 'material-ui/Paper';

@themeable
class TimelineSingle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    strapline: PropTypes.string.isRequired,
    fromDate: PropTypes.string.isRequired,
    toDate: PropTypes.string,
    body: PropTypes.string,
  };

  /**
   * @param {Object} props
   * @param {!string} props.title
   * @param {!string} props.strapline
   * @param {!Date} props.fromDate
   * @param {Date} props.toDate
   * @param {string} props.body
   * @returns {Element}
   */
  render() {
    const {
      title,
      strapline,
      fromDate,
      toDate,
      body,
    } = this.props;
    const theme = this.theme;
    let toDateMarkup = 'present';
    let bodyMarkup;

    const from = moment(fromDate).format('MMMM YYYY');

    if (body) {
      bodyMarkup = (
        <p className="body">{body}</p>
      );
    }

    if (toDate) {
      toDateMarkup = moment(toDate).format('MMMM YYYY');
    }

    console.log(this.props.isLeft);

    return (
    <div className={theme.self}>

      <Paper className={theme.paper}>
        <div className={theme.dates}>
        <time className={theme.fromDate}>{from}</time>
        <span> - </span>
        <time className={theme.toDate}>{toDateMarkup}</time>
        </div>
        <h1 className={theme.title}>{title}</h1>
        <h2 className={theme.strapline}>{strapline}</h2>
        {bodyMarkup}
      </Paper>
      </div>
    );
  }
}

export default TimelineSingle;
