/* @flow */
import React, { Component, PropTypes } from 'react';
import { Themeable } from 'rethemeable';
import { markdown } from 'markdown';

class Feature extends Component {
  theme: Object;

  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
  };

  static defaultProps = {

  };

  getBody(body, theme) {
    if (body) {
      return (
        <div
          className={theme.body}
          dangerouslySetInnerHTML={{ __html: markdown.toHTML(body) }}
        />
      );
    }
  }

  render() {
    const theme = this.theme;
    const { body, title } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        {this.getBody(body, theme)}
      </div>
    );
  }
}

export default Themeable(Feature);
