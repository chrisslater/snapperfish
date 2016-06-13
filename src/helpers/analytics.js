import ReactGA from 'react-ga';
import env from 'env';

if (__CLIENT__ && env.GOOGLE_ANALYTICS) {
  ReactGA.initialize(env.GOOGLE_ANALYTICS);
}

export default ReactGA;
