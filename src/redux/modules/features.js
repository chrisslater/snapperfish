/* @flow */
const LOAD = 'features/LOAD';
const LOAD_SUCCESS = 'features/LOAD_SUCCESS';
const LOAD_SINGLE_SUCCESS = 'features/LOAD_SINGLE_SUCCESS';
const LOAD_FAIL = 'features/LOAD_FAIL';

//type FeatureRaw = {
//  sys: {
//    id: string;
//  };
//  fields: {
//    title: string;
//    slug: string;
//    coverImage: {
//      sys: {
//        id: string;
//      };
//    };
//    body: string;
//    publishDate: string;
//    author: {
//      sys: {
//        id: string;
//      };
//    };
//  };
//};

type FeatureRaw = {
  _id: string;
  title: string;
  slug: string;
  image: {
    public_id: string;
  };
  content: {
    brief: {
      html: string;
      md: string;
    }
  },
  publishedDate: string;
};

type Feature = {
  title: string;
  slug: string;
  id: string;
  body: string;
  publishDate: string;
  image: {
    id: string;
  };
};

export function mapFeature(feature: FeatureRaw): Feature {

  const {
    _id: id,
    title,
    slug,
    image: {
      public_id: imageId,
    },
    content: {
      brief: {
        md: body,
      }
    },
    publishedDate,
  } = feature;

  const props = {
    title,
    slug,
    id,
    body,
    publishDate: publishedDate,
    image: {
      id: imageId,
    },
  };

  return props;
}

export function mapFeatures(features: Array<Object>): Array<Object> {
  return features.map(feature => mapFeature(feature));
}

export default function reducer(state: Array<Object> = [], action: Object = {}): Array<Object> {
  switch (action.type) {
    case LOAD_SUCCESS:
      return mapFeatures(action.result.results);
    case LOAD_SINGLE_SUCCESS:
      return [mapFeature(action.result.post)];
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

//export function load(): Object {
//  return {
//    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
//    promise: (client) => client.get('entries', {
//      params: { content_type: 'feature' },
//    }),
//  };
//}

export function load(): Object {
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
