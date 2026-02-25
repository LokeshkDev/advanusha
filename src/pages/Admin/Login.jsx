import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User } from 'lucide-react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin123') {
            localStorage.setItem('isAdminAuthenticated', 'true');
            navigate('/admin/dashboard');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light p-4">
            <div className="card border-0 shadow-lg rounded-5 p-5 bg-white w-100" style={{ maxWidth: '450px' }}>
                <div className="text-center mb-5">
                    <div className="mx-auto mb-4 d-flex align-items-center justify-content-center bg-primary text-secondary rounded-4 shadow-lg" style={{ width: '80px', height: '80px' }}>
                        <Lock size={40} />
                    </div>
                    <h1 className="h2 fw-black text-primary mb-1">Admin Login</h1>
                    <p className="text-muted small text-uppercase ls-widest mt-2">Access the campaign control panel</p>
                </div>

                <form onSubmit={handleLogin} className="d-flex flex-column gap-4">
                    <div className="form-group">
                        <label className="form-label fw-bold text-muted small mb-2 text-uppercase ls-wide">Username</label>
                        <div className="position-relative">
                            <User className="position-absolute start-0 top-50 translate-middle-y ms-4 text-muted" size={20} style={{ opacity: 0.5 }} />
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="form-control form-control-lg bg-light border-light rounded-4 px-5 py-3 shadow-none focus-border-primary"
                                placeholder="Enter username"
                                style={{ paddingLeft: '3.5rem !important' }}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label fw-bold text-muted small mb-2 text-uppercase ls-wide">Password</label>
                        <div className="position-relative">
                            <Lock className="position-absolute start-0 top-50 translate-middle-y ms-4 text-muted" size={20} style={{ opacity: 0.5 }} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control form-control-lg bg-light border-light rounded-4 px-5 py-3 shadow-none focus-border-primary"
                                placeholder="Enter password"
                                style={{ paddingLeft: '3.5rem !important' }}
                            />
                        </div>
                    </div>

                    {error && <div className="p-3 bg-danger bg-opacity-10 text-danger rounded-3 text-center small fw-bold">{error}</div>}

                    <button
                        type="submit"
                        className="btn-primary-custom py-4 rounded-4 fs-5 w-100 shadow-lg mt-2"
                    >
                        Log In
                    </button>
                </form>

                <div className="mt-5 text-center text-muted small opacity-50 text-uppercase ls-widest" style={{ fontSize: '10px' }}>
                    Adv. Anusha Campaign Portal v1.0
                </div>
            </div>
        </div>
    );
};

export default Login;
