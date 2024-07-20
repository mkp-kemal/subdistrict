import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Image, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FaPeopleCarry, FaUmbrellaBeach } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import { formatDate } from '../components/FormatDate';
import DOMPurify from 'dompurify';


const BlogDetailSection = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/v1/api/blog/${id}`);
                setBlog(response.data);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };

        fetchBlog();
    }, [id]);

    if (!blog) return <div>Loading...</div>;

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="container mx-auto py-8 px-4 mt-28">
            <Button onClick={handleBack}>Kembali</Button>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
                <div className="mb-4">
                    <span className="text-sm text-gray-600">{formatDate(blog.date)}</span>
                </div>
                <div className="mb-4">
                    <Image
                        src={`http://localhost:5000/${blog.image.replace(/\\/g, '/')}`}
                        alt="Blog"
                        className="object-cover"
                        width="100%"
                        height={400}
                    />
                </div>
                <div className="mb-4">
                    <p className="text-xl text-gray-700 font-semibold">{blog.description}</p>
                </div>
                <div
                    className="text-gray-700 mt-10 custom-list custom-paragraph"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.story) }}
                />
                <Divider />
                <div className="options p-4 bg-tosca justify-around">
                    <h2 className="text-sm font-semibold text-white">Hubungan Kegiatan</h2>
                    <ul className="flex justify-around">
                        {blog.gotongRoyong && (
                            <li className="flex flex-col items-center">
                                <FaPeopleCarry className="text-white text-2xl" />
                                <span className="text-xs text-white">Masyarakat</span>
                            </li>
                        )}
                        {blog.masyarakat && (
                            <li className="flex flex-col items-center">
                                <FaPeopleGroup className="text-white text-2xl" />
                                <span className="text-xs text-white">Gotong-royong</span>
                            </li>
                        )}
                        {blog.wisata && (
                            <li className="flex flex-col items-center">
                                <FaUmbrellaBeach className="text-white text-2xl" />
                                <span className="text-xs text-white">Wisata</span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailSection;
