import { useState } from "react";

const FormCounter = () => {
	const [counter, setCounter] = useState({
		firstNumber: 0,
		secondNumber: 0,
	});

	const counterFirstNumberIncrement = () => {
		// Karena kita menggunakan object, pada saat set state,
		// kita harus menyertakan object yang lengkap dengan menggunakan spread operator
		setCounter({
			...counter,
			firstNumber: counter.firstNumber + 1,
		});
	};

	const counterSecondNumberIncrement = () => {
		// Karena kita menggunakan object, pada saat set state,
		// kita harus menyertakan object yang lengkap dengan menggunakan spread operator
		setCounter({
			...counter,
			secondNumber: counter.secondNumber + 1,
		});
	};

	const counterFirstNumberDecrement = () => {
		// Karena kita menggunakan object, pada saat set state,
		// kita harus menyertakan object yang lengkap dengan menggunakan spread operator
		setCounter({
			...counter,
			firstNumber: counter.firstNumber - 1,
		});
	};

	const counterSecondNumberDecrement = () => {
		// Karena kita menggunakan object, pada saat set state,
		// kita harus menyertakan object yang lengkap dengan menggunakan spread operator
		setCounter({
			...counter,
			secondNumber: counter.secondNumber - 1,
		});
	};

	const counterReset = () => {
		// Karena kita menggunakan object, pada saat set state,
		// kita harus menyertakan object yang lengkap dengan set value nya satu per satu
		setCounter({
			firstNumber: 0,
			secondNumber: 0,
		});
	};

	return (
		<section className="flex flex-col gap-4 rounded bg-gray-100 p-4">
			<p className="text-2xl font-bold">Counter Page</p>

			<p className="text-xl">
				Nilai <i>firstNumber</i> sekarang adalah{" "}
				<span className="font-semibold">{counter.firstNumber}</span>
			</p>

			<p className="text-xl">
				Nilai <i>secondNumber</i> sekarang adalah{" "}
				<span className="font-semibold">{counter.secondNumber}</span>
			</p>

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
