import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import HomeSection from './sections/HomeSection';
import ProfileSection from './sections/ProfileSection';
import ActivityKknSection from './sections/ActivityKknSection';
import HistorySection from './sections/HistorySection';
import BgComponent from './components/BgComponent';
import { AdminSection } from './sections/AdminSection';

const App = () => {
  return (
    <Router>
      {window.location.pathname !== "/user/admin" && <NavbarComponent />}
      <div className="pt-19">
      {window.location.pathname !== "/user/admin" && <BgComponent />}
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/home" element={<HomeSection />} />
          <Route path="/profile" element={<ProfileSection />} />
          <Route path="/activity" element={<ActivityKknSection />} />
          <Route path="/history" element={<HistorySection />} />
          <Route path="/user/admin" element={<AdminSection />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
