import {
  App,
  LayoutContainer,
  Footer,
  Hero,
  Button,
  FeaturesGrid,
  Menu,
  Image,
  Profile,
} from 'components';
import { _Feature as Feature } from 'components/Feature/Feature';
import { _BusinessCard as BusinessCard } from 'components/BusinessCard/BusinessCard';
import AppTheme from './App/App.scss';
import LayoutContainerTheme from './LayoutContainer/LayoutContainer.scss';
import FooterTheme from './Footer/Footer.scss';
import FeaturesGridTheme from './FeaturesGrid/FeaturesGrid.scss';
import FeatureTheme from './Feature/Feature.scss';
import ButtonTheme from './Button/Button.scss';
import ImageTheme from './Image/Image.scss';
import HeroTheme from './Hero/Hero.scss';
import MenuTheme from './Menu/Menu.scss';
import ProfileTheme from './Profile/Profile.scss';
import BusinessCardTheme from './BusinessCard/BusinessCard.scss';

require('./global.scss');
require('./typography.scss');

console.log(BusinessCard, BusinessCardTheme);

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
  [Profile.theme]: ProfileTheme,
  [BusinessCard.theme]: BusinessCardTheme,
};

export default theme;
