import { useState } from "react";
// Import useCounterStore terlebih dahulu
// INGAT: ini adalah sebuah hooks yang siap digunakan.
import { useCounterStore } from "../stores";

const FormCounter = () => {
	// Extract state dan action dari useCounterStore

	// Supaya lebih mudah, kita pisah antara state dan action
	// --- Kumpulan state
	const { angkaPertama, angkaKedua } = useCounterStore();

	// --- Kumpulan action
	const {
		tambahAngkaPertama,
		tambahAngkaKedua,
		kurangAngkaPertama,
		kurangAngkaKedua,
		resetAngka,
	} = useCounterStore();

	// Nantinya state ini tidak akan digunakan lagi,
	// sehingga kita bisa meng-commentnya saja
	// const [counter, setCounter] = useState({
	// 	firstNumber: 0,
	// 	secondNumber: 0,
	// });

	const counterFirstNumberIncrement = () => {
		// --- Setter state yang sebelumnya akan kita comment
		// Karena kita menggunakan object, pada saat set state,
		// kita harus menyertakan object yang lengkap dengan menggunakan spread operator
		// setCounter({
		// 	...counter,
		// 	firstNumber: counter.firstNumber + 1,
		// });

		// Kita ganti dengan action yang sudah kita buat
		tambahAngkaPertama();
	};

	const counterSecondNumberIncrement = () => {
		// --- Setter state yang sebelumnya akan kita comment
		// Karena kita menggunakan object, pada saat set state,
		// kita harus menyertakan object yang lengkap dengan menggunakan spread operator
		// setCounter({
		// 	...counter,
		// 	secondNumber: counter.secondNumber + 1,
		// });

		// Kita ganti dengan action yang sudah kita buat
		tambahAngkaKedua();
	};

	const counterFirstNumberDecrement = () => {
		// --- Setter state yang sebelumnya akan kita comment
		// Karena kita menggunakan object, pada saat set state,
		// kita harus menyertakan object yang lengkap dengan menggunakan spread operator
		// setCounter({
		// 	...counter,
		// 	firstNumber: counter.firstNumber - 1,
		// });

		// Kita ganti dengan action yang sudah kita buat
		// Ingat bahwa action ini menerima angka yang dinamis,
		// Sehingga kita harus men-supply angka via argument
		kurangAngkaPertama(100);
	};

	const counterSecondNumberDecrement = () => {
		// --- Setter state yang sebelumnya akan kita comment
		// Karena kita menggunakan object, pada saat set state,
		// kita harus menyertakan object yang lengkap dengan menggunakan spread operator
		// setCounter({
		// 	...counter,
		// 	secondNumber: counter.secondNumber - 1,
		// });

		// Kita ganti dengan action yang sudah kita buat
		// Ingat bahwa action ini menerima angka yang dinamis,
		// Sehingga kita harus men-supply angka via argument
		kurangAngkaKedua(100);
	};

	const counterReset = () => {
		// --- Setter state yang sebelumnya akan kita comment
		// Karena kita menggunakan object, pada saat set state,
		// kita harus menyertakan object yang lengkap dengan set value nya satu per satu
		// setCounter({
		// 	firstNumber: 0,
		// 	secondNumber: 0,
		// });

		// Kita ganti dengan action yang sudah kita buat
		resetAngka();
	};

	return (
		<section className="flex flex-col gap-4 rounded bg-gray-100 p-4">
			<p className="text-2xl font-bold">Counter Page</p>

			<p className="text-xl">
				Nilai <i>firstNumber</i> sekarang adalah{" "}
				{/* Kita akan mengganti counter.firstNumber dengan state dari zustand */}
				<span className="font-semibold">{angkaPertama}</span>
			</p>

			<p className="text-xl">
				Nilai <i>secondNumber</i> sekarang adalah{" "}
				{/* Kita akan mengganti counter.secondNumber dengan state dari zustand */}
				<span className="font-semibold">{angkaKedua}</span>
			</p>

			{/* --- SELEBIHNYA DI BAWAH INI KODE TIDAK DIUBAH SEDIKITPUN --- */}
			<section className="flex flex-row gap-4">
				<button
					type="button"
					className="rounded bg-sky-200 py-2 px-4 hover:bg-sky-400 hover:text-white"
					onClick={counterFirstNumberIncrement}
				>
					+ (First)
				</button>
				<button
					type="button"
					className="rounded bg-sky-200 py-2 px-4 hover:bg-sky-400 hover:text-white"
					onClick={counterSecondNumberIncrement}
				>
					+ (Second)
				</button>

				<button
					type="button"
					className="rounded bg-sky-200 py-2 px-4 hover:bg-sky-400 hover:text-white"
					onClick={counterReset}
				>
					RESET
				</button>
				<button
					type="button"
					className="rounded bg-sky-200 py-2 px-4 hover:bg-sky-400 hover:text-white"
					onClick={counterFirstNumberDecrement}
				>
					- (First)
				</button>
				<button
					type="button"
					className="rounded bg-sky-200 py-2 px-4 hover:bg-sky-400 hover:text-white"
					onClick={counterSecondNumberDecrement}
				>
					- (Second)
				</button>
			</section>
		</section>
	);
};

export default FormCounter;
