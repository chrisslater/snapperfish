import {
  App,
  Layout,
  Footer,
  Hero,
  Button,
  FeaturesGrid,
  Menu,
  Image,
  Profile,
  BusinessCard,
  Skills,
  Feature,
} from 'components';
import AppTheme from './App/App.scss';
import LayoutTheme from './Layout/Layout.scss';
import FooterTheme from './Footer/Footer.scss';
import FeaturesGridTheme from './FeaturesGrid/FeaturesGrid.scss';
import FeatureTheme from './Feature/Feature.scss';
import ButtonTheme from './Button/Button.scss';
import ImageTheme from './Image/Image.scss';
import HeroTheme from './Hero/Hero.scss';
import MenuTheme from './Menu/Menu.scss';
import ProfileTheme from './Profile/Profile.scss';
import BusinessCardTheme from './BusinessCard/BusinessCard.scss';
import SkillsTheme from './Skills/Skills.less';

require('./global.scss');
require('./typography.scss');

const theme = {
  [App.theme]: AppTheme,
  [Layout.theme]: LayoutTheme,
  [Hero.theme]: HeroTheme,
  [Footer.theme]: FooterTheme,
  [FeaturesGrid.theme]: FeaturesGridTheme,
  [Feature.theme]: FeatureTheme,
  [Button.theme]: ButtonTheme,
  [Image.theme]: ImageTheme,
  [Menu.theme]: MenuTheme,
  [Profile.theme]: ProfileTheme,
  [BusinessCard.theme]: BusinessCardTheme,
  [Skills.theme]: SkillsTheme,
};

export default theme;
