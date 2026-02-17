export function populateSelect(breeds, selectEl) {
  selectEl.innerHTML = '';

  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = 'Оберіть породу';
  placeholder.disabled = true;
  placeholder.selected = true;

  const options = breeds.map(({ id, name }) => {
    const option = document.createElement('option');
    option.value = id;
    option.textContent = name;
    return option;
  });

  selectEl.append(placeholder, ...options);
}

export function populateSelectOption(catData, container) {
  container.innerHTML = '';

  const cat = catData?.[0];

  if (!cat?.breeds?.length) {
    const message = document.createElement('p');
    message.textContent = 'Немає інформації про породу';
    container.append(message);
    return;
  }

  const { name, description, temperament } = cat.breeds[0];
  const imageUrl = cat.url;

  const card = document.createElement('div');
  card.classList.add('cat-card');

  const img = document.createElement('img');
  img.classList.add('cat-card__img');
  img.src = imageUrl;
  img.alt = name;

  const content = document.createElement('div');
  content.classList.add('cat-card__content');

  const title = document.createElement('h2');
  title.classList.add('cat-card__title');
  title.textContent = name;

  const desc = document.createElement('p');
  desc.classList.add('cat-card__description');
  desc.textContent = description;

  const temperamentEl = document.createElement('p');
  temperamentEl.classList.add('cat-card__temperament');

  const strong = document.createElement('strong');
  strong.textContent = 'Temperament: ';

  temperamentEl.append(strong, temperament);

  content.append(title, desc, temperamentEl);
  card.append(img, content);

  container.append(card);
}
