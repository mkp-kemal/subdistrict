// src/components/Dashboard.jsx
import { Table, Card, Row, Col } from 'antd';

const Dashboard = () => {
    const blogCount = 10;
    const adminCount = 5;

    const columns = [
        {
            title: 'No',
            dataIndex: 'no',
            key: 'no',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Publisher',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Judul',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Deskripsi',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Tgl Publish',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Gambar',
            dataIndex: 'role',
            key: 'role',
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            email: 'john.brown@example.com',
            role: 'Admin',
        },
        {
            key: '2',
            name: 'Jim Green',
            email: 'jim.green@example.com',
            role: 'Editor',
        },
        {
            key: '3',
            name: 'Joe Black',
            email: 'joe.black@example.com',
            role: 'Author',
        },
    ];

    return (
        <div className="p-4">
            <Row gutter={16} className="mb-6 p-4 rounded-lg">
                <Col span={12}>
                    <Card title={<span className='text-white'>Jumlah Blog</span>} bordered={false} className="p-4 text-white font-bold bg-tosca shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        {blogCount}
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title={<span className='text-white'>Jumlah Admin</span>} bordered={false} className="p-4 bg-lime-900 text-white font-bold shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        {adminCount}
                    </Card>
                </Col>
            </Row>
            <div className="mt-6">
                <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{ x: '100%' }}
                />
            </div>
        </div>
    );
};

export default Dashboard;
