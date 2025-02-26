import { useState } from 'react';
import { FaTachometerAlt, FaBlog, FaSignOutAlt, FaRegImages } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import { TfiAgenda } from "react-icons/tfi";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ setCurrentSection, user }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  // eslint-disable-next-line react/prop-types
  const email = user?.email;


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    document.cookie.split(";").forEach(cookie => {
      const name = cookie.split("=")[0].trim();
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    });

    navigate('/auth/login');
  };

  return (
    <div className={`flex flex-col bg-gray-800 text-white ${isOpen ? 'w-64' : 'w-20'} transition-width duration-300 h-screen`}>
      <button
        onClick={toggleSidebar}
        className={`text-2xl p-2 group hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-around">
          <img src="https://fst.uinsgd.ac.id/wp-content/uploads/2020/05/cropped-logo-uin.png" alt="Logo Desa Nagrak Subang" className="h-13 w-10 mr-2 rounded-full" />
          <div className="text-white font-bold text-xl">
            {isOpen ? 'KKN' : ''}
          </div>
          {isOpen ? <RxHamburgerMenu /> : ''}
        </div>
      </button>
      <ul className="mt-4 space-y-2">
        <li>
          <button onClick={() => setCurrentSection('dashboard')} className="flex items-center p-2 space-x-2 hover:bg-gray-700 w-full text-left">
            <FaTachometerAlt className="group-hover:animate-bounce transition-all duration-300 ease-in-out" />
            {isOpen && <span>Dashboard</span>}
          </button>
        </li>
        <li>
          <button onClick={() => setCurrentSection('blog')} className="flex items-center p-2 space-x-2 hover:bg-gray-700 w-full text-left">
            <FaBlog className="group-hover:animate-bounce transition-all duration-300 ease-in-out" />
            {isOpen && <span>Blog</span>}
          </button>
        </li>
        <li>
          <button onClick={() => setCurrentSection('agenda')} className="flex items-center p-2 space-x-2 hover:bg-gray-700 w-full text-left">
            <TfiAgenda className="group-hover:animate-bounce transition-all duration-300 ease-in-out" />
            {isOpen && <span>Agenda</span>}
          </button>
        </li>
        {email === 'kemal@gmail.com' && (
          <li>
            <button onClick={() => setCurrentSection('images')} className="flex items-center p-2 space-x-2 hover:bg-gray-700 w-full text-left">
              <FaRegImages  className="group-hover:animate-bounce transition-all duration-300 ease-in-out" />
              {isOpen && <span>Images</span>}
            </button>
          </li>
        )}
        <li>
          <button onClick={handleLogout} className="flex items-center p-2 space-x-2 hover:bg-gray-700 w-full text-left">
            <FaSignOutAlt className="group-hover:animate-bounce transition-all duration-300 ease-in-out" />
            {isOpen && <span>Logout</span>}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
