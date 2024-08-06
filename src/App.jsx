import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import {HomeSection} from './sections/HomeSection';
import ProfileSection from './sections/ProfileSection';
import ActivityKknSection from './sections/ActivityKknSection';
import { AdminSection } from './sections/AdminSection';
import BlogDetailSection from './sections/BlogDetailSection';
import Login from './auth/components/login';
import NotFound from './components/NotFound';
import ApbdSection from './sections/ApbdSection';
import JdihSection from './sections/JdihSection';
import AttractionDetailKoleangkak from './sections/AttractionDetail';

const App = () => {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
};

const MainRoutes = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/user/admin');

  return (
    <>
      {!isAdminPage && <NavbarComponent />}
      <div className="pt-19">
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/home" element={<HomeSection />} />
          <Route path="/profile" element={<ProfileSection />} />
          <Route path="/activity" element={<ActivityKknSection />} />
          <Route path="/apbd" element={<ApbdSection />} />
          <Route path="/jdih" element={<JdihSection />} />
          <Route path="/wisata/curug-koleangkak" element={<AttractionDetailKoleangkak />} />
          <Route path="/blog/:id" element={<BlogDetailSection />} />
          <Route path="/user/admin" element={<AdminSection />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
