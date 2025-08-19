// Di sini kita akan menggunakan immer dan zustand pastinya
import { produce } from "immer";
import { create } from "zustand";

// Jangan lupa kita akan meng-import service yang sudah dibuat
// fetchTodos yang disiapkan untuk mengambil data dari JSONPlaceholder
// dan mengembalikan data todos berupa array of object
import { fetchTodosWithAxios } from "../services/jsonplaceholder";

const useTodoStore = create((set) => ({
	// State
	isLoading: false,
	todos: undefined,

	// Actions

	// Jadi pertanyaannya bagaimana kita bisa menggunakan fetchTodos di sini?
	// Padahal kan fetchTodos akan mengambil data dalam jangka waktu yang lama
	// sehingga kita membutuhkan async / await atau promise di sini
	// Gimana tuh jadinya?

	// Solusinya adalah.... async-kan saja fungsinya !
	// Jadi action yang dideklarasikan di dalam zustand ini bisa di-async-kan
	// (berbeda dengan useEffect yang tidak boleh async / await)
	effectTodos: async () => {
		// Jadi kita tinggal menuliskan logicnya yang ada di dalam useEffect
		// di dalam sini
		set(
			// Karena di sini kita menggunakan immer, jangan lupa produce
			produce((state) => {
				// Dan di sini awalnya kita akan set loadingnya menjadi true
				state.isLoading = true;
			}),
		);

		// Simulasi loading
		await new Promise((resolve) => setTimeout(resolve, 2000));

		// Fetching data (ambil logic dari services)
		const data = await fetchTodosWithAxios();

		set(
			// Karena di sini kita menggunakan immer, jangan lupa produce
			produce((state) => {
				// Di sini kita akan set loadingnya menjadi false
				// dan todosnya kita isi dengan data yang sudah di-fetch (data)
				state.isLoading = false;

				// Di sini kita sengaja ambil 3 data saja, supaya berbeda
				state.todos = data.slice(0, 3);
			}),
		);
	},
}));

export { useTodoStore };
