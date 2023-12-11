import axios, { CanceledError } from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

const apiClient = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
  baseURL: API_URL,
});

class UserService {
  endPoint = '';
  constructor(endpoint) {
    this.endPoint = endpoint;
  }

  getAll() {
    const abortControl = new AbortController();
    const request = apiClient.get(this.endPoint, {
      signal: abortControl.signal,
    });
    return { request, cancel: () => abortControl.abort() };
  }

  update(data) {
    return async () =>
      await apiClient.patch(this.endPoint + '/' + data.id, data);
  }

  delete(id) {
    return async () => await apiClient.delete(this.endPoint + '/', id);
  }

  create(data) {
    return async () => await apiClient.post(this.endPoint + '/', data);
  }
}

const userService = (endPoint) => new UserService(endPoint);
export default userService('/posts');
