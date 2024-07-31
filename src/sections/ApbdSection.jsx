import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ApbdSection = () => {
    const [selectedYear, setSelectedYear] = useState('2023');

    const data2023 = {
        header: "APBN 2023",
        pemasukan: [
            { uraian: "Pemasukan 1", anggaran: 1000000, realisasi: 800000, lebihKurang: 200000 },
            { uraian: "Pemasukan 2", anggaran: 2000000, realisasi: 1500000, lebihKurang: 500000 },
        ],
        pengeluaran: [
            { uraian: "Pengeluaran 1", anggaran: 1500000, realisasi: 1000000, lebihKurang: 500000 },
            { uraian: "Pengeluaran 2", anggaran: 2500000, realisasi: 2000000, lebihKurang: 500000 },
        ]
    };

    const data2024 = {
        header: "APBN 2024",
        pemasukan: [
            { uraian: "Pemasukan 1", anggaran: 1200000, realisasi: 900000, lebihKurang: 300000 },
            { uraian: "Pemasukan 2", anggaran: 2200000, realisasi: 1600000, lebihKurang: 600000 },
        ],
        pengeluaran: [
            { uraian: "Pengeluaran 1", anggaran: 1800000, realisasi: 1200000, lebihKurang: 600000 },
            { uraian: "Pengeluaran 2", anggaran: 2800000, realisasi: 2100000, lebihKurang: 700000 },
        ]
    };

    const renderTable = (data) => (
        <table className="min-w-full bg-white rounded-lg">
            <thead className="bg-tosca text-white">
                <tr>
                    <th className="py-2 px-4 rounded-bl-lg rounded-tl-lg">Uraian</th>
                    <th className="py-2 px-4">Uraian</th>
                    <th className="py-2 px-4">Anggaran</th>
                    <th className="py-2 px-4">Realisasi</th>
                    <th className="py-2 px-4 rounded-br-lg rounded-tr-lg">Lebih/Kurang</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td className="py-2 px-4">{item.uraian}</td>
                        <td className="py-2 px-4">{item.anggaran}</td>
                        <td className="py-2 px-4">{item.realisasi}</td>
                        <td className="py-2 px-4">{item.lebihKurang}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const getDataForYear = () => {
        if (selectedYear === '2023') {
            return data2023;
        } else if (selectedYear === '2024') {
            return data2024;
        }
    };

    const dataForYear = getDataForYear();

    return (
        <div className="home-container p-4 mt-32">
            <div className="home-content">
                <h1 className="text-2xl font-bold mb-4">HISTORY SECTION</h1>
                <nav className="mb-4">
                    <NavLink
                        to="#"
                        className={`px-4 py-2 mr-2 rounded ${selectedYear === '2023' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'}`}
                        onClick={() => setSelectedYear('2023')}
                    >
                        2023
                    </NavLink>
                    <NavLink
                        to="#"
                        className={`px-4 py-2 rounded ${selectedYear === '2024' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'}`}
                        onClick={() => setSelectedYear('2024')}
                    >
                        2024
                    </NavLink>
                </nav>
                <h1>{dataForYear.header}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Pemasukan</h2>
                        {renderTable(dataForYear.pemasukan)}
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Pengeluaran</h2>
                        {renderTable(dataForYear.pengeluaran)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApbdSection;
