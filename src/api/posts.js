import { baseApi } from "./base";

export function getPost(postId) {
  return baseApi.get(`/posts/${postId}`).then((res) => res.data);
}

export function getPosts() {
  return baseApi.get(`/posts`).then((res) => res.data);
}

export function getPostsFromUser(userId) {
  return baseApi.get(`/users/${userId}/posts`).then((res) => res.data);
}

export function newPost(data) {
  return baseApi.post("/posts", data).then((res) => res.data);
}

export function editPost(postId, newData) {
  return baseApi.patch(`/posts/${postId}`, newData).then((res) => res.data);
}
