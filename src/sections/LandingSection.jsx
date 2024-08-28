import { useState } from 'react';
import { Row, Col, Modal } from 'antd';
import { FaGlobe, FaCalendarAlt } from 'react-icons/fa';
import foto1 from './../assets/img15.jpg';
import foto2 from './../assets/bg.png';
import logo1 from './../assets/logo_nagrak2.png';
import logo2 from './../assets/logo.png';

const LandingSection = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="bg-tosca200 text-white py-20 mt-52">
            <div className="container mx-auto text-center">
                {/* Row untuk Logo */}
                <Row justify="center" gutter={[16, 16]} className="mb-6 rounded-full">
                    <div className="flex bg-white rounded-full p-2">
                        <Col>
                            <img
                                src={logo1}
                                alt="Logo Nagrak"
                                className="h-16 mx-auto"
                            />
                        </Col>
                        <Col>
                            <img
                                src='https://fst.uinsgd.ac.id/wp-content/uploads/2020/05/cropped-logo-uin.png'
                                alt="Logo Desa"
                                className="h-16 mx-auto"
                            />
                        </Col>
                        <Col>
                            <img
                                src={logo2}
                                alt="Logo Desa"
                                className="h-16 mx-auto"
                            />
                        </Col>
                    </div>
                </Row>

                <h1 className="text-4xl font-bold mb-4">Penyerahan Website Desa Nagrak</h1>
                <p className="text-lg mb-6">Mari bersama-sama menyaksikan penyerahan resmi website desa yang akan memajukan informasi dan pelayanan publik.</p>

                <Row justify="center" gutter={[16, 16]}>
                    <Col span={24} md={12}>
                        <img
                            src={foto1}
                            alt="Desa Nagrak"
                            className="rounded-lg mb-6 mx-auto"
                        />
                    </Col>
                    <Col span={24} md={12}>
                        <img
                            src={foto2}
                            alt="Desa Nagrak 2"
                            className="rounded-lg mb-6 mx-auto cursor-pointer"
                            onClick={showModal}
                        />
                    </Col>
                </Row>

                <Row justify="center" gutter={[16, 16]}>
                    <Col>
                        <div className="flex items-center justify-center">
                            <FaGlobe className="text-3xl mr-2" />
                            <span className="text-lg">Website Desa Nagrak</span>
                        </div>
                    </Col>
                    <Col>
                        <div className="flex items-center justify-center">
                            <FaCalendarAlt className="text-3xl mr-2" />
                            <span className="text-lg">Tanggal: 30 Agustus 2024</span>
                        </div>
                    </Col>
                </Row>

                <Modal
                    title="Website Desa Nagrak"
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    footer={null}
                    width={800}
                >
                    <iframe
                        src="https://nagrakciater.vercel.app/"
                        title="Website Desa Nagrak"
                        width="100%"
                        height="500px"
                        style={{ border: 'none' }}
                    ></iframe>
                </Modal>
            </div>
        </div>
    );
};

export default LandingSection;
