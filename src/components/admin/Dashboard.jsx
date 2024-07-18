// src/components/Dashboard.jsx
import { Table, Card, Row, Col, Modal, Image, Button, Form, Input, DatePicker, Upload, message } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { UploadOutlined, DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import ReactQuill from 'react-quill';  // Import ReactQuill
import 'react-quill/dist/quill.snow.css';  // Import Quill CSS

const { confirm } = Modal;

const Dashboard = () => {
    const [blogs, setBlogs] = useState([]);
    const [blogCount, setBlogCount] = useState(0);
    const [adminCount] = useState(5);
    const [previewImage, setPreviewImage] = useState('');
    const [previewVisible, setPreviewVisible] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);
    const [editorValue, setEditorValue] = useState('');

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
            story: blog.story,
            date: dayjs(blog.date),
            image: null,  // Clear image field
        });
        setPreviewImage(`http://localhost:5000/${blog.image.replace(/\\/g, '/')}`);
        setEditorValue(blog.story);  // Set editor value
        setPreviewVisible(true);
    };

    const handleCancel = () => {
        setPreviewVisible(false);
        setSelectedBlog(null);
    };

    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Apakah Anda yakin ingin menghapus blog ini?',
            icon: <ExclamationCircleOutlined />,
            content: 'Tindakan ini tidak dapat dibatalkan.',
            okText: 'Ya, hapus',
            okType: 'danger',
            cancelText: 'Tidak',
            onOk() {
                handleDelete(id);
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/v1/api/blog/${id}`);
            message.success('Blog berhasil dihapus');
            setBlogs(blogs.filter(blog => blog._id !== id));
            setBlogCount(blogCount - 1);
        } catch (error) {
            message.error('Gagal menghapus blog, coba lagi');
            console.error(error);
        }
    };

    const handleFinish = async (values) => {
        const formData = new FormData();
        formData.append('publisher', values.publisher);
        formData.append('title', values.title);
        formData.append('description', values.description);
        formData.append('story', editorValue);  // Use editorValue
        formData.append('date', values.date.format('YYYY-MM-DD'));
        if (fileList.length > 0) {
            formData.append('image', fileList[0].originFileObj);
        }

        try {
            await axios.put(`http://localhost:5000/v1/api/blog/${selectedBlog._id}`, formData, {
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
                            setPreviewImage(`http://localhost:5000/${text.replace(/\\/g, '/')}`);
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
            width: 100,
            render: (text, record) => (
                <div>
                    <Button
                        type="primary"
                        icon={<EditOutlined />}
                        size="small"
                        onClick={() => handleEdit(record.key)}
                    >
                    </Button>
                    <Button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded ml-2"
                        icon={<DeleteOutlined />}
                        size="small"
                        onClick={() => showDeleteConfirm(record.key)}
                    >
                    </Button>
                </div>
            ),
        },
    ];

    const data = blogs.map(blog => ({
        key: blog._id,
        publisher: blog.publisher,
        title: blog.title,
        description: blog.description,
        story: blog.story,
        date: new Date(blog.date).toLocaleDateString(),
        image: blog.image,
    }));

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
                onCancel={() => setPreviewVisible(false)}
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
                        story: selectedBlog?.story,
                        date: dayjs(selectedBlog?.date),
                    }}
                >
                    <Form.Item
                        name="story"
                        label="Ceritakan Lebih Detail"
                        rules={[{ required: true, message: 'Masukan cerita' }]}
                    >
                        <ReactQuill
                            value={editorValue}
                            onChange={setEditorValue}
                            theme="snow"
                            style={{ height: '300px' }}
                            modules={
                                {
                                    toolbar: [
                                        ['bold', 'italic', 'underline', 'strike', 'link', 'blockquote', 'code'],
                                        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                                    ],
                                }
                            }
                        />
                    </Form.Item>

                    <Form.Item
                    >
                    </Form.Item>
                    
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
