import {
  Button,
  FeaturesGrid,
  Image,
} from 'components';

import FeaturesGridTheme from './FeaturesGrid/FeaturesGrid.scss';
import ButtonTheme from './Button/Button.scss';
import ImageTheme from './Image/Image.scss';

const theme = {
  [FeaturesGrid.theme]: FeaturesGridTheme,
  [Button.theme]: ButtonTheme,
  [Image.theme]: ImageTheme,
};

export default theme;
