class Asset {
  constructor(props: Object) {
    Object.assign(this, props);
  }

  getId() {
    return this.id;
  }
}

export default Asset;
