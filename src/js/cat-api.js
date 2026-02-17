import axios from 'axios';

const API_KEY =
  'live_isqFIOupRMSeIKrkgs9v6n9AunTy2UZV2EeKEwSeo9aoab0YPD2RGLn1oIb09pCS';

const BASE_URL = 'https://api.thecatapi.com/v1';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-api-key': API_KEY,
  },
});

export function fetchBreeds() {
  return api.get('/breeds').then(response => response.data);
}

export function fetchCatByBreed(breedId) {
  return api
    .get('/images/search', {
      params: {
        breed_ids: breedId,
      },
    })
    .then(response => response.data);
}
