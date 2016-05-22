export type PostRaw = {
  _id: string;
  title: string;
  slug: string;
  image: {
    public_id: string;
    url: string;
    height: number;
    width: number;
    format: string;
  };
  content: {
    brief: {
      html: string;
      md: string;
    }
  },
  publishedDate: string;
};
export type Post = {
  id: string;
  slug: string;
  title: string;
  body: string;
  publishedDate: string;
  /*
   * @TODO: Figure out why I can't use image type directly
   * instead of explicitly declaring each property
   */
  image: {
    public_id: string;
    url: string;
    height: number;
    width: number;
    format: string;
  };
};
