import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { GridList, GridTile } from 'material-ui/GridList';
import Features from 'models/Features';
import { themeable } from 'rethemeable';

class FeaturesGrid extends Component {
  static defaultProps = {
    src: '//https://cdn0.vox-cdn.com/images/verge/default-avatar.v9899025.gif',
  };

  static propTypes = {
    features: PropTypes.instanceOf(Features),
    containerWidth: PropTypes.number,
  };

  featuresMarkup(features, theme) {
    return features.getItems().map((feature) => {
      const image = feature.getImage();
      let mapped = null;
      if (image) {
        const formatted = image.getFormatted();
        mapped = (
          <Link key={feature.getId()} to={feature.getSlug()}>
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
            >
              {/* <Image {...formatted} /> */}
            </GridTile>
          </Link>
        );
      }

      return mapped;
    });
  }

  render() {
    const { features, containerWidth } = this.props;
    const theme = this.theme;

    let colWidth = 1;

    if (containerWidth > 700) {
      colWidth = 2;
    }

    return (
      <GridList
        cols={colWidth}
        cellHeight={300}
        padding={1}
      >
        {this.featuresMarkup(features, theme)}
      </GridList>
    );
  }
}

export default themeable(FeaturesGrid);
