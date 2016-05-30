import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { postContainer } from 'containers';
import Post from 'models/Post';

import {
  Post as PostComponent,
  Menu,
} from 'components';

function PostPage(props) {
  const { post } = props;
  const formatted = {};

  formatted.image = post.getImage().getFormatted();
  formatted.title = post.getTitle();
  formatted.body = post.getBody();
  formatted.publishedDate = post.getPublishedDate();

  return (
    <div>
      <Helmet title="Feature" />
      <Menu title={formatted.title} />
      <PostComponent {...formatted} />
    </div>
  );
}

PostPage.propTypes = {
  post: PropTypes.instanceOf(Post).isRequired,
};

export default postContainer(PostPage);
