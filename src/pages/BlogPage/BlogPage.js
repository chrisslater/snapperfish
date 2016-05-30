import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import postsContainer from 'containers/Posts/Posts';
import Posts from 'models/Posts';
import {
  Dimensions,
  PostsGrid,
  Menu,
  Layout,
} from 'components';

function BlogPage(props) {
  const { posts } = props;
  const title = 'Blog';

  return (
    <div>
      <Helmet title={title} />
      <Menu title={title} />
      <Layout>
        <Dimensions>
          <PostsGrid
            urlPrefix={'blog/'}
            posts={posts.getItems()}
          />
        </Dimensions>
      </Layout>
    </div>
  );
}

BlogPage.propTypes = {
  posts: PropTypes.instanceOf(Posts),
};

export default postsContainer(BlogPage);

