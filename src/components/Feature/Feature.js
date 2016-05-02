/* @flow */
import React, { Component, PropTypes } from 'react';
import { Themeable as themeable } from 'rethemeable';
import { markdown } from 'markdown';

class Feature extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
  };

  static defaultProps = {

  };

  getBody(body: string, theme: Object) {
    if (body) {
      return (
        <div
          className={theme.body}
          dangerouslySetInnerHTML={{ __html: markdown.toHTML(body) }}
        />
      );
    }

    return null;
  }
  theme: Object;

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

export default themeable(Feature);
