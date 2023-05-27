import { refs } from './refs.js';

export function populateCatInfo({ url, breed }) {
  refs.catImg.src = `${url}`;
  refs.breedTitle.textContent = `${breed.name}`;
  refs.breedDescription.textContent = `${breed.description}`;
  refs.breedTemtText.insertAdjacentHTML('beforeend', `${breed.temperament}`);
  refs.infoConteiner.classList.remove('is-hidden');
}

export function populateSelect(breeds) {
  const options = breeds
    .map(({ id, name }) => {
      return `<option value="${id}">${name}</option>`;
    })
    .join(' ');
  refs.serchInput.insertAdjacentHTML('beforeend', options);
}
