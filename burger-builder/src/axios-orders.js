import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://reactburger-354c6.firebaseio.com/'
});



export default instance;