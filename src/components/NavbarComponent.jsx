import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DateTime from './DateTime';
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebook } from 'react-icons/fa';
import { baseURLAPI } from '../helpers/helper.jsx';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarItems, setNavbarItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hideOnScroll, setHideOnScroll] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
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

    fetchNavbarItems();

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHideOnScroll(true);
      } else {
        setHideOnScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navOrder = ["home", "profile", "maintenance", "activity", "history"];

  return (
    <nav className={`bg-tosca shadow-lg fixed w-full top-0 z-50 font-inherit transition-transform duration-300 ease-in-out ${hideOnScroll ? 'transform -translate-y-full' : ''}`}>
      <div className="bg-tosca200 header-top py-2">
        <div className="container mx-auto px-4">
          <div className="row flex flex-wrap items-center justify-between">
            <div className="col-lg-6">
              <ul className="text-white flex space-x-4">
                {navbarItems?.header && (
                  <>
                    <li className="hidden lg:flex items-center group">
                      <i className="far fa-envelope mr-2"></i>
                      <span className={`hover:text-sage transition-all duration-300 ease-in-out`}>
                        <img src="https://fst.uinsgd.ac.id/wp-content/uploads/2020/05/cropped-logo-uin.png" alt="UINSGD" className="h-8 w-8 rounded-full" />
                      </span>
                    </li>
                    <li className="hidden lg:flex items-center group">
                      <i className="far fa-envelope mr-2"></i>
                      <a href="https://nagrakciater.vercel.app/auth/login" className={`hover:text-sage transition-all duration-300 ease-in-out`}>
                        <img src="https://i.ibb.co.com/Y25CX4R/Desain-tanpa-judul-1.png" alt="KKN415" className="h-8 w-8 mr-2 rounded-full" />
                      </a>
                    </li>
                    <li className="hidden lg:flex items-center group">
                      <i className="far fa-envelope mr-2"></i>
                      <a href={`mailto:${navbarItems.header[1]}`} target='_blank' className={`hover:text-sage transition-all duration-300 ease-in-out cursor-pointer`}>{navbarItems.header[1]}</a>
                    </li>
                    <span className="mx-2 hidden lg:flex">|</span>
                    <li className="flex items-center group">
                      <i className="fas fa-phone-volume mr-2"></i>
                      <a href={`https://wa.me/${navbarItems.header[0]}`} target='_blank' className={`hover:text-sage transition-all duration-300 ease-in-out cursor-pointer`}>{navbarItems.header[0]}</a>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="col-md-12 mt-2 justify-center text-white space-x-10 hidden lg:flex">
              <ul className="flex text-xl space-x-4 my-1">
                <li>
                  <a href="https://www.instagram.com/nagrakciater/">
                    <i>
                      <RiInstagramFill className="text-white hover:text-tosca transition-all duration-300 ease-in-out cursor-pointer" />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/nagrakciater/">
                    <i>
                      <FaFacebook className="text-white hover:text-tosca transition-all duration-300 ease-in-out cursor-pointer" />
                    </i>
                  </a>
                </li>
              </ul>
              <DateTime />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src="https://i.ibb.co.com/WBndm69/Lambang-Kabupaten-Subang-removebg-preview.png" alt="Logo Desa Nagrak Subang" className="h-11 w-10" />
          <a href="https://nagrakciater.vercel.app/">
            <div className="text-white p-2">
              <p className="font-bold">Desa Nagrak</p>
              <p className='text-sm'>Kec. Ciater Kab. Subang</p>
            </div>
          </a>
        </div>

        <div className="lg:hidden">
          <button className="text-white" onClick={toggleNavbar}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className={`absolute right-0 top-full w-full bg-white border-t-2 border-tosca rounded-b-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="grid grid-cols-1 p-4">
              {loading ? (
                <div>Loading...</div>
              ) : (
                navOrder.map((key) => (
                  navbarItems?.[key] && (
                    <NavLink
                      key={key}
                      to={`/${key}`}
                      className="text-sage hover:text-sage-dark transition-colors duration-300"
                    >
                      {navbarItems[key]}
                    </NavLink>
                  )
                ))
              )}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          {loading ? (
            <div><svg xmlns="http://www.w3.org/2000/svg" width="4em" height="2em" viewBox="0 0 24 24"><circle cx="4" cy="12" r="3" fill="white"><animate id="svgSpinners3DotsScale0" attributeName="r" begin="0;svgSpinners3DotsScale1.end-0.25s" dur="0.75s" values="3;.2;3" /></circle><circle cx="12" cy="12" r="3" fill="white"><animate attributeName="r" begin="svgSpinners3DotsScale0.end-0.6s" dur="0.75s" values="3;.2;3" /></circle><circle cx="20" cy="12" r="3" fill="white"><animate id="svgSpinners3DotsScale1" attributeName="r" begin="svgSpinners3DotsScale0.end-0.45s" dur="0.75s" values="3;.2;3" /></circle></svg></div>
          ) : (
            navOrder.map((key) => (
              navbarItems?.[key] && (
                <NavLink
                  key={key}
                  to={`/${key}`}
                  className={({ isActive }) =>
                    isActive ? "text-sage" : "text-white hover:text-sage transition-colors duration-300"
                  }
                >
                  {navbarItems[key]}
                </NavLink>
              )
            ))
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
