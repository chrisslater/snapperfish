/* @flow */
import React, { Component, PropTypes } from 'react';
import { themeable } from 'rethemeable';
import { markdown } from 'markdown';
import { Image } from 'components';
import moment from 'moment';
import muiThemeable from 'material-ui/styles/muiThemeable';

@themeable
class Feature extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired,
    image: React.PropTypes.shape({
      src: React.PropTypes.string,
      alt: React.PropTypes.string,
    }),
    body: PropTypes.string,
    muiTheme: PropTypes.object,
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
      muiTheme,
    } = this.props;

    const formattedPublishDate = moment(publishDate).format('MMMM Do, YYYY');
    return (
      <article>

        <div className={theme.content}>
          <div className={theme.imageContainer}>
            {this.getImage(image, theme)}
          </div>
          <h1
            style={{
              color: muiTheme.palette.primary1Color,
            }}
          >
            {title}
          </h1>
          <time
            dateTime={publishDate}
          >
            {formattedPublishDate}
            <i
              className={theme.date}
              style={{
                borderLeft: `4em solid ${muiTheme.palette.primary1Color}`,
              }}
            />
          </time>
          {this.getBody(body, theme)}
        </div>
      </article>
    );
  }
}


export const _Feature = Feature;
export default muiThemeable()(Feature);
