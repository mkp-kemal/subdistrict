import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Image, Divider, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FaPeopleCarry, FaShareAltSquare, FaUmbrellaBeach } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import { formatDate } from '../components/FormatDate';
import DOMPurify from 'dompurify';
import { baseURLAPI } from '../helpers/helper';
import { ImSpinner10 } from "react-icons/im";
import { Footer } from './HomeSection';
import { PiClockCountdownFill } from "react-icons/pi";

const BlogDetailSection = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`${baseURLAPI('blog')}/${id}`);
                setBlog(response.data);
            } catch (error) {
                console.error('Error fetching blog:', error);
            } finally {
                setLoading(false);
            }
        };

        const fetchRelatedBlogs = async () => {
            try {
                const response = await axios.get(`${baseURLAPI('blogs')}`);
                const filteredBlogs = response.data
                    .filter(b => b.title !== id)
                    .slice(0, 5);
                setRelatedBlogs(filteredBlogs);
            } catch (error) {
                console.error('Error fetching related blogs:', error);
            }
        };

        fetchBlog();
        fetchRelatedBlogs();
    }, [id]);

    console.log(relatedBlogs);
    
    const handleBack = () => {
        navigate(-1);
    };

    const handleShare = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url)
            .then(() => {
                message.success('Link copied to clipboard!');
            })
            .catch(err => {
                message.error('Failed to copy the link!');
                console.error('Error copying text: ', err);
            });
    };

    const removeTextAfterAtSymbol = (text) => {
        return text.replace(/@.*/, '');
    };

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-screen mt-33">
                    <ImSpinner10 className="text-4xl animate-spin text-tosca" />
                </div>
            ) : (
                <>
                    <div className="container mx-auto py-8 px-4 mt-32 fade-in">
                        <Button onClick={handleBack}>Kembali</Button>
                        <Button onClick={handleShare} style={{ marginLeft: '10px' }}><FaShareAltSquare />Share Link</Button>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
                            <div className="mb-4 flex justify-between">
                                <span className="text-sm text-gray-600">{formatDate(blog.date)}</span>
                                <p className="text-sm text-white font-semibold bg-tosca rounded-lg px-2">Author: {removeTextAfterAtSymbol(blog.publisher)}</p>
                            </div>
                            <div className="mb-4">
                                <Image
                                    src={`${blog.image}`}
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
                                            <span className="text-xs text-white">Gotong-royong</span>
                                        </li>
                                    )}
                                    {blog.masyarakat && (
                                        <li className="flex flex-col items-center">
                                            <FaPeopleGroup className="text-white text-2xl" />
                                            <span className="text-xs text-white">Masyarakat</span>
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
                    {/* Related Blogs Section */}
                    <div className="container mx-auto py-8 px-4">
                        <h3 className="text-2xl font-bold mb-4">Berita Terkini</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                            {relatedBlogs.map((relatedBlog) => (
                                <div key={relatedBlog._id} className="bg-white shadow-md rounded-lg p-4">
                                    <h4 className="text-base font-semibold mb-2">{relatedBlog.title}</h4>
                                    <p className="text-xs text-gray-600 items-center flex rounded-xl"><span><PiClockCountdownFill className='text-tosca text-2xl mr-1' /></span><span>{formatDate(relatedBlog.date)}</span></p>
                                    <Image
                                        src={`${relatedBlog.image}`}
                                        alt={relatedBlog.title}
                                        className="object-cover mb-4"
                                        width="100%"
                                        height={150}
                                    />
                                    <Button type="link" onClick={() => navigate(`/blog/${relatedBlog.title}`)}>
                                        Selengkapnya...
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </>
    );
};

export default BlogDetailSection;
