import type { Image } from './Image';
export type FeatureRaw = {
  _id: string;
  title: string;
  slug: string;
  image: Image;
  content: {
    brief: {
      html: string;
      md: string;
    }
  },
  publishedDate: string;
};
export type Feature = {
  title: string,
  slug: string,
  id: string,
  body: string,
  publishedDate: string,
  image: Image,
};