import axios from 'axios';
// import { getCookie } from './cookiesHelper';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/',
});

// axiosInstance.interceptors.request.use(
//   async (request) => {
//     // const cookie = await getCookie();

//     // if (cookie) {
//     //   request.headers['accesstoken'] = cookie.value;
//     // }

//     return request;
//   },
//   (error) => {
//     console.log(error);
//   },
// );

export { axiosInstance };