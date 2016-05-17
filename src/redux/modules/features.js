/* @flow */
const LOAD = 'features/LOAD';
const LOAD_SUCCESS = 'features/LOAD_SUCCESS';
const LOAD_FAIL = 'features/LOAD_FAIL';

type FeatureRaw = {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    coverImage: {
      sys: {
        id: string;
      };
    };
    body: string;
    publishDate: string;
    author: {
      sys: {
        id: string;
      };
    };
  };
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
    fields: {
      coverImage: {
        sys: {
          id: imageId,
        },
      },
      title,
      slug,
      body,
      publishDate,
    },
    sys: {
      id: id,
    },
  } = feature;

  const props = {
    title,
    slug,
    id,
    body,
    publishDate,
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
      return mapFeatures(action.result.items);
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

export function load(): Object {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('entries', {
      params: { content_type: 'feature' },
    }),
  };
}

export function loadFeature(slug: string): Object {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('entries', {
      params: {
        content_type: 'feature',
        'fields.slug': slug,
      },
    }),
  };
}
