/* @flow */
import React, { Component, PropTypes } from 'react';
import { themeable } from 'rethemeable';
import { Image } from 'components';
import moment from 'moment';

@themeable
class Feature extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
    image: React.PropTypes.shape({
      src: React.PropTypes.string,
      alt: React.PropTypes.string,
    }),
    body: PropTypes.string.isRequired,
  };

  getImage(image: Object) {
    if (typeof image === 'object' && (image.src)) {
      return <Image src={image.src} alt={image.alt || ''} />;
    }

    return null;
  }

  getBody(body: string, theme: Object) {
    if (body) {
      return (
        <div
          className={theme.body}
          dangerouslySetInnerHTML={{ __html: body }}
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
      publishedDate,
    } = this.props;
    let imageMarkup;

    if (image) {
      imageMarkup = (
        <div className={theme.imageContainer}>
          {this.getImage(image, theme)}
        </div>
      );
    }

    const formattedPublishedDate = moment(publishedDate).format('MMMM Do, YYYY');
    return (
      <article>
        <div className={theme.content}>
          {imageMarkup}
          <h1
            className={theme.title}
          >
            {title}
          </h1>
          <time
            dateTime={publishedDate}
            className={theme.date}
          >
            {formattedPublishedDate}
          </time>
          {this.getBody(body, theme)}
        </div>
      </article>
    );
  }
}

export default Feature;
