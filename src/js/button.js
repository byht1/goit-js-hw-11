// import Server from './server';

// const NewServer = new Server();
const button = document.querySelector('.load-more');

button.addEventListener('click', () => {});

export default class ButtonPlusDataServer {
  buttonShow() {
    button.classList.toggle('visually-hidden');
  }
}
