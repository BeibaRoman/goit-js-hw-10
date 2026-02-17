export class Loader {
  constructor(refs) {
    this.refs = refs;
  }

  showLoading() {
    this.refs.classList.add('is-loading');
  }

  hideLoading() {
    this.refs.classList.remove('is-loading');
  }
}
