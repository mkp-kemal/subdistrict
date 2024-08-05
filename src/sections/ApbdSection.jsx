import { useState } from 'react';
import { Table, Collapse } from 'antd';
import { formatRupiah } from '../components/FormatRupiah';

const { Panel } = Collapse;

const ApbdSection = () => {
    const [expandedRowKeys, setExpandedRowKeys] = useState([]);

    const handleRowClick = (record) => {
        if (!record.children) return;

        const keys = [...expandedRowKeys];
        const index = keys.indexOf(record.key);
        if (index >= 0) {
            keys.splice(index, 1);
        } else {
            keys.push(record.key);
        }
        setExpandedRowKeys(keys);
    };

    //2023
    const PADES2023 = 26880000;
    const DD2023 = 769152000;
    const BHP2023 = 90410050;
    const ADD2023 = 500334100;
    const BANPROV2023 = 130000000;
    const BKU2023 = 375106583;
    const PETRANS2023 = DD2023 + BHP2023 + ADD2023 + BANPROV2023 + BKU2023;
    const REALISASIPETRANS2023 = 1714529483;
    const TOTALMASUK2023 = PADES2023 + PETRANS2023 + 316126;

    const BPPD2023 = 973493631;
    const BPP2023 = 582977000;
    const BPK2023 = 70220000;
    const BPM2023 = 36475000;
    const BPBD2023 = 151200000;
    const BPPDRealisasi2023 = 804195381;
    const BPPRealisasi2023 = 582977000;
    const BPKRealisasi2023 = 62300000;
    const BPMRealisasi2023 = 33475000;
    const BPBDRealisasi2023 = 151200000;
    const TOTALKELUAR2023 = BPPD2023 + BPP2023 + BPK2023 + BPM2023 + BPBD2023;
    const TOTALKELUARREALISASI2023 = BPPDRealisasi2023 + BPPRealisasi2023 + BPKRealisasi2023 + BPMRealisasi2023 + BPBDRealisasi2023;


    //2024
    const PADES2024 = 26880000;
    const DD2024 = 776185000;
    const BHP2024 = 90410050;
    const ADD2024 = 500334100;
    const BANPROV2024 = 130000000;
    const BKU2024 = 375106583;
    const PETRANS2024 = DD2024 + BHP2024 + ADD2024 + BANPROV2024 + BKU2024;
    const REALISASIPETRANS2024 = 1714529483;
    const TOTALMASUK2024 = PADES2024 + DD2024 + BHP2024 + ADD2024 + BANPROV2024 + BKU2024

    const BPPD2024 = 954988084;
    const BPP2024 = 687343000;
    const BPK2024 = 66260000;
    const BPM2024 = 58284450;
    const BPBD2024 = 151200000;
    const BPPDRealisasi2024 = 0;
    const BPPRealisasi2024 = 0;
    const BPKRealisasi2024 = 0;
    const BPMRealisasi2024 = 0;
    const BPBDRealisasi2024 = 0;
    const TOTALKELUAR2024 = BPPD2024 + BPP2024 + BPK2024 + BPM2024 + BPBD2024;
    const TOTALKELUARREALISASI2024 = BPPDRealisasi2024 + BPPRealisasi2024 + BPKRealisasi2024 + BPMRealisasi2024 + BPBDRealisasi2024;

    const data2023 = {
        header: 'APBDes 2023',
        pemasukan: [
            { key: '1', uraian: 'Pendapatan Asli Desa (PADES)', anggaran: formatRupiah(PADES2023), realisasi: '-', lebihKurang: formatRupiah(PADES2023) },
            {
                key: '2',
                uraian: 'Pendapatan Transfer',
                anggaran: formatRupiah(PETRANS2023),
                realisasi: formatRupiah(REALISASIPETRANS2023),
                lebihKurang: formatRupiah(PETRANS2023 - REALISASIPETRANS2023),
                children: [
                    { key: '2-1', uraian: 'Dana Desa (DD)', anggaran: formatRupiah(DD2023), realisasi: formatRupiah(DD2023), lebihKurang: '-' },
                    { key: '2-2', uraian: 'Bagi Hasil Pajak dan Retribusi (BHP)', anggaran: formatRupiah(BHP2023), realisasi: formatRupiah(BHP2023), lebihKurang: '-' },
                    { key: '2-3', uraian: 'Alokasi Dana Desa (ADD)', anggaran: formatRupiah(ADD2023), realisasi: formatRupiah(ADD2023), lebihKurang: '-' },
                    { key: '2-4', uraian: 'Bantuan Keuangan Provinsi (BANPROV)', anggaran: formatRupiah(BANPROV2023), realisasi: formatRupiah(BANPROV2023), lebihKurang: '-' },
                    { key: '2-5', uraian: 'Bantuan Keuangan Kabupaten (BKU)', anggaran: formatRupiah(BKU2023), realisasi: formatRupiah(BKU2023 - (PETRANS2023 - REALISASIPETRANS2023)), lebihKurang: formatRupiah(PETRANS2023 - REALISASIPETRANS2023) },
                ],
            },
            { key: '3', uraian: 'Pendapatan Lainnya', anggaran: '-', realisasi: formatRupiah(316126), lebihKurang: formatRupiah(316126) },
        ],
        pengeluaran: [
            { key: '4', uraian: 'Bidang Penyelenggaraan Pemerintah Desa', anggaran: formatRupiah(BPPD2023), realisasi: formatRupiah(BPPDRealisasi2023), lebihKurang: formatRupiah(BPPD2023 - BPPDRealisasi2023) },
            { key: '5', uraian: 'Bidang Pelaksanaan Pembangunan', anggaran: formatRupiah(BPP2023), realisasi: formatRupiah(BPPRealisasi2023), lebihKurang: '-' },
            { key: '6', uraian: 'Bidang Pembinaan Kemasyarakatan', anggaran: formatRupiah(BPK2023), realisasi: formatRupiah(BPKRealisasi2023), lebihKurang: formatRupiah(BPK2023 - BPKRealisasi2023) },
            { key: '7', uraian: 'Bidang Pemberdayaan Masyarakat', anggaran: formatRupiah(BPM2023), realisasi: formatRupiah(BPMRealisasi2023), lebihKurang: formatRupiah(BPM2023 - BPMRealisasi2023) },
            { key: '8', uraian: 'Bidang Penanggulangan Bencana Darurat & Mendesak', anggaran: formatRupiah(BPBD2023), realisasi: formatRupiah(BPBDRealisasi2023), lebihKurang: '-' },
        ],
    };

    const data2024 = {
        header: 'APBDes 2024',
        pemasukan: [
            { key: '1', uraian: 'Pendapatan Asli Desa (PADES)', anggaran: formatRupiah(PADES2024), realisasi: '-', lebihKurang: formatRupiah(PADES2024) },
            {
                key: '2',
                uraian: 'Pendapatan Transfer',
                anggaran: formatRupiah(PETRANS2024),
                realisasi: formatRupiah(REALISASIPETRANS2024),
                lebihKurang: formatRupiah(PETRANS2024 - REALISASIPETRANS2024),
                children: [
                    { key: '2-1', uraian: 'Dana Desa (DD)', anggaran: formatRupiah(DD2024), realisasi: formatRupiah(DD2024), lebihKurang: '-' },
                    { key: '2-2', uraian: 'Bagi Hasil Pajak dan Retribusi (BHP)', anggaran: formatRupiah(BHP2024), realisasi: formatRupiah(BHP2024), lebihKurang: '-' },
                    { key: '2-3', uraian: 'Alokasi Dana Desa (ADD)', anggaran: formatRupiah(ADD2024), realisasi: formatRupiah(ADD2024), lebihKurang: '-' },
                    { key: '2-4', uraian: 'Bantuan Keuangan Provinsi (BANPROV)', anggaran: formatRupiah(BANPROV2024), realisasi: formatRupiah(BANPROV2024), lebihKurang: '-' },
                    { key: '2-5', uraian: 'Bantuan Keuangan Kabupaten (BKU)', anggaran: formatRupiah(BKU2024), realisasi: formatRupiah(BKU2024 - (PETRANS2024 - REALISASIPETRANS2024)), lebihKurang: formatRupiah(PETRANS2024 - REALISASIPETRANS2024) },
                ],
            },
            { key: '3', uraian: 'Pendapatan Lainnya', anggaran: '-', realisasi: formatRupiah(316126), lebihKurang: formatRupiah(316126) },
        ],
        pengeluaran: [
            { key: '4', uraian: 'Bidang Penyelenggaraan Pemerintah Desa', anggaran: formatRupiah(BPPD2024), realisasi: '-', lebihKurang: formatRupiah(BPPD2024 - BPPDRealisasi2024) },
            { key: '5', uraian: 'Bidang Pelaksanaan Pembangunan', anggaran: formatRupiah(BPP2024), realisasi: '-', lebihKurang: formatRupiah(BPP2024) },
            { key: '6', uraian: 'Bidang Pembinaan Kemasyarakatan', anggaran: formatRupiah(BPK2024), realisasi: '-', lebihKurang: formatRupiah(BPK2024 - BPKRealisasi2024) },
            { key: '7', uraian: 'Bidang Pemberdayaan Masyarakat', anggaran: formatRupiah(BPM2024), realisasi: '-', lebihKurang: formatRupiah(BPM2024 - BPMRealisasi2024) },
            { key: '8', uraian: 'Bidang Penanggulangan Bencana Darurat & Mendesak', anggaran: formatRupiah(BPBD2024), realisasi: '-', lebihKurang: formatRupiah(BPBD2024) },
        ],
    };

    const columns = [
        {
            title: 'Uraian',
            dataIndex: 'uraian',
            key: 'uraian',
        },
        {
            title: 'Anggaran',
            dataIndex: 'anggaran',
            key: 'anggaran',
        },
        {
            title: 'Realisasi',
            dataIndex: 'realisasi',
            key: 'realisasi',
        },
        {
            title: 'Lebih/Kurang',
            dataIndex: 'lebihKurang',
            key: 'lebihKurang',
        },
    ];

    //2023
    const totalMasuk2023 = {
        key: 'totalMasuk2023',
        uraian: 'Total Pendapatan',
        anggaran: formatRupiah(TOTALMASUK2023),
        realisasi: '-',
        lebihKurang: formatRupiah(TOTALMASUK2023),
    };
    const totalKeluar2023 = {
        key: 'totalKeluar2023',
        uraian: 'Total Pengeluaran',
        anggaran: formatRupiah(TOTALKELUAR2023),
        realisasi: formatRupiah(TOTALKELUARREALISASI2023),
        lebihKurang: formatRupiah(180218250),
    };

    const totalDefisit2023 = {
        key: 'totalDefisit2023',
        uraian: 'Total Defisit',
        anggaran: formatRupiah(77517102),
        realisasi: formatRupiah(80698228),
        lebihKurang: formatRupiah(3181126),
    };

    const totalSilpa2023 = {
        key: 'totalSilpa2023',
        uraian: 'SILPA Tahun Berjalan',
        anggaran: formatRupiah(0),
        realisasi: formatRupiah(3181126),
        lebihKurang: formatRupiah(3181126),
    };



    //2024
    const totalMasuk2024 = {
        key: 'totalMasuk2024',
        uraian: 'Total Pendapatan',
        anggaran: formatRupiah(TOTALMASUK2024),
        realisasi: '-',
        lebihKurang: formatRupiah(TOTALMASUK2024),
    };
    const totalKeluar2024 = {
        key: 'totalKeluar2024',
        uraian: 'Total Pengeluaran',
        anggaran: formatRupiah(TOTALKELUAR2024),
        realisasi: formatRupiah(TOTALKELUARREALISASI2024),
        lebihKurang: formatRupiah(180218250),
    };

    const totalDefisit2024 = {
        key: 'totalDefisit2024',
        uraian: 'Total Defisit',
        anggaran: '-',
        realisasi: '-',
        lebihKurang: '-',
    };

    const totalSilpa2024 = {
        key: 'totalSilpa2024',
        uraian: 'SILPA Tahun Sebelumnya',
        anggaran: formatRupiah(19159801),
        realisasi: formatRupiah(0),
        lebihKurang: formatRupiah(19159801),
    };

    return (
        <div style={{ padding: '20px' }} className="mt-36">
            <Collapse defaultActiveKey={['0']}>
                <Panel header={<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>{data2023.header} <span style={{ fontSize: '12px', color: 'gray' }}>31 Desember 2023</span></div>} key="1">
                    <div style={{ display: 'flex', flexDirection: 'column' }} className='font-bold'>
                        <div style={{ flex: 1, padding: '10px' }}>
                            <h3 className='text-center font-bold bg-tosca200 rounded-tl-lg rounded-tr-lg text-white p-2'>Pemasukan</h3>
                            <div style={{ overflowX: 'auto' }} className='rounded-xl'>
                                <Table
                                    dataSource={[...data2023.pemasukan, totalMasuk2023]}
                                    columns={columns}
                                    pagination={false}
                                    expandable={{
                                        expandedRowKeys,
                                        onExpand: (expanded, record) => handleRowClick(record),
                                        expandIcon: ({ expanded, onExpand, record }) =>
                                            record.children ? (
                                                <a className='mr-5' style={{ marginLeft: '-2%' }} onClick={e => onExpand(record, e)}>{expanded ? '-' : '+'}</a>
                                            ) : null,
                                    }}
                                    rowClassName={(record) => record.key === 'totalMasuk2023' ? 'bg-tosca200 text-white font-bold' : ''}
                                    onRow={(record) => ({
                                        onClick: () => handleRowClick(record),
                                    })}
                                />
                            </div>
                        </div>
                        <div style={{ flex: 1, padding: '10px' }}>
                            <h3 className='text-center font-bold bg-tosca200 rounded-tl-lg rounded-tr-lg text-white p-2'>Pengeluaran</h3>
                            <div style={{ overflowX: 'auto' }} className='rounded-xl'>
                                <Table
                                    dataSource={[...data2023.pengeluaran, totalKeluar2023, totalDefisit2023, totalSilpa2023]}
                                    columns={columns}
                                    pagination={false}
                                    rowClassName={(record) => ['totalKeluar2023', 'totalDefisit2023', 'totalSilpa2023'].includes(record.key) ? 'bg-tosca200 text-white font-bold' : ''}
                                />
                            </div>
                        </div>
                    </div>
                </Panel>
                <Panel header={<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>{data2023.header} <span style={{ fontSize: '12px', color: 'gray' }}>31 Desember 2023</span></div>} key="2">
                    <div style={{ display: 'flex', flexDirection: 'column' }} className='font-bold'>
                        <div style={{ flex: 1, padding: '10px' }}>
                            <h3 className='text-center font-bold bg-tosca200 rounded-tl-lg rounded-tr-lg text-white p-2'>Pemasukan</h3>
                            <div style={{ overflowX: 'auto' }} className='rounded-xl'>
                                <Table
                                    dataSource={[...data2023.pemasukan, totalMasuk2023]}
                                    columns={columns}
                                    pagination={false}
                                    expandable={{
                                        expandedRowKeys,
                                        onExpand: (expanded, record) => handleRowClick(record),
                                        expandIcon: ({ expanded, onExpand, record }) =>
                                            record.children ? (
                                                <a className='mr-5' style={{ marginLeft: '-2%' }} onClick={e => onExpand(record, e)}>{expanded ? '-' : '+'}</a>
                                            ) : null,
                                    }}
                                    rowClassName={(record) => record.key === 'totalMasuk2023' ? 'bg-tosca200 text-white font-bold' : ''}
                                    onRow={(record) => ({
                                        onClick: () => handleRowClick(record),
                                    })}
                                />
                            </div>
                        </div>
                        <div style={{ flex: 1, padding: '10px' }}>
                            <h3 className='text-center font-bold bg-tosca200 rounded-tl-lg rounded-tr-lg text-white p-2'>Pengeluaran</h3>
                            <div style={{ overflowX: 'auto' }} className='rounded-xl'>
                                <Table
                                    dataSource={[...data2023.pengeluaran, totalKeluar2023, totalDefisit2023, totalSilpa2023]}
                                    columns={columns}
                                    pagination={false}
                                    rowClassName={(record) => ['totalKeluar2023', 'totalDefisit2023', 'totalSilpa2023'].includes(record.key) ? 'bg-tosca200 text-white font-bold' : ''}
                                />
                            </div>
                        </div>
                    </div>
                </Panel>
                <Panel header={<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>{data2024.header} <span style={{ fontSize: '12px', color: 'gray' }}>31 Desember 2024</span></div>} key="3">
                    <div style={{ display: 'flex', flexDirection: 'column' }} className='font-bold'>
                        <div style={{ flex: 1, padding: '10px' }}>
                            <h3 className='text-center font-bold bg-tosca200 rounded-tl-lg rounded-tr-lg text-white p-2'>Pemasukan</h3>
                            <div style={{ overflowX: 'auto' }} className='rounded-xl'>
                                <Table
                                    dataSource={[...data2024.pemasukan, totalMasuk2024]}
                                    columns={columns}
                                    pagination={false}
                                    expandable={{
                                        expandedRowKeys,
                                        onExpand: (expanded, record) => handleRowClick(record),
                                        expandIcon: ({ expanded, onExpand, record }) =>
                                            record.children ? (
                                                <a className='mr-5' style={{ marginLeft: '-2%' }} onClick={e => onExpand(record, e)}>{expanded ? '-' : '+'}</a>
                                            ) : null,
                                    }}
                                    rowClassName={(record) => record.key === 'totalMasuk2024' ? 'bg-tosca200 text-white font-bold' : ''}
                                    onRow={(record) => ({
                                        onClick: () => handleRowClick(record),
                                    })}
                                />
                            </div>
                        </div>
                        <div style={{ flex: 1, padding: '10px' }}>
                            <h3 className='text-center font-bold bg-tosca200 rounded-tl-lg rounded-tr-lg text-white p-2'>Pengeluaran</h3>
                            <div style={{ overflowX: 'auto' }} className='rounded-xl'>
                                <Table
                                    dataSource={[...data2024.pengeluaran, totalKeluar2024, totalDefisit2024, totalSilpa2024]}
                                    columns={columns}
                                    pagination={false}
                                    rowClassName={(record) => ['totalKeluar2024', 'totalDefisit2024', 'totalSilpa2024'].includes(record.key) ? 'bg-tosca200 text-white font-bold' : ''}
                                />
                            </div>
                        </div>
                    </div>
                </Panel>
            </Collapse>
        </div>
    );
};

export default ApbdSection;
