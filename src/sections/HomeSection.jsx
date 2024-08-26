/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { FaCar, FaMotorcycle, FaPeopleCarry } from 'react-icons/fa';
import { FaPeopleGroup, FaUmbrellaBeach } from 'react-icons/fa6';
import { ImSpinner10 } from 'react-icons/im';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { formatDate } from '../components/FormatDate';
import { baseURLAPI } from '../helpers/helper';
import { truncateText } from '../components/Truncated';
import { FaEnvelope } from 'react-icons/fa';
import foto1 from './../assets/img2.jpg';
import foto2 from './../assets/img7.jpg';
import foto3 from './../assets/img8.jpg';
import foto4 from './../assets/img26.jpg';
import logo from './../assets/logo_nagrak.png';
import logo2 from './../assets/logo.png';
import BgSlideComponent from '../components/BgSlideComponent';
import { MdOutlineImageNotSupported } from "react-icons/md";
import { PiClockCountdownFill } from 'react-icons/pi';

const HomeSection = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [agendas, setAgendas] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(baseURLAPI('blogs'));
        const sortedBlogs = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        const latestBlogs = sortedBlogs.slice(0, 4);
        setBlogs(latestBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchAgendas = async () => {
      try {
        const response = await axios.get(baseURLAPI('agenda'));
        const sortedAgendas = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        const latestAgendas = sortedAgendas.slice(0, 4);
        setAgendas(latestAgendas);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgendas();
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
          <BgSlideComponent />
          <Activity blogs={blogs} agendas={agendas} />
          <Attractions />
          <Footer />
        </div>
      )}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Activity = ({ blogs, agendas }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="popular-pack no-bgpack container-fluid bg-gray-50 py-8">
      <div className="container mx-auto">
        <div className="session-title text-center mb-8">
          <h2 className="lg:text-3xl text-xl font-bold">Informasi</h2>
          <p className="lg:text-xl text-xs text-gray-600">Menampilkan berita dan agenda seputar desa</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kolom Berita Terkini */}
          <div>
            <h3 className="lg:text-2xl font-semibold mb-4 border-b-2 border-tosca200 inline-block text-sm">Berita Terkini</h3>
            <div className="overflow-y-auto">
              {blogs.length <= 0 ? (
                <p className="text-gray-600 text-sm font-semibold lg:text-base flex flex-col items-center rounded-xl bg-gray-300 p-4"><MdOutlineImageNotSupported className="mt-2" /><span>Tidak ada berita terkini</span></p>
              ) : (
                blogs.map((blog, index) => (
                  <div key={index} className="flex items-start mb-4 cursor-pointer bg-white shadow-md rounded-lg p-2" onClick={() => handleClick(blog.title)}>
                    <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      {blog.image ? (
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <FaPeopleCarry className="text-gray-500 text-3xl" />
                      )}
                    </div>
                    <div className="ml-4 flex-1">
                      <span className="text-xs text-gray-500 mb-1 items-center flex "><PiClockCountdownFill className='text-tosca text-xl mr-1' />{formatDate(blog.date)}</span>
                      <h4 className="text-sm font-bold mb-2">{blog.title}</h4>
                      <div className="flex">
                        <div className="w-1 bg-tosca mr-2"></div>
                        <p className="text-gray-600 text-xs flex-1">{truncateText(blog.description, 150)}</p>
                        <div className="options mt-2">
                          <ul className="flex space-x-2">
                            {blog.gotongRoyong && (
                              <li className="w-6 h-6 rounded-full bg-tosca200 flex justify-center items-center">
                                <FaPeopleCarry className="text-white" />
                              </li>
                            )}
                            {blog.masyarakat && (
                              <li className="w-6 h-6 rounded-full bg-tosca200 flex justify-center items-center">
                                <FaPeopleGroup className="text-white" />
                              </li>
                            )}
                            {blog.wisata && (
                              <li className="w-6 h-6 rounded-full bg-tosca200 flex justify-center items-center">
                                <FaUmbrellaBeach className="text-white" />
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Kolom Agenda */}
          <div>
            <h3 className="lg:text-2xl font-semibold mb-4 border-b-2 border-tosca200 inline-block text-sm">Agenda</h3>
            <div className="overflow-y-auto max-h-[500px]">
              {agendas.length <= 0 ? (
                <p className="text-gray-600 text-sm font-semibold lg:text-base flex flex-col items-center rounded-xl bg-gray-300 p-4"><MdOutlineImageNotSupported className="mt-2" /><span>Tidak ada agenda</span></p>
              ) : (
                agendas.map((agenda, index) => (
                  <div key={index} className="bg-white shadow-md rounded-lg mb-4 p-4">
                    <span className="text-xs text-gray-500 mb-1 items-center flex"><PiClockCountdownFill className='text-tosca text-xl mr-1' />{formatDate(agenda.date)}</span>
                    <h4 className="text-sm font-bold mb-2">{agenda.title}</h4>
                    <div className="flex">
                      <div className="w-1 bg-tosca mr-2"></div>
                      <p className="text-gray-600 text-xs flex-1">{agenda.description}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
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
          <h2 className="lg:text-3xl text-xl font-bold">Wisata Terdekat</h2>
          <p className="lg:text-xl text-xs text-gray-600">Menampilkan wisata sekitar Desa Nagrak</p>
        </div>
        <div className="overflow-x-auto">
          <div className="flex justify-around space-x-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="flex-shrink-0 w-64 sm:w-72">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <NavLink to={`/wisata/${index === 0 ? 'curug-koleangkak' : index === 1 ? 'curug-cipondok' : index === 2 ? 'legok-gintung' : 'curug-dayang-sumbi'}`} className="relative block">
                    <div className="bg-cover bg-center w-full h-48" style={{ backgroundImage: `url(${index === 0 ? foto1 : index === 1 ? foto2 : index === 2 ? foto4 : foto3})` }}>
                      {index === 0 || index === 1 || index === 2 ? <div className="absolute top-0 left-0 bg-tosca200 text-white p-1 rounded-br-lg">Rekomendasi</div> : null}
                    </div>
                    <div className="revire flex justify-between items-center p-1">
                      <ul className="rat flex space-x-1">
                        {[1, 2, 3, 4].map((star) => (
                          <li key={star}>
                            <i className="fa fa-star text-yellow-500"></i>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="detail p-4">
                      <h4 className="text-base font-bold">{index === 0 ? 'Curug Koleangkak' : index === 1 ? 'Curug Cipondok' : index === 2 ? 'Legok Gintung' : 'Curug Dayang Sumbi'}</h4>
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
                        ) : index === 2 ? (
                          <>
                            <p>Tipe: Santai, Camp</p>
                            <p>Tiket Masuk: -</p>
                            <p>Harga Tenda: Rp 250.000/malam</p>
                            <p>Makanan: <i>Bekal sendiri</i></p>
                            <p>
                              Buka: Setiap Hari <span className="text-red-600">(Jumat Tutup)</span>
                            </p>
                            <p>Jam: 24 Jam</p>
                            <p>Parkir</p>
                            <div className="flex justify-center items-center space-x-4">
                              <p className="flex flex-col items-center">
                                <FaMotorcycle />
                                <span className="text-sm">-</span>
                              </p>
                              <p className="flex flex-col items-center">
                                <FaCar />
                                <span className="text-sm">-</span>
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
                <div className='flex rounded-tr-xl rounded-bl-xl lg:bg-white justify-center h-16 w-56 mb-5'>
                  <img src='https://fst.uinsgd.ac.id/wp-content/uploads/2020/05/cropped-logo-uin.png' alt="Logo" className="mx-auto sm:mx-0 h-14" />
                  <img src={logo} alt="Logo" className="mx-auto sm:mx-0 h-16" />
                  <img src={logo2} alt="Logo" className="mx-auto sm:mx-0 h-16" />
                </div>

                <h3 className="text-2xl font-bold mb-4">Kontak Kami</h3>
                <p>
                  <FaEnvelope className="inline-block mr-2" />
                  {navbarItems?.header[0]}
                </p>
                <div className="flex justify-center md:justify-start space-x-4 mt-10">
                  <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60" /><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60" /><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334" /><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stopColor="#fd5" /><stop offset=".1" stopColor="#fd5" /><stop offset=".5" stopColor="#ff543e" /><stop offset="1" stopColor="#c837ab" /></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stopColor="#3771c8" /><stop offset=".128" stopColor="#3771c8" /><stop offset="1" stopColor="#60f" stopOpacity="0" /></radialGradient></defs></g></svg>
                  </a>
                  <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" /><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z" /></svg>
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
