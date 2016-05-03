/* @flow */
import React, { Component, PropTypes } from 'react';
import { themeable } from 'rethemeable';
import { markdown } from 'markdown';
import { Image } from 'components';

class Feature extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired,
    image: React.PropTypes.shape({
      src: React.PropTypes.string,
      alt: React.PropTypes.string,
    }),
    body: PropTypes.string,
  };

  getImage(image) {
    if (typeof image === 'object' && (image.src && image.alt)) {
      return <Image src={image.src} alt={image.alt} />;
    }

    return null;
  }

  getBody(body, theme: Object) {
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
    const {
      title,
      image,
      body,
      publishDate,
    } = this.props;

    return (
      <article>
        {this.getImage(image)}
        <h1>{title}</h1>
        <time dateTime={publishDate}>{publishDate}</time>
        {this.getBody(body, theme)}
      </article>
    );
  }
}

export default themeable(Feature);
