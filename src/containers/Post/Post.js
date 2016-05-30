import React, { PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import Post from 'models/Post';
import { loadPost } from 'redux/modules/posts';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

function postDecorator(ChildComponent) {
  function PostContainer(props) {
    const { _posts, params: { slug } } = props;

    if (_posts.length < 1) {
      return (<NotFoundPage />);
    }

    const matchedPost = _posts.find(post => post.slug === slug);
    return (<ChildComponent { ...props } post={new Post(matchedPost)} />);
  }

  PostContainer.propTypes = {
    _posts: PropTypes.array.isRequired,
    params: PropTypes.object.isRequired,
  };

  return asyncConnect([{
    promise: (props) => {
      const {
        store: {
          dispatch,
        },
        params: {
          slug,
        },
      } = props;
      return Promise.all([dispatch(loadPost(slug))]);
    },
  }])(connect(
    state => ({ _posts: state.posts })
  )(PostContainer));
}

export default postDecorator;
