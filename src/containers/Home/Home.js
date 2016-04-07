import React, { Component } from 'react';
import config from '../../config';
import Helmet from 'react-helmet';

export default class Home extends Component {

  render() {
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
      }
    ];

    return (
      <div>
        <Helmet title="Home"/>
        <div>
          <div className="container">
            <h1>{config.app.title}</h1>
            <h2>{config.app.description}</h2>
          </div>
        </div>
          {PHOTOS.map((photo, index) => {
            return (
              <a key={'image_' + index}>
                <img src={photo.src} width={photo.width} height={photo.height}/>
              </a>
            );
          })}
      </div>
    );
  }
}
