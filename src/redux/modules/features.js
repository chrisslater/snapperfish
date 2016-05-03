/* @flow */
const LOAD = 'features/LOAD';
const LOAD_SUCCESS = 'features/LOAD_SUCCESS';
const LOAD_FAIL = 'features/LOAD_FAIL';

export function mapFeature(feature: Object): Object {
  const {
    fields: {
      coverImage: image,
      title,
      slug,
      body,
    },
    sys: {
      id: id,
    },
  } = feature;

  const props = { title, slug, id, body };

  if (image) {
    const {
      sys: {
        id: imageId,
      },
    } = image;

    props.image = { id: imageId };
  }

  return props;
}

export function mapFeatures(features: Array<Object>): Array {
  return features.map(feature => mapFeature(feature));
}

export default function reducer(state: Array = [], action: Object = {}) {
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

export function loadFeature(slug): Object {
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
