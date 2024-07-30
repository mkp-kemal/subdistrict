import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURLAPI } from '../helpers/helper';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../components/FormatDate';
import { FaPeopleCarry, FaUmbrellaBeach } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import { ImSpinner10 } from 'react-icons/im';
import { truncateText } from '../components/Truncated';
import { Footer } from './HomeSection';

const ActivityKknSection = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await axios.get(baseURLAPI('blogs'));
                setBlogs(response.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchActivities();
    }, []);

    const handleClick = (id) => {
        navigate(`/blog/${id}`);
    };

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <ImSpinner10 className="text-4xl animate-spin text-tosca" />
                </div>
            ) : (
                <>
                    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 mt-28">
                        <div className="bg-white shadow-2xl rounded-xl p-8 max-w-5xl w-full">
                            <div className="relative mb-6">
                                <img src="https://picsum.photos/1200/800?random=1" alt="" className='w-full h-56 object-cover rounded-xl hover:scale-105 duration-300 ' />
                                <img src="https://i.ibb.co.com/WBndm69/Lambang-Kabupaten-Subang-removebg-preview.png" alt="Logo" className="absolute top-0 left-0 h-11 w-10 m-2 bg-white rounded-md" />
                            </div>
                            <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">AKTIVITAS KKN DI DESA NAGRAK</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {blogs.map((blog, index) => (
                                    <div key={index} className="flex-shrink-0 w-70 cursor-pointer" onClick={() => handleClick(blog.title)}>
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
                                                    {truncateText(blog.description, 60)}
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
                    <Footer />
                </>
            )}
        </>
    );
};

export default ActivityKknSection;
