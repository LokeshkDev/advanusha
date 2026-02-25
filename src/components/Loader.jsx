import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/advocate-anusha-logo.png';

const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed-top w-100 h-100 bg-white d-flex flex-column align-items-center justify-content-center z-3"
            style={{ zIndex: 9999 }}
        >
            <div className="position-relative">
                {/* Animated Rings */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                        borderRadius: ["20%", "50%", "20%"],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                        repeat: Infinity,
                    }}
                    className="position-absolute top-50 start-50 translate-middle border border-4 border-primary opacity-20"
                    style={{ width: '120px', height: '120px' }}
                />

                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                        borderRadius: ["50%", "20%", "50%"],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                        repeat: Infinity,
                    }}
                    className="position-absolute top-50 start-50 translate-middle border border-4 border-secondary opacity-40"
                    style={{ width: '150px', height: '150px' }}
                />

                {/* Logo */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="position-relative z-1"
                >
                    <img src={logo} alt="Advocate Anusha Logo" style={{ height: '80px', objectFit: 'contain' }} />
                </motion.div>
            </div>

            {/* Loading Text */}
            <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mt-5"
            >
                <span className="text-primary fw-bold fs-5 tamil-text ls-widest">காத்திருக்கவும்...</span>
            </motion.div>
        </motion.div>
    );
};

export default Loader;
