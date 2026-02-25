import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/advocate-anusha-logo.png';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer pt-5 pb-4 text-white" style={{ backgroundColor: 'var(--primary)' }}>
            <div className="container">
                <div className="row g-5 mb-5">
                    {/* Brand */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="mb-4" style={{ height: '70px' }}>
                            <img src={logo} alt="Advocate Anusha Logo" className="img-fluid h-100" />
                        </div>
                        <p className="text-light small opacity-75">
                            {t('home.slogan')}
                        </p>
                        <div className="d-flex gap-3 pt-3">
                            <a href="#" className="text-white text-decoration-none opacity-75 hover-opacity-100"><Facebook size={20} /></a>
                            <a href="#" className="text-white text-decoration-none opacity-75 hover-opacity-100"><Twitter size={20} /></a>
                            <a href="#" className="text-white text-decoration-none opacity-75 hover-opacity-100"><Instagram size={20} /></a>
                            <a href="#" className="text-white text-decoration-none opacity-75 hover-opacity-100"><Youtube size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <h4 className="fs-5 fw-bold mb-4 border-bottom pb-2 d-inline-block tamil-text" style={{ borderColor: 'var(--secondary) !important' }}>விரைவு இணைப்புகள்</h4>
                        <ul className="list-unstyled d-flex flex-column gap-2 small opacity-75">
                            <li><a href="/about" className="text-white text-decoration-none hover-text-secondary">{t('nav.about')}</a></li>
                            <li><a href="/vision" className="text-white text-decoration-none hover-text-secondary">{t('nav.vision')}</a></li>
                            <li><a href="/manifesto" className="text-white text-decoration-none hover-text-secondary">{t('nav.manifesto')}</a></li>
                            <li><a href="/gallery" className="text-white text-decoration-none hover-text-secondary">{t('nav.gallery')}</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <h4 className="fs-5 fw-bold mb-4 border-bottom pb-2 d-inline-block tamil-text" style={{ borderColor: 'var(--secondary) !important' }}>தொடர்புக்கு</h4>
                        <ul className="list-unstyled d-flex flex-column gap-3 small opacity-75">
                            <li className="d-flex align-items-center gap-3">
                                <Mail size={18} style={{ color: 'var(--secondary)' }} />
                                <span>contact@advanusha.in</span>
                            </li>
                            <li className="d-flex align-items-center gap-3">
                                <Phone size={18} style={{ color: 'var(--secondary)' }} />
                                <span>+91 9092529250</span>
                            </li>
                            <li className="d-flex align-items-start gap-3">
                                <MapPin size={18} className="mt-1" style={{ color: 'var(--secondary)' }} />
                                <span className="tamil-text">தி.நகர், சென்னை, தமிழ்நாடு</span>
                            </li>
                        </ul>
                    </div>

                    {/* Slogan/Election */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="p-4 rounded-3 border h-100 d-flex flex-column justify-content-center" style={{ backgroundColor: 'var(--primary-light)', borderColor: 'var(--primary-dark) !important' }}>
                            <p className="fw-bold mb-2 text-center tamil-text" style={{ color: 'var(--secondary)' }}>{t('home.party')}</p>
                            <p className="small text-center text-light opacity-50 text-uppercase ls-wide tamil-text">சட்டமன்றத் தேர்தல் 2026</p>
                        </div>
                    </div>
                </div>

                <div className="border-top pt-4 text-center small opacity-50" style={{ borderColor: 'var(--primary-light) !important' }}>
                    <p className="tamil-text mb-2">{t('common.official_website')}</p>
                    <p>© {new Date().getFullYear()} Adv. Anusha. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
