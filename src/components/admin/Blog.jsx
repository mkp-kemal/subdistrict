import { useEffect, useState } from 'react';
import { Form, Input, Button, Upload, Card, message, Modal, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import dayjs from 'dayjs';
import { baseURLAPI } from '../../helpers/helper';

// eslint-disable-next-line react/prop-types
const Blog = ({ user }) => {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [gotongRoyong, setGotongRoyong] = useState(false);
    const [masyarakat, setMasyarakat] = useState(false);
    const [wisata, setWisata] = useState(false);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user) {
            setUserData(user);
        }
    }, [user]);

    const email = userData?.email;

    const handleCancel = () => setPreviewVisible(false);

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const handleUploadChange = info => {
        setFileList(info.fileList);
    };

    const handleFinish = async values => {
        setLoading(true);
        const token = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .find(cookie => cookie[0].trim() === 'jwt')?.[1];

        const formData = new FormData();
        formData.append('publisher', email);
        formData.append('title', values.title);
        formData.append('description', values.description);
        formData.append('date', values.date.format('YYYY-MM-DD'));
        if (fileList.length > 0) {
            formData.append('image', fileList[0].originFileObj);
        }
        formData.append('gotongRoyong', gotongRoyong);
        formData.append('masyarakat', masyarakat);
        formData.append('wisata', wisata);

        try {
            await axios.post(baseURLAPI('post'), formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            });
            message.success('Berhasil memposting blog');
            form.resetFields();
            setFileList([]);
            setGotongRoyong(false);
            setMasyarakat(false);
            setWisata(false);
        } catch (error) {
            message.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    return (
        <div className="p-4">
            <Card title="Create Blog" className="shadow-lg">
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleFinish}
                    initialValues={{
                        date: dayjs(),
                        publisher: email
                    }}
                >
                    <Form.Item
                        name="title"
                        label="Judul (max 23 huruf)"
                        rules={[{ required: true, message: 'Masukan Judul' }]}
                    >
                        <Input maxLength={23} />
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
                        <DatePicker format="YYYY-MM-DD" />
                    </Form.Item>
                    <Form.Item
                        name="image"
                        label="Upload Gambar"
                    >
                        <Upload
                            name="image"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleUploadChange}
                            beforeUpload={() => false}
                            accept='image/*'
                        >
                            {fileList.length >= 1 ? null : uploadButton}
                        </Upload>
                        <Modal
                            visible={previewVisible}
                            title={previewTitle}
                            footer={null}
                            onCancel={handleCancel}
                        >
                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                        </Modal>
                    </Form.Item>
                    <Form.Item
                        label="Kategori"
                        className="flex flex-col"
                    >
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="gotongRoyong"
                                checked={gotongRoyong}
                                onChange={() => setGotongRoyong(!gotongRoyong)}
                                className="mr-2"
                            />
                            <label htmlFor="gotongRoyong" className="text-sm">Gotong-royong</label>
                        </div>
                        <div className="flex items-center mt-2">
                            <input
                                type="checkbox"
                                id="masyarakat"
                                checked={masyarakat}
                                onChange={() => setMasyarakat(!masyarakat)}
                                className="mr-2"
                            />
                            <label htmlFor="masyarakat" className="text-sm">Masyarakat</label>
                        </div>
                        <div className="flex items-center mt-2">
                            <input
                                type="checkbox"
                                id="wisata"
                                checked={wisata}
                                onChange={() => setWisata(!wisata)}
                                className="mr-2"
                            />
                            <label htmlFor="wisata" className="text-sm">Wisata</label>
                        </div>
                    </Form.Item>
                    <Form.Item>
                        {loading ? (
                            <Button type="primary" htmlType="submit" loading>
                            </Button>
                        ) : (
                            <Button type="primary" htmlType="submit">Posting</Button>
                        )}
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default Blog;
