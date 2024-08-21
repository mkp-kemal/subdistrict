import { useEffect, useState } from 'react';
import { Table, Form, Input, Button, Card, message, DatePicker, Modal, Space } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import dayjs from 'dayjs';
import { baseURLAPI } from '../../helpers/helper';
import moment from 'moment';
import { ImSpinner10 } from 'react-icons/im';

// eslint-disable-next-line react/prop-types
const Agenda = ({ user }) => {
    const [form] = Form.useForm();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [agendas, setAgendas] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [editingAgenda, setEditingAgenda] = useState(null);

    useEffect(() => {
        if (user) {
            setUserData(user);
        }
        fetchAgendas();
    }, [user]);

    const fetchAgendas = async () => {
        try {
            const response = await axios.get(baseURLAPI('agenda'));
            setAgendas(response.data);
        } catch (error) {
            message.error('Gagal mengambil data agenda');
        } finally {
            setLoading(false);
        }
    };

    const email = userData?.email;

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

        try {
            if (editingAgenda) {
                // Update agenda
                await axios.put(`${baseURLAPI('agenda')}/${editingAgenda.id}`, formData, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });
                message.success('Berhasil memperbarui agenda');
            } else {
                // Create agenda
                await axios.post(baseURLAPI('post/agenda'), formData, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });
                message.success('Berhasil memposting agenda');
            }

            form.resetFields();
            setModalVisible(false);
            fetchAgendas();
        } catch (error) {
            message.error('Gagal menyimpan agenda, coba lagi!');
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = record => {
        console.log(record);
        
        setEditingAgenda(record);
        form.setFieldsValue({
            title: record.title,
            description: record.description,
            date: dayjs(record.date),
        });
        setModalVisible(true);
    };

    const handleDelete = async id => {
        console.log(id);

        const token = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .find(cookie => cookie[0].trim() === 'jwt')?.[1];

        try {
            await axios.delete(`${baseURLAPI('agenda')}/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            message.success('Agenda berhasil dihapus');
            fetchAgendas();
        } catch (error) {
            message.error('Gagal menghapus agenda');
        }
    };
    const formatDateAdmin = (dateString) => {
        const date = new Date(dateString);

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
            title: 'Judul Agenda',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Deskripsi',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Tanggal Agenda',
            dataIndex: 'date',
            key: 'date',
            render: (text) => text ? formatDateAdmin(text) : '-',
        },
        {
            title: 'Aksi',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(record)}
                    />
                    <Button
                        icon={<DeleteOutlined />}
                        onClick={() => handleDelete(record._id)}
                        danger
                    />
                </Space>
            ),
        },
    ];

    const handleAdd = () => {
        setEditingAgenda(null);
        form.resetFields();
        setModalVisible(true);
    };

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <ImSpinner10 className="text-4xl animate-spin text-tosca" />
                </div>
            ) : (
                <div className="p-4">
                    <Card
                        title="Daftar Agenda"
                        className="shadow-lg"
                        extra={
                            <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
                                Tambah Agenda
                            </Button>
                        }
                    >
                        <Table
                            columns={columns}
                            dataSource={agendas}
                            rowKey="id"
                            pagination={{ pageSize: 10 }}
                        />
                    </Card>

                    <Modal
                        title={editingAgenda ? 'Edit Agenda' : 'Tambah Agenda'}
                        visible={modalVisible}
                        onCancel={() => setModalVisible(false)}
                        footer={null}
                    >
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={handleFinish}
                            initialValues={{
                                date: dayjs(),
                            }}
                        >
                            <Form.Item
                                name="title"
                                label="Judul Agenda"
                                rules={[{ required: true, message: 'Masukan Judul Agenda' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="description"
                                label="Deskripsi Agenda"
                                rules={[{ required: true, message: 'Masukan Deskripsi Agenda' }]}
                            >
                                <Input.TextArea rows={4} />
                            </Form.Item>
                            <Form.Item
                                label="Tanggal Agenda"
                                name="date"
                                rules={[{ required: true, message: 'Masukan Tanggal Agenda' }]}
                            >
                                <DatePicker
                                    format="YYYY-MM-DD"
                                    disabledDate={(current) => current && current < moment().startOf('day')}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" loading={loading}>
                                    {editingAgenda ? 'Simpan Perubahan' : 'Posting'}
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                </div>
            )
            }
        </>
    );
};

export default Agenda;
