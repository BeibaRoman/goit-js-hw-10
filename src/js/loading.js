import { refs } from './refs.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  width: '450px',
});

export function loadingBreeds() {
  loading();
  refs.serchInput.classList.add('is-hidden');
}

export function loadedBreeds() {
  loaded();
  refs.serchInput.classList.remove('is-hidden');
}

export function loading() {
  refs.loaderText.classList.remove('is-hidden');
}

export function loaded() {
  refs.loaderText.classList.add('is-hidden');
}

export function loadError(e) {
  Notify.failure('Oops! Something went wrong! Try reloading the page!');
  loaded();
}
