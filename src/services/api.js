import axios from 'axios';

const API_KEY = '39074092-1de595f7748cd839e3af14b59';
const BASE_URL = 'https://pixabay.com/api/';

async function getImg(value, page) {
  axios.defaults.params = {
    key: API_KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page: page,
  };
  return await axios.get(BASE_URL);
}

export { getImg };
