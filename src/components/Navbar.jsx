import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Facebook, Instagram, Twitter, AtSign, Search, ChevronDown } from 'lucide-react';
import logo from '../assets/advocate-anusha-logo.png';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isOpen) {
            setActiveMobileSubmenu(null);
        }
    }, [isOpen]);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'ta' ? 'en' : 'ta';
        i18n.changeLanguage(newLang);
    };

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        {
            name: 'சுயவிவரம்',
            path: '#',
            subItems: [
                { name: t('nav.about'), path: '/about' },
                { name: t('nav.vision'), path: '/vision' },
                { name: t('nav.manifesto'), path: '/manifesto' }
            ]
        },
        { name: t('nav.gallery'), path: '/gallery' },
        { name: t('nav.news'), path: '/news' },
        {
            name: t('nav.contact'),
            path: '#',
            subItems: [
                { name: t('nav.contact'), path: '/contact' },
                { name: t('common.volunteer'), path: '/volunteer' }
            ]
        },
    ];

    return (
        <header className="fixed-top">
            {/* Top Bar */}
            <div className="top-bar d-none d-lg-block">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-3">
                        <span className="tamil-text">இணையம் : (+91) 9092529250</span>
                        <span>|</span>
                        <span className="tamil-text">புதியதொரு தேசம் செய்வோம்!</span>
                    </div>
                    <div className="d-flex gap-3 align-items-center">
                        <a href="https://www.facebook.com/p/Advocate-Anusha-100075840927478/" target="_blank" rel="noopener noreferrer" className="text-white opacity-75 hover-opacity-100 transition-all"><Facebook size={14} /></a>
                        <a href="https://www.instagram.com/advanusha/?hl=en" target="_blank" rel="noopener noreferrer" className="text-white opacity-75 hover-opacity-100 transition-all"><Instagram size={14} /></a>
                        <a href="https://x.com/anushaadvocate" target="_blank" rel="noopener noreferrer" className="text-white opacity-75 hover-opacity-100 transition-all"><Twitter size={14} /></a>
                        <a href="https://www.threads.com/@advanusha" target="_blank" rel="noopener noreferrer" className="text-white opacity-75 hover-opacity-100 transition-all"><AtSign size={14} /></a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav
                className={`navbar navbar-expand-lg transition-all ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'
                    }`}
            >
                <div className="container">
                    {/* Logo */}
                    <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
                        <div className="d-flex align-items-center justify-content-center"
                            style={{ height: '55px' }}>
                            <img src={logo} alt="Advocate Anusha Logo" className="img-fluid" />
                        </div>
                    </Link>

                    {/* Desktop Nav Toggle & Mobile Buttons */}
                    <div className="d-flex align-items-center gap-2 d-lg-none">
                        <button
                            onClick={toggleLanguage}
                            className="btn btn-sm fw-bold border border-white text-white"
                            aria-label={`Switch language to ${i18n.language === 'ta' ? 'English' : 'Tamil'}`}
                        >
                            {i18n.language === 'ta' ? 'EN' : 'தமிழ்'}
                        </button>
                        <button
                            className="btn p-0 border-0 text-white"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                        >
                            {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav align-items-center gap-lg-3">
                            {navLinks.map((link) => (
                                <li key={link.name} className={`nav-item ${link.subItems ? 'dropdown' : ''}`}>
                                    {link.subItems ? (
                                        <>
                                            <a
                                                className="nav-link tamil-text dropdown-toggle d-flex align-items-center gap-1"
                                                href="#"
                                                id={`navbarDropdown${link.name.replace(/\s+/g, '')}`}
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                {link.name}
                                                <ChevronDown size={14} aria-hidden="true" />
                                            </a>
                                            <ul className="dropdown-menu border-0 shadow-lg p-2" aria-labelledby={`navbarDropdown${link.name}`}>
                                                {link.subItems.map((sub) => (
                                                    <li key={sub.path}>
                                                        <Link className="dropdown-item rounded-2 py-2 fs-7 fw-medium" to={sub.path}>
                                                            {sub.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            className={`nav-link tamil-text ${location.pathname === link.path ? 'text-secondary' : ''}`}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Nav Buttons */}
                    <div className="d-none d-lg-flex align-items-center gap-2">
                        <Link to="/donate" className="btn btn-warning fw-bold px-3 py-2 rounded-3 text-dark small tamil-text">
                            {t('common.donate')}
                        </Link>
                        <button
                            onClick={toggleLanguage}
                            className="btn btn-outline-light rounded-circle p-2 ms-1"
                            aria-label={`Switch language to ${i18n.language === 'ta' ? 'English' : 'Tamil'}`}
                        >
                            <Globe size={18} aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                id="mobile-menu"
                className={`fixed-top w-100 h-100 bg-white d-lg-none transition-all ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    } flex-column align-items-center py-5 overflow-y-auto z-3`}
                style={{ zIndex: 1050, transition: 'all 0.4s ease-in-out' }}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="position-absolute top-0 end-0 m-4 btn"
                    aria-label="Close menu"
                >
                    <X size={32} className="text-primary" aria-hidden="true" />
                </button>

                <div className="d-flex flex-column align-items-center gap-4 w-100 mt-5 px-4">
                    {navLinks.map((link) => (
                        <div key={link.name} className="w-100 text-center">
                            {link.subItems ? (
                                <>
                                    <button
                                        onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === link.name ? null : link.name)}
                                        className="fs-2 fw-bold text-primary text-decoration-none border-0 bg-transparent w-100 d-flex align-items-center justify-content-center gap-2 tamil-text"
                                    >
                                        {link.name}
                                        <ChevronDown
                                            size={24}
                                            className={`transition-all ${activeMobileSubmenu === link.name ? 'rotate-180' : ''}`}
                                            style={{ transition: 'transform 0.3s ease' }}
                                        />
                                    </button>
                                    <div
                                        className={`transition-all overflow-hidden ${activeMobileSubmenu === link.name ? 'max-vh-100 mt-3 opacity-100' : 'max-height-0 mt-0 opacity-0'}`}
                                        style={{
                                            transition: 'all 0.4s ease-in-out',
                                            maxHeight: activeMobileSubmenu === link.name ? '500px' : '0'
                                        }}
                                    >
                                        <div className="d-flex flex-column gap-3">
                                            {link.subItems.map((sub) => (
                                                <Link
                                                    key={sub.path}
                                                    to={sub.path}
                                                    onClick={() => setIsOpen(false)}
                                                    className="fs-4 text-primary opacity-75 text-decoration-none tamil-text hover-text-secondary transition-all"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="fs-2 fw-bold text-primary text-decoration-none hover-text-secondary tamil-text"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}

                    <div className="mt-4 w-100 px-4 d-flex flex-column gap-3">
                        <Link
                            to="/donate"
                            onClick={() => setIsOpen(false)}
                            className="btn btn-warning fw-bold py-3 rounded-pill fs-5 tamil-text text-decoration-none"
                        >
                            {t('common.donate')}
                        </Link>
                        <button
                            onClick={() => {
                                toggleLanguage();
                                setIsOpen(false);
                            }}
                            className="btn-primary-custom d-flex align-items-center justify-content-center gap-2 w-100 py-3 rounded-pill"
                        >
                            <Globe size={24} />
                            {i18n.language === 'ta' ? 'English' : 'தமிழ்'}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
