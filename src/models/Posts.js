// @flow
import type { Post } from 'types/Post';

/**
 * A wrapper for a list of posts. Not used for much currently,
 * but may become practical in the future
 */
class Posts {
  items: Array<Post>;

  /**
   * @param {Array<Post>} posts=[] An array of post items
   */
  constructor(posts: Array<Post>): void {
    this.items = posts;
  }

  /**
   * @returns {Array<Post>}
   */
  getItems(): Array<Post> {
    return this.items;
  }
}

export default Posts;
