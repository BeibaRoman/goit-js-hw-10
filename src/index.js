import { refs } from './js/refs.js';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';
import { populateSelect, populateSelectOption } from './js/populate.js';
import { Loader } from './js/loader.js';
import { showError } from './js/handleError.js';
import { hide, show } from './js/select-visibility.js';

const loadMore = new Loader(refs.loaderNotify);

hide(refs.selectBreed);
hide(refs.containerInfo);
loadMore.showLoading();

refs.selectBreed.addEventListener('change', e => {
  hide(refs.containerInfo);
  loadMore.showLoading();

  fetchCatByBreed(e.target.value)
    .then(breeds => {
      show(refs.containerInfo);
      populateSelectOption(breeds, refs.containerInfo);
    })
    .catch(error => {
      showError(`Не вдалося завантажити дані: ${error?.message}`);
    })
    .finally(() => loadMore.hideLoading());
});

fetchBreeds()
  .then(breeds => {
    show(refs.selectBreed);
    populateSelect(breeds, refs.selectBreed);
  })
  .catch(error => {
    showError(`Не вдалося завантажити дані: ${error?.message}`);
  })
  .finally(() => loadMore.hideLoading());
