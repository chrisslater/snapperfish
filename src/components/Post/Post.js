/* @flow */
import React, { Component, PropTypes } from 'react';
import { themeable } from 'rethemeable';
import { Image } from 'components';
import moment from 'moment';
import themeInjector from 'containers/themeInjector';

/**
 * Post Component
 */
@themeInjector
class Post extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
    image: React.PropTypes.shape({
      src: React.PropTypes.string,
      alt: React.PropTypes.string,
    }),
    body: PropTypes.string.isRequired,
  };

  /**
   * Create image Component from image object
   * @param {Object} image
   * @returns {Image}
   */
  getImage(image: Object): typeof Image {
    return <Image src={image.src} alt={image.alt} />;
  }

  /**
   * Format body section
   * @param {string} body HTML markup as string
   * @param {Object} [theme={}]
   * @returns {Element}
   */
  getBody(body: string, theme: Object = {}) {
    return (
      <div
        className={theme.body}
        dangerouslySetInnerHTML={{ __html: body }}
      />
    );
  }

  theme: Object;

  /**
   * @param {Object} props
   * @param {string} props.title
   * @param {Object} props.image
   * @param {string} props.image.src
   * @param {string} props.image.alt
   * @param {Date} props.publisedDate
   * @returns {Element}
   */
  render() {
    const {
      theme,
      title,
      image,
      body,
      publishedDate,
    } = this.props;

    let imageMarkup;
    let bodyMarkup;

    if (image && image.src) {
      imageMarkup = (
        <div className={theme.imageContainer}>
          {this.getImage(image, theme)}
        </div>
      );
    }

    if (body) {
      bodyMarkup = this.getBody(body, theme);
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
          {bodyMarkup}
        </div>
      </article>
    );
  }
}

export default Post;
