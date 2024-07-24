import { useEffect, useState } from 'react';
import { Image, Row, Col, Card, Spin, Button, Popconfirm, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { baseURLAPI } from '../../helpers/helper';

export const Images = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(baseURLAPI('images'));
                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.error('Error fetching images:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    const handleDelete = async (fileName) => {
        try {
            const response = await fetch(baseURLAPI('images'), {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fileName })
            });

            if (response.ok) {
                message.success('Image deleted successfully');
                setImages(images.filter(image => image.name !== fileName));
            } else {
                message.error('Error deleting image');
            }
        } catch (error) {
            console.error('Error deleting image:', error);
            message.error('Error deleting image');
        }
    };

    if (loading) {
        return <Spin />;
    }

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">GCS Images</h1>
            <Row gutter={[16, 16]}>
                {images.map((image) => (
                    <Col key={image.name} xs={24} sm={12} md={8} lg={6}>
                        <Card
                            hoverable
                            cover={
                                <Image
                                    src={image.url}
                                    alt={image.name}
                                    preview={{
                                        src: image.url
                                    }}
                                />
                            }
                            actions={[
                                <Popconfirm
                                    key={image.name}
                                    title="Are you sure you want to delete this image?"
                                    onConfirm={() => handleDelete(image.name)}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <Button
                                        type="link"
                                        icon={<DeleteOutlined />}
                                        danger
                                    >
                                        Delete
                                    </Button>
                                </Popconfirm>
                            ]}
                        >
                            <Card.Meta title={`Image ${image.name}`} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};
