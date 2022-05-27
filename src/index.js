const axios = require('axios').default;

const KEY = '27696638-26ff957efade4726366145eb0';
const name = 'cat';
const URL = `https://pixabay.com/api/?key=${KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true`;

axios.get(URL);
// axios.get(
//   'https://pixabay.com/api/?key=27696638-26ff957efade4726366145eb0&q=yellow+flowers&image_type=photo',
// );
bay()
  .then(x => x.data)
  .then(x => x.hits)
  .then(console.log);

async function bay() {
  try {
    const z = await axios.get(URL);
    // const j = await z.json();
    return z;
  } catch (error) {}
}
