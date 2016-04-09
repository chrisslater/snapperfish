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

function processFeatures(features: Array) {
  return features.map(({
    fields: {
      photo: _image
    },
    sys: {
      id: featureId
    }
  }) => {
    const props = {};

    if (_image) {
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
        }
      } = _image;

      props.image = new Image({
        id: imageId,
        mime: mime,
        url: url,
        width: width,
        height: height,
        size: size,
        title: title,
      });
    }

    props.id = featureId;

    return new Feature(props);
  });
}

export default function reducer(state: Object = initialState, action: Object = {}): Object {
  switch (action.type) {
    case LOAD_SUCCESS:
      return Object.assign({
        isLoaded: true,
        items: processFeatures(action.result.items)
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
