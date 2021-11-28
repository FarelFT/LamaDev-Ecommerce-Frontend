import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTA4ODJmY2Q0MzU1NTNhOGYyYzM5NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODEwODMxNSwiZXhwIjoxNjM4MzY3NTE1fQ.bwfFeOgeNMM3c-DxuEu45cJqUHNj9RatPxyadVvX_Xo';

export const publicRequest = axios.create({
  BASE_URL: BASE_URL,
});

export const userRequest = axios.create({
  BASE_URL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
