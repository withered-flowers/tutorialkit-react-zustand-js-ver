// Gunakan store yang telah dibuat sebelumnya (useBearStore) di dalam komponen App
// ada kata kata "use" di depan, menandakan bahwa kita akan menggunakan store tersebut sebagai hooks
import { useBearStore } from "./stores";

const App = () => {
	// Menggunakan store yang telah dibuat sebelumnya
	const { jumlahBeruang } = useBearStore();

	return (
		<>
			<div className="bg-gray-200 p-4 m-4 flex flex-col w-full md:w-1/2 lg:w-1/4 gap-4">
				<p className="flex justify-center gap-1">
					<span>Jumlah Populasi Beruang:</span>
					{/* Mengganti 0 dengan state jumlahBeruang dari useBearStore */}
					<span>{jumlahBeruang}</span>
				</p>
				<div className="flex">
					<button
						className="bg-blue-200 hover:bg-blue-400 hover:text-white mx-auto py-2 px-4 rounded transition-colors duration-300"
						type="button"
					>
						Tambah Beruang
					</button>
					<button
						className="bg-red-200 hover:bg-red-400 hover:text-white mx-auto py-2 px-4 rounded transition-colors duration-300"
						type="button"
					>
						Reset Beruang
					</button>
				</div>
			</div>
		</>
	);
};

export default App;
