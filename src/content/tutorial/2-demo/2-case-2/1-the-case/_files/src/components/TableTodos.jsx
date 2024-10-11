import { useEffect, useState } from "react";
import { fetchTodos } from "../services/jsonplaceholder";

const TableTodos = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [todos, setTodos] = useState(undefined);

	useEffect(() => {
		(async () => {
			setIsLoading(true);

			// Simulasi loading
			await new Promise((resolve) => setTimeout(resolve, 2000));
			const data = await fetchTodos();

			setIsLoading(false);
			setTodos(data);
		})();
	}, []);

	return isLoading ? (
		<p className="animate-pulse text-green-500">Loading...</p>
	) : (
		<table className="bg-gray-200 rounded-lg shadow-md">
			<thead>
				<tr>
					<th colSpan="3" className="p-2 text-center text-lg">
						Table Todos
					</th>
				</tr>
				<tr>
					<th className="p-2 text-center">Id</th>
					<th className="p-2 text-center">Title</th>
					<th className="p-2 text-center">Completed</th>
				</tr>
			</thead>
			<tbody>
				{todos?.slice(0, 10)?.map((todo) => (
					<tr key={todo.id}>
						<td className="p-2 text-center">{todo.id}</td>
						<td className="p-2">{todo.title}</td>
						<td className="p-2 text-center">{todo.completed ? "Yes" : "No"}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TableTodos;
