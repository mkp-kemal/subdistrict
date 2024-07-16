// src/components/Dashboard.jsx
import { Table, Card, Row, Col, Modal, Image, Button, Form, Input, DatePicker, Upload, message } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { UploadOutlined } from '@ant-design/icons';

const Dashboard = () => {
    const [blogs, setBlogs] = useState([]);
    const [blogCount, setBlogCount] = useState(0);
    const [adminCount] = useState(5);
    const [previewImage, setPreviewImage] = useState('');
    const [previewVisible, setPreviewVisible] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [form] = Form.useForm();

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

    const handleEdit = (id) => {
        const blog = blogs.find(blog => blog._id === id);
        setSelectedBlog(blog);
        form.setFieldsValue({
            publisher: blog.publisher,
            title: blog.title,
            description: blog.description,
            date: dayjs(blog.date),
            image: null,  // Clear image field
        });
        setPreviewImage(`http://localhost:5000/${blog.image.replace(/\\/g, '/')}`);
        setPreviewVisible(true);
    };

    const handleCancel = () => {
        setPreviewVisible(false);
        setSelectedBlog(null);
    };

    const handleFinish = async (values) => {
        const formData = new FormData();
        formData.append('publisher', values.publisher);
        formData.append('title', values.title);
        formData.append('description', values.description);
        formData.append('date', values.date.format('YYYY-MM-DD'));
        if (fileList.length > 0) {
            formData.append('image', fileList[0].originFileObj);
        }

        try {
            await axios.put(`http://localhost:5000/v1/api/blogs/${selectedBlog._id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            message.success('Update blog berhasil');
            const response = await axios.get('http://localhost:5000/v1/api/blogs');
            setBlogs(response.data);
            setBlogCount(response.data.length);
            handleCancel();
        } catch (error) {
            message.error('Gagal update blog, coba lagi');
            console.error(error);
        }
    };

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
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Button
                    type="primary"
                    onClick={() => handleEdit(record.key)}  // Open the edit modal
                >
                    Edit
                </Button>
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

    const [fileList, setFileList] = useState([]);
    const handleUploadChange = info => {
        setFileList(info.fileList);
    };
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

            {/* Modal Edit Blog */}
            <Modal
                visible={selectedBlog !== null}
                title="Edit Blog"
                onCancel={handleCancel}
                footer={null}
                centered
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleFinish}
                    initialValues={{
                        publisher: selectedBlog?.publisher,
                        title: selectedBlog?.title,
                        description: selectedBlog?.description,
                        date: dayjs(selectedBlog?.date),
                    }}
                >
                    <Form.Item
                        name="publisher"
                        label="Publisher"
                        rules={[{ required: true, message: 'Masukan Nama Publisher' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="title"
                        label="Judul"
                        rules={[{ required: true, message: 'Masukan Judul' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Deskripsi"
                        rules={[{ required: true, message: 'Masukan Deskripsi' }]}
                    >
                        <Input.TextArea rows={4} />
                    </Form.Item>
                    <Form.Item
                        label="Tanggal"
                        name="date"
                        rules={[{ required: true, message: 'Masukan Tanggal Publish' }]}
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item
                        name="image"
                        label="Gambar"
                        valuePropName="file"
                    >
                        <Upload
                            name="image"
                            listType="picture-card"
                            showUploadList={false}
                            beforeUpload={(file) => {
                                const reader = new FileReader();
                                reader.onload = () => setPreviewImage(reader.result);
                                reader.readAsDataURL(file);
                                return false;
                            }}
                            onChange={handleUploadChange}
                        >
                            {previewImage ? (
                                <Image
                                    preview={false}
                                    src={previewImage}
                                    alt="Blog"
                                    className="object-cover"
                                    width={200}
                                    height={100}
                                />
                            ) : (
                                <div>
                                    <UploadOutlined />
                                    <div className="ant-upload-text">Upload</div>
                                </div>
                            )}
                        </Upload>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Ubah Blog</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Dashboard;
