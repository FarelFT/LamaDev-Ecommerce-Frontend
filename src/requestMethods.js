import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTA4ODJmY2Q0MzU1NTNhOGYyYzM5NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODE3MDM4OCwiZXhwIjoxNjM4NDI5NTg4fQ.clw2uIc5KwUoB9TB8mU6nhhgwBx9XwYS7XgrYPaaVz8';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
