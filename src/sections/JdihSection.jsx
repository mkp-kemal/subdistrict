import { Collapse, Table } from 'antd';
import { Line } from '@ant-design/charts';
import { formatDate } from '../components/FormatDate';
import foto1 from './../assets/logounsub.png';
import foto2 from './../assets/logo-unsub.png';

const { Panel } = Collapse;

const dataDummy = {
    'Peraturan 1': [
        { key: '1', peraturan: 'Peraturan Desa A' },
        { key: '2', peraturan: 'Peraturan Desa B' },
        { key: '3', peraturan: 'Peraturan Desa C' }
    ],
    'Peraturan 2': [
        { key: '1', peraturan: 'Peraturan Desa D' },
        { key: '2', peraturan: 'Peraturan Desa E' },
        { key: '3', peraturan: 'Peraturan Desa F' }
    ],
    'Peraturan 3': [
        { key: '1', peraturan: 'Peraturan Desa G' },
        { key: '2', peraturan: 'Peraturan Desa H' },
        { key: '3', peraturan: 'Peraturan Desa I' }
    ]
};

const columns = [
    {
        title: 'Peraturan Desa',
        dataIndex: 'peraturan',
        key: 'peraturan'
    }
];

const chartData = [
    { year: '2020', value: 3 },
    { year: '2021', value: 4 },
    { year: '2022', value: 3.5 },
    { year: '2023', value: 5 },
    { year: '2024', value: 4.9 }
];

const chartConfig = {
    data: chartData,
    xField: 'year',
    yField: 'value',
    point: {
        size: 5,
        shape: 'diamond',
    },
};

const JdihSection = () => {
    return (
        <div className="p-4 mt-36">
            <h1 className="text-xl text-center font-bold mb-4">Jaringan Dokumentasi dan Informasi Hukum <br /> (JDIH) Desa Nagrak</h1>
            <Collapse>
                {Object.keys(dataDummy).map((judul, index) => (
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
                                <h3 className="text-center font-bold bg-tosca200 rounded-tl-lg rounded-tr-lg text-white p-2">Peraturan Desa</h3>
                                <div className="overflow-x-auto rounded-xl">
                                    <Table
                                        dataSource={dataDummy[judul]}
                                        columns={columns}
                                        pagination={false}
                                    />
                                </div>
                            </div>
                            <div className="flex-1 p-2">
                                <h3 className="text-center font-bold bg-tosca200 rounded-tl-lg rounded-tr-lg text-white p-2">Grafik Data</h3>
                                <div className="overflow-x-auto rounded-xl">
                                    <Line {...chartConfig} />
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
