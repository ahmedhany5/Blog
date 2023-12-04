import { baseApi } from "./base";

export function getTodos() {
  return baseApi.get(`/todos`).then((res) => res.data);
}

export function getTodoFromUser(userId) {
  return baseApi.get(`/users/${userId}/todos`).then((res) => res.data);
}

export function newTodo(todos) {
  return baseApi.post("/todos", todos).then(res => res.data)
}