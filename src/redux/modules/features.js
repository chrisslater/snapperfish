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

class Image {
  constructor(props: Object) {
    Object.assign(this, props);
  }
}

type ImageRaw = {
  fields: {
    file: {
      contentType: string;
      url: string;
      details: {
        image: {
          height: number;
          width: number;
        };
        size: number;
      };
    };
    title: string;
  };
  sys: {
    id: string;
  };
};

function mapImage(image: ImageRaw) {
  const {
    fields: {
      file: {
        contentType: mime,
        url: url,
        details: {
          image: {
            height: height,
            width: width,
            },
          size: size,
        },
      },
      title: title,
    },
    sys: {
      id: imageId,
    },
  } = image;

  return new Image({
    id: imageId,
    mime: mime,
    url: url,
    width: width,
    height: height,
    size: size,
    title: title,
  });
}

export function mapFeature(feature: Object): Feature {
  const {
    fields: {
      photo: image
      },
    sys: {
      id: featureId
      }
    } = feature;
  const props = {};

  props.id = featureId;

  if (image) {
    props.image = mapImage(image);
  }

  return new Feature(props);
}

export function mapFeatures(features: Array<Object>): Array<Feature> {
  return features.map(feature => mapFeature(feature));
}

export default function reducer(state: Object = initialState, action: Object = {}): Object {
  switch (action.type) {
    case LOAD_SUCCESS:
      return Object.assign({
        isLoaded: true,
        items: mapFeatures(action.result.items)
      });

    default:
      return state;
  }
}

export function isLoaded(globalState: Object): boolean {
  return globalState.features && globalState.features.isLoaded;
}

export function load(id: string): Object {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => {
      return client.getEntries({
        content_type: id,
      });
    }
  };
}
