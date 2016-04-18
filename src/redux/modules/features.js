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

//class Image {
//  constructor(props: Object) {
//    Object.assign(this, props);
//  }
//}
//
//type ImageRaw = {
//  fields: {
//    file: {
//      contentType: string;
//      url: string;
//      details: {
//        image: {
//          height: number;
//          width: number;
//        };
//        size: number;
//      };
//    };
//    title: string;
//  };
//  sys: {
//    id: string;
//  };
//};

//function mapImage(image) {
//  const {
//    fields: {
//      file: {
//        contentType: mime,
//        url: src,
//        details: {
//          image: {
//            height: height,
//            width: width,
//            },
//          size: size,
//        },
//      },
//      title: title,
//    },
//    sys: {
//      id: imageId,
//    },
//  } = image;
//
//  //const {
//  //  alt: alt,
//  //  dimensions: {
//  //    width: width,
//  //    height: height,
//  //  },
//  //  url: src,
//  //} = image;
//
//  return new Image({
//    id: imageId,
//    mime: mime,
//    src: src,
//    width: width,
//    height: height,
//    size: size,
//    alt: title,
//    title: title,
//  });
//}

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
