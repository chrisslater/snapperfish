import Asset from './Asset';

class Image extends Asset {
  getFormatted() {
    return {
      src: this.file.url,
      width: this.file.details.image.width,
      height: this.file.details.image.height,
      alt: this.title,
      title: this.title,
    };
  }
}

export default Image;