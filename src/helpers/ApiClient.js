import superagent from 'superagent';
import config from '../config';
import contentful from 'contentful';
import env from 'env';

const contentfulApi = contentful.createClient({
  space: env.CONTENTFUL_SPACE,
  accessToken: env.CONTENTFUL_ACCESS_TOKEN,
});

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  if (__SERVER__) {
    // Prepend host and port of the API server to the path.
    return 'https://cdn.contentful.com/spaces/' + env.CONTENTFUL_SPACE + adjustedPath;
    //return 'http://' + config.apiHost + ':' + config.apiPort + adjustedPath;
  }
  // Prepend `/api` to relative URL, to proxy to API server.
  return '/api' + adjustedPath;
}

/*
 * This silly underscore is here to avoid a mysterious "ReferenceError: ApiClient is not defined" error.
 * See Issue #14. https://github.com/erikras/react-redux-universal-hot-example/issues/14
 *
 * Remove it at your own risk.
 */
class _ApiClient {
  constructor(req) {
    methods.forEach((method) =>
      this[method] = (path, { params = {}, data } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](formatUrl(path));

        if (__SERVER__) {
          params.access_token = env.CONTENTFUL_ACCESS_TOKEN;
        }

        if (__SERVER__ && req.get('cookie')) {
          request.set('cookie', req.get('cookie'));
        }

        request.query(params);

        if (data) {
          request.send(data);
        }

        request.end((err, { body } = {}) => err ? reject(body || err) : resolve(body));
      }));

    Object.assign(this, contentfulApi);
  }
}

const ApiClient = _ApiClient;
export default ApiClient;
