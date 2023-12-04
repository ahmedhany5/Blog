import { baseApi } from "./base";

export function getComments(postId) {
  return baseApi
    .get(`/posts/${postId}/comments`)
    .then((res) => res.data);
}
