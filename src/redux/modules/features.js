/* @flow */
const LOAD = 'features/LOAD';
const LOAD_SUCCESS = 'features/LOAD_SUCCESS';
const LOAD_FAIL = 'features/LOAD_FAIL';
const initialState = {
  isLoaded: false
};

class Feature {
  constructor(props: Object) {
    Object.assign(this, props);
  }
}

class Features {
  constructor(features = []) {
    this.items = features;
  }
}

export function mapFeature(feature: Object): Feature {
  const {
    fields: {
      photo: image
    },
    sys: {
      id: id
    }
  } = feature;

  const props = {};

  props.id = id;

  if (image) {
    const {
      sys: {
        id: imageId,
      }
    } = image;

    props.image = { id: imageId };
  }

  return new Feature(props);
}

export function mapFeatures(features: Array<Object>): Features {
  console.log(features[0]);
  return new Features(features.map(feature => mapFeature(feature)));
}

export default function reducer(state: Object = initialState, action: Object = {}): Object {
  switch (action.type) {
    case LOAD_SUCCESS:
      return mapFeatures(action.result.items);
    default:
      return state;
  }
}

export function isLoaded(globalState: Object): boolean {
  if (globalState.features && globalState.features instanceof Features) {
    return true;
  }

  return false;
}

export function load(id: string): Object {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => {
      return client.get('entries', {
        content_type: id,
      });
    }
  };
}
