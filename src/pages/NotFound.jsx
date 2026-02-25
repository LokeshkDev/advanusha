import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, AlertCircle } from 'lucide-react';
import Layout from '../components/Layout';

const NotFound = () => {
    return (
        <Layout>
            <section className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="d-flex justify-content-center mb-4">
                            <div className="bg-white p-4 rounded-circle shadow-lg text-primary">
                                <AlertCircle size={80} />
                            </div>
                        </div>

                        <h1 className="display-1 fw-black text-primary mb-2">404</h1>
                        <h2 className="h2 fw-bold mb-4 tamil-text">பக்கம் காணப்படவில்லை</h2>
                        <p className="fs-5 text-muted mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                            நீங்கள் தேடும் பக்கம் தற்காலிகமாக நீக்கப்பட்டிருக்கலாம் அல்லது அதன் பெயர் மாற்றப்பட்டிருக்கலாம்.
                        </p>

                        <Link to="/" className="btn-primary-custom px-5 py-3 text-decoration-none d-inline-flex align-items-center gap-2 tamil-text">
                            <Home size={20} />
                            முகப்பு பக்கத்திற்கு செல்ல
                        </Link>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default NotFound;
