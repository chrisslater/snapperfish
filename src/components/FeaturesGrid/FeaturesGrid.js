import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { GridList, GridTile } from 'material-ui/GridList';
import Features from 'models/Features';
import { themeable } from 'rethemeable';

class FeaturesGrid extends Component {
  static defaultProps = {
    urlPrefix: '',
    src: '//https://cdn0.vox-cdn.com/images/verge/default-avatar.v9899025.gif',
  };

  static propTypes = {
    urlPrefix: PropTypes.string,
    features: PropTypes.instanceOf(Features),
    containerWidth: PropTypes.number,
  };

  featuresMarkup(features, urlPrefix, theme) {
    return features.getItems().map((feature) => {
      const image = feature.getImage();
      let mapped = null;
      if (image) {
        const formatted = image.getFormatted();
        mapped = (
          <Link
            key={feature.getId()}
            to={`${urlPrefix}${feature.getSlug()}`}
          >
            <GridTile
              key={feature.getId()}
              title={feature.getTitle()}
              titlePosition="bottom"
              cols={feature.isFeatured() ? 2 : 1}
              rows={feature.isFeatured() ? 2 : 1}
              className={theme.background}
              style={{
                backgroundImage: `url(${formatted.src})`,
              }}
            />

          </Link>
        );
      }

      return mapped;
    });
  }

  render() {
    const {
      urlPrefix,
      features,
      containerWidth,
    } = this.props;
    const theme = this.theme;

    let colWidth = 1;

    if (containerWidth > 700) {
      // @TODO reset this colWidth = 2;
    }

    return (
      <GridList
        cols={colWidth}
        cellHeight={400}
        padding={10}
      >
        {this.featuresMarkup(features, urlPrefix, theme)}
      </GridList>
    );
  }
}

export default themeable(FeaturesGrid);
