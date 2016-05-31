import {
  App,
  Layout,
  Footer,
  Hero,
  Button,
  PostsGrid,
  Menu,
  Image,
  Profile,
  BusinessCard,
  //Skills,
  Post,
  Timeline,
  TimelineSingle,
} from 'components';
import { _Skills as Skills } from 'components/Skills/Skills';

import AppTheme from './App/App.less';
import LayoutTheme from './Layout/Layout.css';
import FooterTheme from './Footer/Footer.css';
import PostsGridTheme from './PostsGrid/PostsGrid.css';
import PostTheme from './Post/Post.css';
import ButtonTheme from './Button/Button.css';
import ImageTheme from './Image/Image.css';
import HeroTheme from './Hero/Hero.css';
import MenuTheme from './Menu/Menu.css';
import ProfileTheme from './Profile/Profile.css';
import BusinessCardTheme from './BusinessCard/BusinessCard.css';
import SkillsTheme from './Skills/Skills.css';
import TimelineTheme from './Timeline/Timeline.css';
import TimelineSingleTheme from './TimelineSingle/TimelineSingle.css';

require('./global.css');

const theme = {
  [App.theme]: AppTheme,
  [Layout.theme]: LayoutTheme,
  [Hero.theme]: HeroTheme,
  [Footer.theme]: FooterTheme,
  [PostsGrid.theme]: PostsGridTheme,
  [Post.theme]: PostTheme,
  [Button.theme]: ButtonTheme,
  [Image.theme]: ImageTheme,
  [Menu.theme]: MenuTheme,
  [Profile.theme]: ProfileTheme,
  [BusinessCard.theme]: BusinessCardTheme,
  [Skills.theme]: SkillsTheme,
  [Timeline.theme]: TimelineTheme,
  [TimelineSingle.theme]: TimelineSingleTheme,

};

export default theme;
