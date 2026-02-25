import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <main className="flex-grow-1">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
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
