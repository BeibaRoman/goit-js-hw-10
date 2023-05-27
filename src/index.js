import './css/styles.css';
import { refs } from './js/refs.js';
import { populateSelect } from './js/populate.js';
import { fetchBreeds } from './js/cat-api.js';
import { loadedBreeds, loadError } from './js/loading.js';
import { selectOption } from './js/selectOption.js';
const DEBOUNCE_DELAY = 300;

refs.serchInput.addEventListener('change', selectOption);

fetchBreeds()
  .then(res => {
    loadedBreeds();
    populateSelect(res);
  })
  .catch(loadError);
