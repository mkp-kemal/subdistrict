import { Table, Card, Row, Col, Modal, Image, Button, Form, Input, DatePicker, Upload, message } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { UploadOutlined, DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { baseURLAPI } from '../../helpers/helper';
import { ImSpinner10 } from 'react-icons/im';
import { truncateText } from '../Truncated';

const { confirm } = Modal;

const Dashboard = () => {
    const [blogs, setBlogs] = useState([]);
    const [blogCount, setBlogCount] = useState(0);
    const [adminCount, setAdminCount] = useState(0);
    const [previewImage, setPreviewImage] = useState('');
    const [previewVisible, setPreviewVisible] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);
    const [editorValue, setEditorValue] = useState('');
    const [loading, setLoading] = useState(true);
    const [loadingModal, setLoadingModal] = useState(false);


    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(baseURLAPI('blogs'));
                setBlogs(response.data);
                setBlogCount(response.data.length);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);
            }
        };

        const fetchCountAdmin = async () => {
            const token = document.cookie
                .split(';')
                .map(cookie => cookie.split('='))
                .find(cookie => cookie[0].trim() === 'jwt')?.[1];

            try {
                const response = await axios.get(baseURLAPI('users'), {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setAdminCount(response.data.length);
            } catch (error) {
                console.error('Error fetching admin count:', error);
            }
        };

        fetchBlogs();
        fetchCountAdmin();
    }, []);


    const handleEdit = (id) => {
        const blog = blogs.find(blog => blog._id === id);
        setSelectedBlog(blog);
        form.setFieldsValue({
            title: blog.title,
            description: blog.description,
            story: blog.story,
            date: dayjs(blog.date),
        });
        setPreviewImage(blog.image);
        setEditorValue(blog.story);
        setPreviewVisible(true);
    };

    const handleCancel = () => {
        setPreviewVisible(false);
        setSelectedBlog(null);
        setFileList([]);
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
        setLoadingModal(true);

        const token = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .find(cookie => cookie[0].trim() === 'jwt')?.[1];
        try {
            await axios.delete(`${baseURLAPI('blog')}/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            message.success('Blog berhasil dihapus');
            setBlogs(blogs.filter(blog => blog._id !== id));
            setBlogCount(blogCount - 1);
        } catch (error) {
            message.error('Gagal menghapus blog, coba lagi');
            console.error(error);
        } finally {
            setLoadingModal(false);
        }
    };

    const handleFinish = async (values) => {
        setLoadingModal(true);

        const token = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .find(cookie => cookie[0].trim() === 'jwt')?.[1];

        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('description', values.description);
        formData.append('story', editorValue);
        formData.append('date', values.date.format('YYYY-MM-DD'));

        if (fileList.length > 0) {
            formData.append('image', fileList[0].originFileObj);
        }

        try {
            await axios.put(`${baseURLAPI('blog')}/${selectedBlog._id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            });
            message.success('Update blog berhasil');
            const response = await axios.get(baseURLAPI('blogs'));
            setBlogs(response.data);
            setBlogCount(response.data.length);
            handleCancel();
        } catch (error) {
            message.error('Gagal update blog, coba lagi yaa');
            console.error(error);
        } finally {
            setLoadingModal(false);
        }
    };

    const formatDateAdmin = (dateString) => {
        const [day, month, year] = dateString.split('/');
    
        const date = new Date(`${year}-${month}-${day}`);
    
        const dayFormatter = new Intl.DateTimeFormat('id-ID', { weekday: 'long' });
        const dateFormatter = new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    
        const dayString = dayFormatter.format(date);
        const dateStringFormatted = dateFormatter.format(date);
    
        return `${dayString}, ${dateStringFormatted}`;
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
            render: (text) => text ? truncateText(text) : '-',
        },
        {
            title: 'Tgl Publish',
            dataIndex: 'date',
            key: 'date',
            render: (text) => text ? formatDateAdmin(text) : '-',
        },
        {
            title: 'Gambar',
            dataIndex: 'image',
            key: 'image',
            render: (text) => (
                <div>
                    <Image
                        preview={false}
                        src={text}
                        alt="Blog"
                        className="object-cover cursor-pointer"
                        onClick={() => {
                            setPreviewImage(text);
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
        <>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <ImSpinner10 className="text-4xl animate-spin text-tosca" />
                </div>
            ) : (
                 <>
                 </>
            )}
        </>
    );
};

export default Dashboard;
