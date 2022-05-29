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
};

ref.form.addEventListener('submit', submitForm);

// GENERAPOT HTML

async function generatorHtml() {
  const data = await NewServer.serverData();
  const hits = await data.hits;
  if (hits.length === 0) {
    Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    return;
  }
  const arr = await hits.map(galleryCard);

  ref.gallery.innerHTML = ``;
  ref.gallery.insertAdjacentHTML('afterbegin', arr.join(''));
  NewButtonPlusDataServer.buttonShow();
}

// SUBMIT FORMS

function submitForm() {
  event.preventDefault();
  const {
    elements: { searchQuery },
  } = event.currentTarget;
  NewServer.name = searchQuery.value;
  generatorHtml();
}
