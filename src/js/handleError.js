import Notiflix from 'notiflix';

export function showError(message = 'Сталася помилка!') {
  Notiflix.Notify.failure(message);
}
