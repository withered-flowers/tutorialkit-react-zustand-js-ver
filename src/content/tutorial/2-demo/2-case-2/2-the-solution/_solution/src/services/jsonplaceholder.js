import axios from 'axios';

const fetchTodos = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos");
	const data = await response.json();

	return data;
};

const fetchTodosWithAxios = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
  const data = response.data;

  return data;
}

export { fetchTodos, fetchTodosWithAxios };
