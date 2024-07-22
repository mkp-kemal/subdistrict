// src/sections/AdminSection.jsx
import { useEffect, useState } from 'react';
import Dashboard from '../components/admin/Dashboard';
import Sidebar from '../components/admin/Sidebar';
import Blog from '../components/admin/Blog';
import NavbarComponent from '../components/admin/NavbarComponent';
import { useNavigate } from 'react-router-dom';
import { baseURLAPI } from '../helpers/helper';
import axios from 'axios';

export const AdminSection = () => {
    const [currentSection, setCurrentSection] = useState('dashboard');
    const navigate = useNavigate();
    const [user, setUser] = useState(null);


    useEffect(() => {
        const token = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .find(cookie => cookie[0].trim() === 'jwt')?.[1];

        if (!token) {
            navigate('/auth/login');
            return;
        }

        (async () => {
            try {
                const response = await axios.get(baseURLAPI('user'), {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
                navigate('/auth/login');
            }
        })();
    }, []);

    const renderSection = () => {
        switch (currentSection) {
            case 'dashboard':
                return <Dashboard />;
            case 'blog':
                return <Blog user={user} />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <>
            <NavbarComponent user={user} />
            <div className="flex mt-14">
                <Sidebar setCurrentSection={setCurrentSection} />
                <main className="flex-1 p-4">
                    {renderSection()}
                </main>
            </div>
        </>
    );
};
