import axios from "axios";

const API_URL = "http://localhost:3001/todos";

export const getTodos = () => axios.get(API_URL);

export const addTodo = (text) =>
  axios.post(API_URL, { text });

export const toggleTodo = (id) =>
  axios.put(`${API_URL}/${id}`);

export const deleteTodo = (id) =>
  axios.delete(`${API_URL}/${id}`);
