import { useEffect, useState } from 'react';
import { FaPeopleCarry } from 'react-icons/fa';
import { FaPeopleGroup, FaUmbrellaBeach } from 'react-icons/fa6';
import { ImSpinner10 } from "react-icons/im";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../components/FormatDate';
import { baseURLAPI } from '../helpers/helper';
import BgComponent from '../components/BgComponent';

const HomeSection = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(baseURLAPI('blogs'));
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="home-container">
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <ImSpinner10 className="text-4xl animate-spin text-tosca" />
                </div>
            ) : (
                <div className="fade-in">
                    <BgComponent />
                    <Activity blogs={blogs} />
                    <Attractions />
                </div>
            )}
        </div>
    );
};

// eslint-disable-next-line react/prop-types
const Activity = ({ blogs }) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/blog/${id}`);
    };

    return (
        <div className="popular-pack no-bgpack container-fluid bg-gray-50 py-8">
            <div className="container mx-auto">
                <div className="session-title text-center mb-8">
                    <h2 className="text-3xl font-bold">Kegiatan Desa</h2>
                    <p className="text-gray-600">
                        Berikut kegiatan-kegiatan yang dilakukan di desa
                    </p>
                </div>
                <div className="overflow-x-auto">
                    <div className="flex space-x-4">
                        {blogs.map((blog, index) => (
                            <div key={index} className="flex-shrink-0 w-80 cursor-pointer" onClick={() => handleClick(blog.title)}>
                                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                    <div className="relative">
                                        <span className="absolute top-2 left-2 text-white bg-tosca200 bg-opacity-75 px-2 py-1 rounded-full text-xs">
                                            {formatDate(blog.date)}
                                        </span>
                                        <div className="bg-cover bg-center w-full h-48" style={{ backgroundImage: `url(${blog.image})` }}></div>
                                    </div>
                                    <div className="detail p-4">
                                        <h4 className="text-xl font-bold">{blog.title}</h4>
                                        <p className="text-gray-600">
                                            {blog.description}
                                        </p>
                                    </div>
                                    <div className="options p-4 bg-tosca justify-around">
                                        <ul className="flex justify-around">
                                            {blog.gotongRoyong && (
                                                <li className="w-10 h-10 rounded-full bg-tosca200 flex justify-center items-center">
                                                    <FaPeopleCarry className="text-white" />
                                                </li>
                                            )}
                                            {blog.masyarakat && (
                                                <li className="w-10 h-10 rounded-full bg-tosca200 flex justify-center items-center">
                                                    <FaPeopleGroup className="text-white" />
                                                </li>
                                            )}
                                            {blog.wisata && (
                                                <li className="w-10 h-10 rounded-full bg-tosca200 flex justify-center items-center">
                                                    <FaUmbrellaBeach className="text-white" />
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Attractions = () => {
    return (
        <div className="popular-pack container-fluid bg-gray-50 py-8">
            <div className="container mx-auto">
                <div className="session-title text-center mb-8">
                    <h2 className="text-3xl font-bold">Objek Wisata</h2>
                    <p className="text-gray-600">
                        Berikut objek wisata yang ada di dekat desa
                    </p>
                </div>
                <div className="overflow-x-auto">
                    <div className="flex justify-around space-x-4">
                        {[1, 2].map((_, index) => (
                            <div key={index} className="flex-shrink-0 w-80">
                                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                    <div className="relative">
                                        <div className="bg-cover bg-center w-full h-48" style={{ backgroundImage: `url('https://picsum.photos/200/300?random=${index}')` }}></div>
                                    </div>
                                    <div className="revire flex justify-between items-center p-1">
                                        <ul className="rat flex space-x-1">
                                            {[1, 2].map(star => (
                                                <li key={star}><i className="fa fa-star text-yellow-500"></i></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="detail p-4">
                                        <h4 className="text-xl font-bold">{index === 0 ? 'Curug Koleangkak' : 'Wisata Lain'}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSection;
