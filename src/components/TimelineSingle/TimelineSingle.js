// @flow
import React, { PropTypes } from 'react';
import moment from 'moment';
import Paper from 'material-ui/Paper';
import classNames from 'classnames';
import themeInjector from 'containers/themeInjector';

/**
 * @param {Object} props
 * @param {!string} props.title
 * @param {!string} props.strapline
 * @param {!Date} props.fromDate
 * @param {Date} props.toDate
 * @param {string} props.body
 * @returns {Element}
 */
function TimelineSingle(props) {
  const {
    title,
    strapline,
    fromDate,
    toDate,
    body,
    direction,
    theme,
  } = props;
  let toDateMarkup = 'present';
  let bodyMarkup;
  let arrowMarkup;

  const from = moment(fromDate).format('MMMM YYYY');

  if (body) {
    bodyMarkup = (
      <p className="body">{body}</p>
    );
  }

  if (toDate) {
    toDateMarkup = moment(toDate).format('MMMM YYYY');
  }

  const classes = [theme.self, theme.triangle];

  if (direction) {
    classes.push(theme[direction]);
    arrowMarkup = (<div className={theme[`arrow-${direction}`]} />);
  }

  return (
    <div className={classNames(classes)}>
      {arrowMarkup}
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

TimelineSingle.propTypes = {
  theme: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  strapline: PropTypes.string.isRequired,
  fromDate: PropTypes.string.isRequired,
  toDate: PropTypes.string,
  body: PropTypes.string,
  direction: PropTypes.oneOf(['left', 'right']),
};

export default themeInjector(TimelineSingle);
