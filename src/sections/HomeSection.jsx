/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { FaCar, FaMotorcycle, FaPeopleCarry } from 'react-icons/fa';
import { FaPeopleGroup, FaUmbrellaBeach } from 'react-icons/fa6';
import { ImSpinner10 } from 'react-icons/im';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { formatDate } from '../components/FormatDate';
import { baseURLAPI } from '../helpers/helper';
import BgComponent from '../components/BgComponent';
import { truncateText } from '../components/Truncated';
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import foto1 from './../assets/img2.jpg';
import foto2 from './../assets/img7.jpg';
import foto3 from './../assets/img8.jpg';

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
          <Footer />
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
          <p className="text-gray-600">Berikut kegiatan-kegiatan yang dilakukan di desa</p>
        </div>
        <div className="overflow-x-auto">
          <div className="flex space-x-4">
            {blogs.map((blog, index) => (
              <div key={index} className="flex-shrink-0 w-64 sm:w-72 cursor-pointer" onClick={() => handleClick(blog.title)}>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="relative">
                    <span className="absolute top-2 left-2 text-white bg-tosca200 bg-opacity-75 px-2 py-1 rounded-full text-xs">{formatDate(blog.date)}</span>
                    <div className="bg-cover bg-center w-full h-40" style={{ backgroundImage: `url(${blog.image})` }}></div>
                  </div>
                  <div className="detail p-4">
                    <h4 className="text-base font-bold">{blog.title}</h4>
                    <p className="text-gray-600 text-sm">{truncateText(blog.description, 60)}</p>
                  </div>
                  <div className="options p-2 bg-tosca justify-around">
                    <ul className="flex justify-around">
                      {blog.gotongRoyong && (
                        <li className="w-8 h-8 rounded-full bg-tosca200 flex justify-center items-center">
                          <FaPeopleCarry className="text-white" />
                        </li>
                      )}
                      {blog.masyarakat && (
                        <li className="w-8 h-8 rounded-full bg-tosca200 flex justify-center items-center">
                          <FaPeopleGroup className="text-white" />
                        </li>
                      )}
                      {blog.wisata && (
                        <li className="w-8 h-8 rounded-full bg-tosca200 flex justify-center items-center">
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
          <h2 className="text-3xl font-bold">Objek Wisata Terdekat</h2>
          <p className="text-gray-600">Berikut objek wisata yang ada di dekat desa</p>
        </div>
        <div className="overflow-x-auto">
          <div className="flex justify-around space-x-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex-shrink-0 w-64 sm:w-72">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <NavLink to={`/wisata/${index === 0 ? 'curug-koleangkak' : index === 1 ? 'curug-cipondok' : 'curug-dayang-sumbi'}`} className="relative block">
                    <div className="bg-cover bg-center w-full h-48" style={{ backgroundImage: `url(${index === 0 ? foto1 : index === 1 ? foto2 : foto3})` }}>
                      {index === 0 || index === 1 ? <div className="absolute top-0 left-0 bg-tosca200 text-white p-1 rounded-br-lg">Rekomendasi</div> : null}
                    </div>
                    <div className="revire flex justify-between items-center p-1">
                      <ul className="rat flex space-x-1">
                        {[1, 2, 3].map((star) => (
                          <li key={star}>
                            <i className="fa fa-star text-yellow-500"></i>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="detail p-4">
                      <h4 className="text-base font-bold">{index === 0 ? 'Curug Koleangkak' : index === 1 ? 'Curug Cipondok' : 'Curug Dayang Sumbi'}</h4>
                      <p className="text-gray-600 text-sm lg:md">
                        {index === 0 ? (
                          <>
                            <p>Tipe: Berenang, Ramai</p>
                            <p>Tiket Masuk: Rp 10.000/orang</p>
                            <p>Harga Tikar: Rp 15.000/tikar</p>
                            <p>Harga Makanan: ≥Rp 10.000</p>
                            <p>
                              Buka: Setiap Hari <span className="text-red-600">(Jumat Tutup)</span>
                            </p>
                            <p>Jam: 07:00 - 17:00</p>
                            <p>Parkir</p>
                            <div className="flex justify-center items-center space-x-4">
                              <p className="flex flex-col items-center">
                                <FaMotorcycle />
                                <span className="text-sm">5k</span>
                              </p>
                              <p className="flex flex-col items-center">
                                <FaCar />
                                <span className="text-sm">10k</span>
                              </p>
                            </div>
                          </>
                        ) : index === 1 ? (
                          <>
                            <p>Tipe: Berenang, Santai</p>
                            <p>Tiket Masuk: Rp 10.000/orang</p>
                            <p>Harga Tikar: -</p>
                            <p>Harga Makanan: ≥Rp 10.000</p>
                            <p>Buka: Setiap Hari</p>
                            <p>Jam: 07:00 - 17:00</p>
                            <p>Parkir</p>
                            <div className="flex justify-center items-center space-x-4">
                              <p className="flex flex-col items-center">
                                <FaMotorcycle />
                                <span className="text-sm">5k</span>
                              </p>
                              <p className="flex flex-col items-center">
                                <FaCar />
                                <span className="text-sm">10k</span>
                              </p>
                            </div>
                          </>
                        ) : (
                          <>
                            <p>Tipe: Family Gathering</p>
                            <p>Tiket Masuk: Rp 10.000/orang</p>
                            <p>Harga Tikar: -</p>
                            <p>Harga Makanan: ≥Rp 10.000</p>
                            <p>Buka: Setiap Hari</p>
                            <p>Jam: 07:00 - 17:00</p>
                            <p>Parkir</p>
                            <div className="flex justify-center items-center space-x-4">
                              <p className="flex flex-col items-center">
                                <FaMotorcycle />
                                <span className="text-sm">3k</span>
                              </p>
                              <p className="flex flex-col items-center">
                                <FaCar />
                                <span className="text-sm">8k</span>
                              </p>
                            </div>
                          </>
                        )}
                      </p>
                    </div>
                    <div className="flex text-white font-bold bg-tosca200 bg-opacity-75 p-2 justify-end">
                      <p className="mr-5">Update 2024</p>
                    </div>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [navbarItems, setNavbarItems] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchNavbarItems = async () => {
    try {
      const response = await fetch(baseURLAPI('navbar'));
      const data = await response.json();
      setNavbarItems(data[0] || null);
    } catch (error) {
      console.error('Error fetching navbar items:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNavbarItems();
  }, []);

  return (
    <footer className="bg-tosca200 text-white py-8 rounded-tl-full rounded-tr-full">
      <div className="container mx-auto px-52">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
          {loading ? (
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="2em" viewBox="0 0 24 24">
                <circle cx="4" cy="12" r="3" fill="white">
                  <animate id="svgSpinners3DotsScale0" attributeName="r" begin="0;svgSpinners3DotsScale1.end-0.25s" dur="0.75s" values="3;.2;3" />
                </circle>
                <circle cx="12" cy="12" r="3" fill="white">
                  <animate attributeName="r" begin="svgSpinners3DotsScale0.end-0.6s" dur="0.75s" values="3;.2;3" />
                </circle>
                <circle cx="20" cy="12" r="3" fill="white">
                  <animate id="svgSpinners3DotsScale1" attributeName="r" begin="svgSpinners3DotsScale0.end-0.45s" dur="0.75s" values="3;.2;3" />
                </circle>
              </svg>
            </div>
          ) : (
            <>
              <div className="mb-8 md:mb-0 w-52 md:w-full">
                <h3 className="text-2xl font-bold mb-4">Kontak Kami</h3>
                <p>
                  <FaEnvelope className="inline-block mr-2" />
                  {navbarItems?.header[0]}
                </p>
                <div className="flex justify-center md:justify-start space-x-4 mt-10">
                  <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-3xl" />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Lokasi</h3>
                <p className="mb-4">Desa Nagrak Kecamatan Ciater Kabupaten Subang</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126411.58782255615!2d107.55099348205198!3d-6.730664304237963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6909d2bc37d943%3A0x401e8f1fc28b140!2sNagrak%2C%20Ciater%2C%20Subang%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1624608113432!5m2!1sen!2sid&markers=color:red%7Clabel:K%7C-6.730664304237963,107.55099348205198"
                  height="100"
                  loading="lazy"
                  className="rounded-xl"
                ></iframe>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="text-center mt-8 w-full">
        <p>&copy; 2024 mkp. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export { HomeSection, Footer };
