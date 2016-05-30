import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { GridList, GridTile } from 'material-ui/GridList';
import Post from 'models/Post';
import { themeable } from 'rethemeable';

class PostsGrid extends Component {
  static defaultProps = {
    urlPrefix: '',
    src: '//https://cdn0.vox-cdn.com/images/verge/default-avatar.v9899025.gif',
  };

  static propTypes = {
    urlPrefix: PropTypes.string,
    posts: PropTypes.arrayOf(Post),
    containerWidth: PropTypes.number,
  };

  postsMarkup(posts, urlPrefix, theme) {
    return posts.map(post => {
      const image = post.getImage();
      let mapped = null;
      if (image) {
        const formatted = image.getFormatted();
        mapped = (
          <Link
            key={post.getId()}
            to={`${urlPrefix}${post.getSlug()}`}
          >
            <GridTile
              key={post.getId()}
              title={post.getTitle()}
              titlePosition="bottom"
              cols={1}
              rows={1}
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
      posts,
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
        {this.postsMarkup(posts, urlPrefix, theme)}
      </GridList>
    );
  }
}

export default themeable(PostsGrid);
