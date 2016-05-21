// @flow
import type { PostRaw, Post } from 'types/Post';
const LOAD = 'posts/LOAD';
const LOAD_SUCCESS = 'posts/LOAD_SUCCESS';
const LOAD_SINGLE_SUCCESS = 'posts/LOAD_SINGLE_SUCCESS';
const LOAD_FAIL = 'posts/LOAD_FAIL';

export function mapPost(post: PostRaw): Post {
  const {
    _id: id,
    title,
    slug,
    image,
    content: {
      brief: {
        html: body,
      },
    },
    publishedDate,
  } = post;

  const props = {
    title,
    slug,
    id,
    body,
    publishedDate,
    image,
  };

  return props;
}

export function mapPosts(posts: Array<Object>): Array<Object> {
  return posts.map(post => mapPost(post));
}

export default function reducer(state: Array<Object> = [], action: Object = {}): Array<Object> {
  switch (action.type) {
    case LOAD_SUCCESS:
      return mapPosts(action.result.results);
    case LOAD_SINGLE_SUCCESS:
      return [mapPost(action.result.post)];
    default:
      return state;
  }
}

export function isLoaded(globalState: Object): boolean {
  if (globalState.features) {
    return true;
  }

  return false;
}

export function loadFeatures(): Object {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('posts'),
  };
}

export function loadFeature(slug: string): Object {
  return {
    types: [LOAD, LOAD_SINGLE_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get(`posts/${slug}`),
  };
}
