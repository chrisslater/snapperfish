// @flow
import { Post as PostType } from 'types/Post';

/**
 * A wrapper for a list of posts. Not used for much currently,
 * but may become practical in the future
 */
class Posts {
  items: Array<PostType>;

  /**
   * @param {Array<Post>} posts=[] An array of post items
   */
  constructor(posts: Array<PostType> = []): void {
    this.items = posts;
  }

  /**
   * @returns {Array<Post>}
   */
  getItems(): Array<PostType> {
    return this.items;
  }
}

export default Posts;
