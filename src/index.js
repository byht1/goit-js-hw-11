import galleryCard from './templares/gallery.hbs';
import ButtonPlusDataServer from './js/button';
import Server from './js/server';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const NewButtonPlusDataServer = new ButtonPlusDataServer();
const NewServer = new Server();

const ref = {
  form: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  section: document.querySelector('.gallery-secrion'),
  button: document.querySelector('.load-more'),
};

ref.form.addEventListener('submit', submitForm);
ref.button.addEventListener('click', addPhoto);

// GENERAPOT HTML
async function addPhoto() {
  NewServer.page += 1;
  await weDrawHtml();
  await window.scrollBy({ top: 550, behavior: 'smooth' });
  window.scroll;
}

async function generatorHtml() {
  ref.gallery.innerHTML = '';
  weDrawHtml();
  NewButtonPlusDataServer.buttonShow();
}

async function weDrawHtml() {
  const data = await NewServer.serverData();
  const hits = await data.hits;
  if (hits.length === 0) {
    Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    return;
  }
  const arr = await hits.map(galleryCard);
  ref.gallery.insertAdjacentHTML('beforeend', arr.join(''));
}

// SUBMIT FORMS

function submitForm() {
  event.preventDefault();
  const {
    elements: { searchQuery },
  } = event.currentTarget;
  NewServer.name = searchQuery.value;
  NewServer.page = 1;
  generatorHtml();
}
