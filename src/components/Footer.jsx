import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, AtSign, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/advocate-anusha-logo.png';
import partySymbol from '../assets/naam-tamilar-katchi-vivasaie-polling-symbol-advanusha-t-nagar.jpg';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer pt-5 pb-4 text-white" style={{ backgroundColor: 'var(--primary)' }}>
            <div className="container">
                <div className="row g-5 mb-5">
                    {/* Brand */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="mb-4" style={{ height: '150px' }}>
                            <img src={logo} alt="Advocate Anusha Logo" className="img-fluid h-100" />
                        </div>
                        <p className="text-light">
                            {t('footer.slogan')}
                        </p>
                        <div className="d-flex gap-3 pt-3">
                            <a href="https://www.facebook.com/p/Advocate-Anusha-100075840927478/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none opacity-75 hover-opacity-100" aria-label="Follow us on Facebook"><Facebook size={20} aria-hidden="true" /></a>
                            <a href="https://x.com/anushaadvocate" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none opacity-75 hover-opacity-100" aria-label="Follow us on X (Twitter)"><Twitter size={20} aria-hidden="true" /></a>
                            <a href="https://www.instagram.com/advanusha/?hl=en" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none opacity-75 hover-opacity-100" aria-label="Follow us on Instagram"><Instagram size={20} aria-hidden="true" /></a>
                            <a href="https://www.threads.com/@advanusha" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none opacity-75 hover-opacity-100" aria-label="Follow us on Threads"><AtSign size={20} aria-hidden="true" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <h4 className="fs-5 fw-bold mb-4 border-bottom pb-2 d-inline-block tamil-text" style={{ borderColor: 'var(--secondary) !important' }}>{t('footer.quick_links')}</h4>
                        <ul className="list-unstyled d-flex flex-column gap-2 small opacity-75">
                            <li><a href="/about" className="text-white text-decoration-none hover-text-secondary">{t('nav.about')}</a></li>
                            <li><a href="/vision" className="text-white text-decoration-none hover-text-secondary">{t('nav.vision')}</a></li>
                            <li><a href="/manifesto" className="text-white text-decoration-none hover-text-secondary">{t('nav.manifesto')}</a></li>
                            <li><a href="/gallery" className="text-white text-decoration-none hover-text-secondary">{t('nav.gallery')}</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <h4 className="fs-5 fw-bold mb-4 border-bottom pb-2 d-inline-block tamil-text" style={{ borderColor: 'var(--secondary) !important' }}>{t('footer.contact_title')}</h4>
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
                        <div className="p-4 rounded-3 border h-100 d-flex flex-column align-items-center justify-content-center text-center" style={{ backgroundColor: 'var(--primary-light)', borderColor: 'var(--primary-dark) !important' }}>
                            <img src={partySymbol} alt="NTK Symbol" className="img-fluid mb-3 rounded-2" style={{ height: 'auto', width: 'auto', backgroundColor: 'white', padding: '5px' }} />
                            <p className="fw-bold mb-2 tamil-text lh-sm" style={{ color: 'var(--secondary)' }}>{t('home.party')}</p>
                            <p className="small text-light opacity-50 text-uppercase ls-wide tamil-text mb-2">{t('footer.election_2026')}</p>
                            <div className="mt-1">
                                <p className="mb-1 tamil-text fw-bold text-white small">{t('footer.vote_farmer')}</p>
                                <p className="mb-0 small text-white-50 ls-wide" style={{ fontSize: '11px' }}>{t('footer.vote_farmer_en')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-top pt-4 text-center small opacity-50" style={{ borderColor: 'var(--primary-light) !important' }}>
                    <p className="tamil-text mb-2">{t('common.official_website')}</p>
                    <p>© {new Date().getFullYear()} Adv. Anusha. {t('footer.copyright')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
