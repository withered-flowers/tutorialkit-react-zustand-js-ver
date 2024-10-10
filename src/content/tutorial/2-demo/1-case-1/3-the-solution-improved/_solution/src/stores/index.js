// Sekarang kita akan meng-import produce dari immer untuk digunakan
import { produce } from "immer";
import { create } from "zustand";

const useCounterStore = create((set) => ({
	// Untuk state tidak ada yang berubah sama sekali
	angkaPertama: 20,
	angkaKedua: 20,

	// Untuk actions, kita akan menggunakan produce
	// Untuk kode lama sebelum immer, kita akan comment
	// tambahAngkaPertama: () =>

	// 		set((state) => ({
	// 			...state,
	// 			angkaPertama: state.angkaPertama + 10,
	// 		})),

	// Dan kita akan menggantinya dengan versi immer
	tambahAngkaPertama: () =>
		// Untuk setiap function yang akan memanggil set,
		// Kita akan bungkus dengan menggunakan produce

		// set(produce((state) => { ... }));
		set(
			// Di sini kita akan memanggil produce yang merupakan function
			produce(
				// Di dalam produce, kita akan memanggil sebuah function
				// yang akan menerima sebuah parameter yaitu state
				(state) => {
					// Perbedaannya adalah, kita tidak perlu lagi mengembalikan object
					// (Perhatikan di sini tidak menggunakan return)

					// Dan satu lagi: di dalam sini kita bisa langsung mengubah state

					// Kita bisa meng-assign state seperti layaknya sebuah variable
					state.angkaPertama += 10;
				},
			),
		),

	// Untuk kode lama sebelum immer, kita akan comment
	// tambahAngkaKedua: () =>
	// 		set((state) => ({
	// 			angkaKedua: state.angkaKedua + 10,
	// 		})),

	// Dan kita akan menggantinya dengan versi immer
	tambahAngkaKedua: () =>
		set(
			produce((state) => {
				state.angkaKedua += 10;
			}),
		),

	// Untuk kode lama sebelum immer, kita akan comment
	// kurangAngkaPertama: (angkaDinamis) =>
	// 		set((state) => ({ angkaPertama: state.angkaPertama - angkaDinamis })),

	// Dan kita akan menggantinya dengan versi immer

	// Bagaimana penanganannya bila kita memiliki parameter?
	// Jawabannya: sama saja, kita bisa langsung menggunakannya
	kurangAngkaPertama: (angkaDinamis) =>
		set(
			produce((state) => {
				state.angkaPertama -= angkaDinamis;
			}),
		),

	// Untuk kode lama sebelum immer, kita akan comment
	// kurangAngkaKedua: (angkaDinamis) =>
	// 	set((state) => ({ angkaKedua: state.angkaKedua - angkaDinamis })),

	// Dan kita akan menggantinya dengan versi immer
	kurangAngkaKedua: (angkaDinamis) =>
		set(
			produce((state) => {
				state.angkaKedua -= angkaDinamis;
			}),
		),

	// Untuk kode lama sebelum immer, kita akan comment
	// resetAngka: () => set({ angkaPertama: 0, angkaKedua: 0 }),

	// Dan kita akan menggantinya dengan versi immer
	resetAngka: () =>
		set(
			produce((state) => {
				// Bagaimana jika kita ingin mengubah lebih dari satu state?
				// Jawabannya: hajar saja selayaknya assignment variabel biasanya
				state.angkaPertama = 0;
				state.angkaKedua = 0;
			}),
		),
}));

// Karena ini nantinya akan digunakan pada Component, jangan lupa diexport !
export { useCounterStore };
