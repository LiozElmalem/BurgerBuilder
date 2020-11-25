import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-61eed.firebaseio.com'
});

export default instance;