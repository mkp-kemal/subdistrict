import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import { HomeSection } from './sections/HomeSection';
import ProfileSection from './sections/ProfileSection';
import ActivityKknSection from './sections/ActivityKknSection';
import { AdminSection } from './sections/AdminSection';
import BlogDetailSection from './sections/BlogDetailSection';
import Login from './auth/components/login';
import NotFound from './components/NotFound';
import ApbdSection from './sections/ApbdSection';
import JdihSection from './sections/JdihSection';
import AttractionDetailKoleangkak from './sections/AttractionDetail';
import AttractionDetailCipondok from './sections/CipondokDetail';
import AttractionDetailDayangSumbi from './sections/DayangSumbiDetail';
import CommunitySection from './sections/CommunitySection';
import AttractionDetailLegokGintung from './sections/LegokGintungDetail';
import LandingSection from './sections/LandingSection';

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
  const isLandingPage = location.pathname === '/landing';

  return (
    <>
      {!isAdminPage && !isLandingPage && <NavbarComponent />}
      <div className="pt-19">
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/landing" element={<LandingSection />} />
          <Route path="/home" element={<HomeSection />} />
          <Route path="/profile" element={<ProfileSection />} />
          <Route path="/activity" element={<ActivityKknSection />} />
          <Route path="/apbd" element={<ApbdSection />} />
          <Route path="/community" element={<CommunitySection />} />
          <Route path="/jdih" element={<JdihSection />} />
          <Route path="/wisata/curug-koleangkak" element={<AttractionDetailKoleangkak />} />
          <Route path="/wisata/curug-cipondok" element={<AttractionDetailCipondok />} />
          <Route path="/wisata/curug-dayang-sumbi" element={<AttractionDetailDayangSumbi />} />
          <Route path="/wisata/legok-gintung" element={<AttractionDetailLegokGintung />} />
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
