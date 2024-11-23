import axios, { AxiosInstance } from 'axios';

export const interceptor: AxiosInstance = axios.create({
  baseURL: '/api',
});


