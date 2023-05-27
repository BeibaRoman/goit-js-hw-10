import { refs } from './refs.js';
import { fetchBreed, fetchCatByBreed } from './cat-api.js';
import { populateCatInfo } from './populate.js';
import { loadError, loaded } from './loading.js';

export function selectOption(e) {
  const selectValue = e.currentTarget.value;

  if (selectValue === '') {
    loadError();
    refs.infoConteiner.classList.add('is-hidden');
    return;
  }

  fetchCatByBreed(selectValue)
    .then(res => {
      const url = res[0].url;
      const breed = res[0].breeds[0];
      populateCatInfo({ url, breed });
      loaded();
    })
    .catch(loadError);
}
