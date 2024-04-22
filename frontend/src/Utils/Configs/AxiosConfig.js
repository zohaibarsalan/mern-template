import axios from 'axios';
import { Logout } from '../Logout.js';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
    console.log(accessToken);
  } else {
    console.log('No access token :(');
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response, config } = error;
    if (response.status === 401) {
      // Token is expired
      let refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        try {
          const data = await api.post('/public/refresh', {
            refreshToken: refreshToken,
          });
          let newAccessToken = data.data.accessToken;

          if (newAccessToken) {
            localStorage.setItem('accessToken', newAccessToken);

            config.headers.Authorization = `Bearer ${newAccessToken}`;
            return api(config);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    Logout();
    return error;
  }
);

export { api };
