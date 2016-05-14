import {
  App,
  LayoutContainer,
  Footer,
  Hero,
  Button,
  FeaturesGrid,
  Menu,
  Image,
} from 'components';
import { _Feature as Feature } from 'components/Feature/Feature';
import AppTheme from './App/App.scss';
import LayoutContainerTheme from './LayoutContainer/LayoutContainer.scss';
import FooterTheme from './Footer/Footer.scss';
import FeaturesGridTheme from './FeaturesGrid/FeaturesGrid.scss';
import FeatureTheme from './Feature/Feature.scss';
import ButtonTheme from './Button/Button.scss';
import ImageTheme from './Image/Image.scss';
import HeroTheme from './Hero/Hero.scss';
import MenuTheme from './Menu/Menu.scss';

require('./global.scss');
require('./typography.scss');

const theme = {
  [App.theme]: AppTheme,
  [LayoutContainer.theme]: LayoutContainerTheme,
  [Hero.theme]: HeroTheme,
  [Footer.theme]: FooterTheme,
  [FeaturesGrid.theme]: FeaturesGridTheme,
  [Feature.theme]: FeatureTheme,
  [Button.theme]: ButtonTheme,
  [Image.theme]: ImageTheme,
  [Menu.theme]: MenuTheme,
};

export default theme;
