import React, { useEffect, useState } from 'react';
import { Image, Row, Col, Card } from 'antd';

export const Images = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('https://picsum.photos/v2/list?page=1&limit=12');
                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Picsum Images</h1>
            <Row gutter={[16, 16]}>
                {images.map((image) => (
                    <Col key={image.id} xs={24} sm={12} md={8} lg={6}>
                        <Card
                            hoverable
                            cover={
                                <Image
                                    src={`https://picsum.photos/id/${image.id}/300/200`}
                                    alt={image.author}
                                    preview={{
                                        src: `https://picsum.photos/id/${image.id}/1200/800`
                                    }}
                                />
                            }
                        >
                            <Card.Meta title={image.author} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};
