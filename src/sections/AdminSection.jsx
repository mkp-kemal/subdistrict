// src/sections/AdminSection.jsx
import { useState } from 'react';
import Dashboard from '../components/admin/Dashboard';
import Sidebar from '../components/admin/Sidebar';
import Blog from '../components/admin/Blog';
import NavbarComponent from '../components/admin/NavbarComponent';

export const AdminSection = () => {
    const [currentSection, setCurrentSection] = useState('dashboard');

    const renderSection = () => {
        switch (currentSection) {
            case 'dashboard':
                return <Dashboard />;
            case 'blog':
                return <Blog />;
            // case 'logout':
            //     return <Logout />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <>
            <NavbarComponent />
            <div className="flex mt-14">
                <Sidebar setCurrentSection={setCurrentSection} />
                <main className="flex-1 p-4">
                    {renderSection()}
                </main>
            </div>
        </>
    );
};
