import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Themeable } from 'rethemeable';
import { GridList, GridTile } from 'material-ui/GridList';


@Themeable
export default class Features extends Component {

  static defaultProps = {
    src: '//https://cdn0.vox-cdn.com/images/verge/default-avatar.v9899025.gif',
  };

  featuresMarkup(features) {
    return features.getItems().map((feature) => {
      const image = feature.getImage();
      let mapped = null;
      if (image) {
        const formatted = image.getFormatted();
        mapped = (
          <Link to={feature.getSlug()}>
            <GridTile
              key={feature.getId()}
              title={feature.getTitle()}
              titlePosition="bottom"
              cols={feature.isFeatured() ? 2 : 1}
              rows={feature.isFeatured() ? 2 : 1}
            >
            <img src={formatted.src} alt={formatted.alt} />
          </GridTile>
          </Link>
        );
      }

      return mapped;
    });
  }

  render() {
    const { features } = this.props;
    return (
      <GridList
        cols={2}
        cellHeight={400}
        padding={1}
      >
        {this.featuresMarkup(features)}
      </GridList>
    );
  }
}
