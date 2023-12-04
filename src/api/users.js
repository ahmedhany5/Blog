import { baseApi } from "./base";

export function getUser(userId) {
  return baseApi
    .get(`/users/${userId}`)
    .then((res) => res.data);
}

export function getUsers() {
  return baseApi
    .get(`/users`)
    .then((res) => res.data);
}
