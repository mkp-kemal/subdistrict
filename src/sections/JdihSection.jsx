import { useState } from 'react';
import { Collapse, Table, Input } from 'antd';
import { formatDate } from '../components/FormatDate';
import foto1 from './../assets/logounsub.png';
import foto2 from './../assets/logo-unsub.png';

const { Panel } = Collapse;
const { Search } = Input;

const dataDummy = {
    'Rumah Tangga': [
        { key: '1', jenis: 'Peraturan Desa', nomor: '001', tentang: 'TATA CARA PENGGUNAAN DAN PENYELENGGARAAN KARTU KREDIT PEMERINTAH DAERAH DALAM PELAKSANAAN ANGGARAN PENDAPATAN DAN BELANJA DAERAH', download: 'Download Draft' },
        { key: '2', jenis: 'Peraturan Desa', nomor: '002', tentang: '-', download: 'Download Draft' },
        { key: '3', jenis: 'Peraturan Desa', nomor: '003', tentang: '-', download: 'Download Draft' }
    ],
    'Peraturan 2': [
        { key: '1', jenis: 'Peraturan Desa', nomor: '004', tentang: '-', download: 'Download Draft' },
        { key: '2', jenis: 'Peraturan Desa', nomor: '005', tentang: '-', download: 'Download Draft' },
        { key: '3', jenis: 'Peraturan Desa', nomor: '006', tentang: '-', download: 'Download Draft' }
    ],
    'Peraturan 3': [
        { key: '1', jenis: 'Peraturan Desa', nomor: '007', tentang: '-', download: 'Download Draft' },
        { key: '2', jenis: 'Peraturan Desa', nomor: '008', tentang: '-', download: 'Download Draft' },
        { key: '3', jenis: 'Peraturan Desa', nomor: '009', tentang: '-', download: 'Download Draft' }
    ]
};

const columns = [
    {
        title: 'Jenis Peraturan',
        dataIndex: 'jenis',
        key: 'jenis'
    },
    {
        title: 'Tentang',
        dataIndex: 'tentang',
        key: 'tentang'
    },
    {
        title: 'Nomor',
        dataIndex: 'nomor',
        key: 'nomor'
    },
    {
        title: 'Download',
        dataIndex: 'download',
        key: 'download',
        render: (text) => <a href="#">{text}</a>
    }
];

const JdihSection = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState(dataDummy);

    const onSearch = (value) => {
        setSearchText(value);

        if (value === '') {
            setFilteredData(dataDummy);
        } else {
            const newFilteredData = {};

            Object.keys(dataDummy).forEach((judul) => {
                const filteredItems = dataDummy[judul].filter((item) =>
                    item.jenis.toLowerCase().includes(value.toLowerCase()) ||
                    item.tentang.toLowerCase().includes(value.toLowerCase()) ||
                    item.nomor.toLowerCase().includes(value.toLowerCase())
                );

                if (filteredItems.length > 0) {
                    newFilteredData[judul] = filteredItems;
                }
            });

            setFilteredData(newFilteredData);
        }
    };

    return (
        <div className="p-4 mt-36">
            <h1 className="text-xl text-center font-bold mb-4">Jaringan Dokumentasi dan Informasi Hukum <br /> (JDIH) Desa Nagrak</h1>

            {/* Form Pencarian */}
            <div className="mb-4 flex justify-center">
                <Search
                    placeholder="Cari jenis peraturan atau nomor"
                    enterButton
                    value={searchText}
                    onChange={(e) => onSearch(e.target.value)}
                    onSearch={onSearch}
                    style={{ maxWidth: 400 }}
                />
            </div>

            <Collapse>
                {Object.keys(filteredData).map((judul, index) => (
                    <Panel
                        header={
                            <div className="flex justify-between items-center">
                                {judul}
                                <span className="text-gray-500 text-xs">Diterbitkan: {formatDate(new Date())}</span>
                            </div>
                        }
                        key={index}
                    >
                        <div className="flex flex-col font-bold">
                            <div className="flex-1 p-2">
                                <h3 className="text-center font-bold bg-tosca200 rounded-tl-lg rounded-tr-lg text-white p-2">Detail</h3>
                                <div className="overflow-x-auto rounded-xl">
                                    <Table
                                        dataSource={filteredData[judul]}
                                        columns={columns}
                                        pagination={false}
                                    />
                                </div>
                            </div>
                        </div>
                    </Panel>
                ))}
            </Collapse>
            <p className='text-center font-bold mt-5'>Penerbit Aturan Desa</p>
            <div className='flex justify-center mt-5'>
                <img src={foto2} className='w-14 h-14 rounded-full mr-4' alt="img" />
                <img src={foto1} className='w-14 h-14 rounded-full' alt="img" />
            </div>
        </div>
    );
};

export default JdihSection;
