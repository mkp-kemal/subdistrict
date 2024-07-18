import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import HomeSection from './sections/HomeSection';
import ProfileSection from './sections/ProfileSection';
import ActivityKknSection from './sections/ActivityKknSection';
import HistorySection from './sections/HistorySection';
import BgComponent from './components/BgComponent';
import { AdminSection } from './sections/AdminSection';
import BlogDetailSection from './sections/BlogDetailSection';

const App = () => {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
};

const MainRoutes = () => {
  const location = useLocation();
  const isBlogDetail = location.pathname.startsWith('/blog/');
  const isAdminPage = location.pathname.startsWith('/user/admin');

  return (
    <>
      {!isAdminPage && <NavbarComponent />}
      <div className="pt-19">
        {!isAdminPage && !isBlogDetail && <BgComponent />}
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/home" element={<HomeSection />} />
          <Route path="/profile" element={<ProfileSection />} />
          <Route path="/activity" element={<ActivityKknSection />} />
          <Route path="/history" element={<HistorySection />} />
          <Route path="/blog/:id" element={<BlogDetailSection />} />
          <Route path="/user/admin" element={<AdminSection />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
