// Di sini kita akan membuat store (tempat penyimpanan data) yang akan digunakan di aplikasi kita.
import { create } from "zustand";

// Membuat store dengan konvensi penulisan use-namaDomain-Store (e.g.: useCounterStore)
const useBearStore = create(
	// Di sini kita akan menggunakan fungsi create yang dimiliki oleh zustand
	// Fungsi create ini akan:
	// - menerima satu parameter berupa function dan:
	//    - menerima satu parameter bernama "set"
	//    - mengembalikan object yang berisi:
	//      - state (data yang berisi informasi yang akan disimpan)
	//      - actions (fungsi yang berisi logic yang akan memanipulasi state)
	(set) => ({
		// Kumpulan state
		jumlahBeruang: 100,

		// Kumpulan actions

		// Fungsi untuk menambah populasi beruang
		tambahPopulasiBeruang: () =>
			// Di sini kita akan menggunakan set untuk mengubah state yang ada
			// set akan menerima function yang:
			// - menerima satu parameter bernama "state"
			// - mengembalikan object yang berisi state baru
			set((state) => ({ jumlahBeruang: state.jumlahBeruang + 1 })),

		// Fungsi untuk mereset populasi beruang
		resetPopulasiBeruang: () => set(() => ({ jumlahBeruang: 0 })),
	}),
);

// Export store yang telah dibuat
export { useBearStore };
