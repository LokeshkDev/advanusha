import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Loader from './Loader';
import { useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
    const { pathname } = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);
        document.body.classList.add('overflow-hidden');

        const timer = setTimeout(() => {
            setLoading(false);
            document.body.classList.remove('overflow-hidden');
        }, 1500);

        return () => {
            clearTimeout(timer);
            document.body.classList.remove('overflow-hidden');
        };
    }, [pathname]);

    return (
        <div className="d-flex flex-column min-vh-100">
            <AnimatePresence>
                {loading && <Loader />}
            </AnimatePresence>
            <Navbar />
            <main className="flex-grow-1">
                {children}
            </main>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed-bottom d-flex align-items-center justify-content-center bg-success text-white p-3 rounded-circle shadow-lg m-4 transition-all hover-scale"
                style={{
                    width: '64px',
                    height: '64px',
                    left: 'auto',
                    bottom: '10px',
                    right: '10px',
                    zIndex: 1000,
                    backgroundColor: '#25D366'
                }}
                aria-label="Contact on WhatsApp"
            >
                <MessageCircle size={32} />
            </a>

            <Footer />
        </div>
    );
};

export default Layout;
