import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <FaExclamationTriangle className="text-6xl text-red-500 animate-bounce" />
            <h1 className="text-4xl font-bold mt-4">404 - Halaman Tidak Ditemukan</h1>
            <p className="mt-2 text-lg">Beralihlah melalui Navigasi bar diatas</p>
        </div>
    );
};

export default NotFound;
