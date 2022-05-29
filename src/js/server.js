// import ButtonPlusDataServer from './button';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const NewButtonPlusDataServer = new ButtonPlusDataServer();
const axios = require('axios').default;
const KEY = '27696638-26ff957efade4726366145eb0';
const URL = 'https://pixabay.com/api/';

export default class Server {
  constructor() {
    this.name = '';
    this.page = 1;
  }
  async serverData() {
    const serverDataURL = `${URL}?key=${KEY}&q=${this.name}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=20`;
    try {
      const server = await axios.get(serverDataURL);
      const data = await server.data;
      return data;
    } catch (error) {
      Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    }
  }
}
