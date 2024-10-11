// File: /src/components/TableTodos.jsx
// Kita di sini akan comment seluruh useState, dan service
// import { useEffect, useState } from "react";
// import { fetchTodos } from "../services/jsonplaceholder";

// Namun kita juga masih menggunakan useEffect
import { useEffect } from "react";
// Sebagai gantinya kita akan import useTodoStore dari stores
import { useTodoStore } from "../stores";

const TableTodos = () => {
	// Karena di atas sudah di comment, di sini sudah tidak digunakan lagi
	// const [isLoading, setIsLoading] = useState(true);
	// const [todos, setTodos] = useState(undefined);

	// Sebagai gantinya kita akan menggunakan state dan actions dari useTodoStore
	const { isLoading, todos, effectTodos } = useTodoStore();

	// Karena di sini kita akan menggunakan logic yang lain,
	// Jadinya di sini kita akan meng-comment code useEffect ini
	// useEffect(() => {
	// 	(async () => {
	// 		setIsLoading(true);

	// 		// Simulasi loading
	// 		await new Promise((resolve) => setTimeout(resolve, 2000));
	// 		const data = await fetchTodos();

	// 		setIsLoading(false);
	// 		setTodos(data);
	// 	})();
	// }, []);

	// Nah di sini kita tetap akan menggunakan useEffect,
	// Namun dengan cara yang berbeda
	useEffect(() => {
		// Di sini kita cukup panggil effectTodos-nya saja
		effectTodos();
	}, [effectTodos]);

	// ---- Kode di bawah ini tidak ada yang diubah

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
