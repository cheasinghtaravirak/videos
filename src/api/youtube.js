import axios from 'axios';

const KEY = 'AIzaSyApqEPYF0BxYn4SEpVlDvvLOPiNiljBbT8';
// custom client request
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY,
    part: 'snippet',
    maxResults: '5',
    type: ''
  }
});
