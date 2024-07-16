// src/components/Dashboard.jsx
import { Table, Card, Row, Col, Modal, Image } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Dashboard = () => {
    const [blogs, setBlogs] = useState([]);
    const [blogCount, setBlogCount] = useState(0);
    const [adminCount] = useState(5);
    const [previewImage, setPreviewImage] = useState('');  // State untuk menyimpan URL gambar yang akan dipreview
    const [previewVisible, setPreviewVisible] = useState(false);  // State untuk mengatur visibilitas modal preview

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/v1/api/blogs');
                setBlogs(response.data);
                setBlogCount(response.data.length);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    const columns = [
        {
            title: 'No',
            dataIndex: 'no',
            key: 'no',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Publisher',
            dataIndex: 'publisher',
            key: 'publisher',
        },
        {
            title: 'Judul',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Deskripsi',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Tgl Publish',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Gambar',
            dataIndex: 'image',
            key: 'image',
            render: (text) => (
                <div>
                    <Image
                        preview={false}
                        src={`http://localhost:5000/${text.replace(/\\/g, '/')}`}
                        alt="Blog"
                        className="object-cover cursor-pointer"
                        onClick={() => {
                            setPreviewImage(`http://localhost:5000/${text.replace(/\\/g, '/')}`);  // Set URL gambar untuk preview
                            setPreviewVisible(true);
                        }}
                        width={100}
                        height={40}
                    />
                </div>
            ),
        },
    ];

    const data = blogs.map(blog => ({
        key: blog._id,
        publisher: blog.publisher,
        title: blog.title,
        description: blog.description,
        date: new Date(blog.date).toLocaleDateString(),
        image: blog.image,
    }));

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
            <Modal
                visible={previewVisible}
                footer={null}
                onCancel={() => setPreviewVisible(false)}  // Menyembunyikan modal saat cancel
                centered
            >
                <Image
                    src={previewImage}
                    alt="Preview"
                    className='w-12 h-12 object-cover'
                />
            </Modal>
        </div>
    );
};

export default Dashboard;
