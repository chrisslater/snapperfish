import React, { Component } from 'react';
import config from '../../config';
import Helmet from 'react-helmet';
import Gallery from 'react-photo-gallery';


const PHOTOS = [
  {
    src: '/gallery/evilspirit.png',
    width: 384,
    height: 384,
    aspectRatio: 1,
    lightboxImage: {
      src: '/gallery/evilspirit.png'
    }
  },
  {
    src: '/gallery/wonderer.png',
    width: 384,
    height: 384,
    aspectRatio: 1,
    lightboxImage: {
      src: '/gallery/wonderer.png'
    }
  },
  {
    src: '/gallery/one.jpg',
    width: 1920,
    height: 1080,
    aspectRatio: 1.78,
    lightboxImage: {
      src: '/gallery/one.jpg'
    }
  },

  {
    src: '/gallery/two.jpg',
    width: 1920,
    height: 1080,
    aspectRatio: 1.78,
    lightboxImage: {
      src: '/gallery/two.jpg'
    }
  },

  {
    src: '/gallery/three.jpg',
    width: 1920,
    height: 900,
    aspectRatio: 2.13,
    lightboxImage: {
      src: '/gallery/three.jpg'
    }
  },

  {
    src: '/gallery/four.jpg',
    width: 1920,
    height: 1080,
    aspectRatio: 1.78,
    lightboxImage: {
      src: '/gallery/four.jpg'
    }
  },

  {
    src: '/gallery/five.jpg',
    width: 2560,
    height: 1600,
    aspectRatio: 1.6,
    lightboxImage: {
      src: '/gallery/five.jpg'
    }
  },

  {
    src: '/gallery/six.jpg',
    width: 1920,
    height: 1080,
    aspectRatio: 1.78,
    lightboxImage: {
      src: '/gallery/six.jpg'
    }
  },

  {
    src: '/gallery/seven.jpg',
    width: 1920,
    height: 1080,
    aspectRatio: 1.78,
    lightboxImage: {
      src: '/gallery/seven.jpg'
    }
  },

];

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.masthead}>
          <div className="container">
            <h1>{config.app.title}</h1>

            <h2>{config.app.description}</h2>
          </div>
        </div>
        <Gallery photos={PHOTOS} />
      </div>
    );
  }
}
