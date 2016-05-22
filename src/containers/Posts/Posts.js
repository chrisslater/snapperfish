import React, { PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import Posts from 'models/Posts';
import Post from 'models/Post';
import { loadPosts } from 'redux/modules/posts';

function postsDecorator(ChildComponent) {
  const PostsContainer = props => {
    const { _posts } = props;
    const posts = new Posts(
      _posts.map(postProps => new Post(postProps))
    );
    return (<ChildComponent {...props} posts={posts} />);
  };

  PostsContainer.propTypes = {
    _posts: PropTypes.array,
  };

  return asyncConnect([{
    promise: ({ store: { dispatch } }) => Promise.all([dispatch(loadPosts())]),
  }])(connect(
    state => ({ _posts: state.posts })
  )(PostsContainer));
}

export default postsDecorator;
