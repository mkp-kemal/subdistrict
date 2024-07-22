import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseURLAPI } from '../../helpers/helper';
import { ImSpinner10 } from 'react-icons/im';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const token = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .find(cookie => cookie[0].trim() === 'jwt')?.[1];

        if (token) {
            navigate('/user/admin');
            return;
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await axios.post(`${baseURLAPI('login')}`, { username, password });
            const token = res.data.token;
            document.cookie = `jwt=${token}; path=/; max-age=${60 * 15}`;
            navigate('/user/admin');
        } catch (err) {
            setError('Invalid credentials');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-2xl rounded-xl p-8 max-w-md w-full">
                <h1 className="text-4xl font-bold mb-6 text-center text-blue-900">Login Admin</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-xs italic">{error}</p>}
                    <div className="flex items-center justify-between">
                        {loading ? (
                            <button
                                type="submit"
                                className="bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                disabled
                            >
                                <ImSpinner10 className="text-sm animate-spin text-tosca" />
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Login
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
