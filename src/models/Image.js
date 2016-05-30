import Asset from './Asset';

class Image extends Asset {
  getFormatted() {
    return {
      src: this.url,
      width: this.width,
      height: this.height,
      alt: this.title,
      title: this.title,
    };
  }
}

export default Image;
