import { create } from "zustand";

const useCounterStore = create((set) => ({
	// Di sini kita akan mendefinisikan state yang akan digunakan
	angkaPertama: 20,
	angkaKedua: 20,

	// Di sini kita akan mendefinisikan action yang bisa dilakukan

	// Untuk tambah angka, kita akan menggunakan penambahan yang statis,
	// yaitu +10
	tambahAngkaPertama: () =>
		set((state) => ({
			// Seperti layaknya useState yang menggunakan state berupa object,
			// Pada saat set state, kita harus menyertakan object yang lengkap
			// dengan menggunakan spread operator
			...state,
			angkaPertama: state.angkaPertama + 10,
		})),

	tambahAngkaKedua: () =>
		set((state) => ({
			// Tapi sebenarnya, langkah yang dilakukan di atas
			// (pada tambahAngkaPertama), itu sia sia...

			// Kenapa demikian?
			// Karena pada zustand, spread operator itu sudah dilakukan
			// secara OTOMATIS !
			angkaKedua: state.angkaKedua + 10,
		})),

	// Untuk yang mengurangi angka, kita akan membuatnya
	// bisa menerima angka dinamis

	// Untuk bisa menerima angka / value yang dinamis,
	// kita cukup menambahkan parameter pada action yang akan kita buat
	kurangAngkaPertama: (angkaDinamis) =>
		set((state) => ({ angkaPertama: state.angkaPertama - angkaDinamis })),

	kurangAngkaKedua: (angkaDinamis) =>
		set((state) => ({ angkaKedua: state.angkaKedua - angkaDinamis })),

	// Bagaimana bila kita ingin set beberapa value sekaligus?
	// Kita bisa menggunakan cara layaknya set secara "naif"
	// Set value nya satu per satu,
	// lalu untuk sisanya, akan di-spread secara OTOMATIS !
	resetAngka: () => set({ angkaPertama: 0, angkaKedua: 0 }),
}));

// Karena ini nantinya akan digunakan pada Component, jangan lupa diexport !
export { useCounterStore };
