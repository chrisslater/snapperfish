import {
  App,
  Button,
  FeaturesGrid,
  Image,
} from 'components';

require('./global.scss');

import AppTheme from './App/App.scss';
import FeaturesGridTheme from './FeaturesGrid/FeaturesGrid.scss';
import ButtonTheme from './Button/Button.scss';
import ImageTheme from './Image/Image.scss';

const theme = {
  [App.theme]: AppTheme,
  [FeaturesGrid.theme]: FeaturesGridTheme,
  [Button.theme]: ButtonTheme,
  [Image.theme]: ImageTheme,
};

export default theme;
