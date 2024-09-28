import { useState } from 'react';
import { Collapse, Table, Input, Button } from 'antd';
import foto1 from './../assets/logounsub.png';
import foto2 from './../assets/logo-unsub.png';
import { Footer } from './HomeSection';


const { Panel } = Collapse;
const { Search } = Input;

const dataDummy = {
    'BUMDES': [
        { key: '1', jenis: 'Peraturan Desa', nomor: '001', tentang: 'PENDIRIAN BADAN USAHA MILIK DESA HASIL BERKAH MOTEKAR', download: 'Download Draft', file: 'https://drive.google.com/file/d/1N5-U1HZRV6DX-zukbbXVa8f_fA41xenL/view' },
        { key: '2', jenis: 'Peraturan Desa', nomor: '002', tentang: 'PENDIRIAN BADAN USAHA MILIK DESA PENGELOLAAN SAMPAH', download: 'Download Draft', file: 'https://drive.google.com/file/d/13nglocJsAADSV594_giRWOuw9jmRnaRE/view?usp=sharing' },
    ],
    'PEMBENTUKAN PERATURAN DESA': [
        { key: '1', jenis: 'Bimtek Pembentukan PERDES', nomor: '003', tentang: 'KERANGKA PEMBENTUKAN PERATURAN DI DESA (MEKANISME PEMBENTUKAN PERATURAN DESA)', download: 'Download Draft', file: 'https://drive.google.com/file/d/1CHoVgb0tlXU_IPvhuUPtaEnxrfmN8pu0/view?usp=sharing' },
        { key: '2', jenis: 'Bimtek Pembentukan PERDES', nomor: '004', tentang: 'SIMULASI TEKNIS/TATA CARA PEMBENTUKAN PERATURAN DI DESA', download: 'Download Draft', file: 'https://drive.google.com/file/d/1mrdb680uoysgzWoiiMI7QGsXWkg7qDQt/view?usp=sharing' },
    ],
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
        render: (text, record) => (
            <a href={record.file} download target='_blank'>
                <Button type="link" size="small">{text}</Button>
            </a>
        )
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

    console.log(filteredData);

    return (
        <>
            <div className="p-4 mt-36">
                <h1 className="text-xl text-center font-bold mb-4">Jaringan Dokumentasi dan Informasi Hukum <br /> (JDIH) Desa Nagrak</h1>

                {/* Form Pencarian */}
                <div className="mb-4 flex justify-center">
                    <Search
                        placeholder="Cari tentang peraturan atau nomor"
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
                    <a href="https://drive.google.com/file/d/1ZnwUq8Gk13uvayDuzrkWYymWMOyUYYsq/view?usp=sharing" target='_blank'><img src={foto1} className='w-14 h-14 rounded-full' alt="img" /></a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default JdihSection;
