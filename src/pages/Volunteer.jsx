import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, MessageSquare, Users } from 'lucide-react';
import Layout from '../components/Layout';
import bannerImg from '../assets/common-banner.png';

const Volunteer = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        area: '',
        message: ''
    });

    const whatsappNumber = "919940618646";

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `வணக்கம்! (Volunteer Request)
பெயர்: ${formData.name}
கைபேசி: ${formData.phone}
பகுதி: ${formData.area}
செய்தி: ${formData.message}`;

        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');

        console.log('Volunteer Request submitted:', formData);
        setFormData({ name: '', phone: '', area: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Layout>
            {/* Header with Parallax Banner */}
            <section
                className="parallax-section pt-5 pb-5 text-white"
                style={{ backgroundImage: `url(${bannerImg})`, minHeight: '400px', display: 'flex', alignItems: 'center' }}
            >
                <div className="parallax-overlay"></div>
                <div className="container pt-5 pb-4 mt-5 position-relative z-2 text-center">
                    <h1 className="display-4 fw-black text-white mb-3 tamil-text">
                        {t('volunteer.title')}
                    </h1>
                    <p className="fs-4 text-white-50 mx-auto tamil-text" style={{ maxWidth: '800px' }}>
                        {t('volunteer.banner_subtitle')}
                    </p>
                </div>
            </section>

            <section className="py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        {/* Why Volunteer? */}
                        <div className="col-12 col-lg-6">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="pe-lg-5"
                            >
                                <h2 className="display-5 fw-black text-primary mb-4 tamil-text">{t('volunteer.why_join_title')}</h2>
                                <p className="fs-5 text-muted mb-5 tamil-text">
                                    {t('volunteer.why_join_desc')}
                                </p>

                                <div className="row g-4 mb-5">
                                    {[
                                        { icon: <Users size={32} />, title: t('volunteer.fieldwork_title'), desc: t('volunteer.fieldwork_desc') },
                                        { icon: <MessageSquare size={32} />, title: t('volunteer.media_title'), desc: t('volunteer.media_desc') },
                                    ].map((item, i) => (
                                        <div key={i} className="col-12">
                                            <div className="d-flex gap-4 p-4 rounded-4 bg-light border-start border-4 border-secondary">
                                                <div className="text-primary flex-shrink-0">{item.icon}</div>
                                                <div>
                                                    <h4 className="fw-bold mb-2 tamil-text">{item.title}</h4>
                                                    <p className="text-muted small mb-0 tamil-text">{item.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-4 rounded-4 ntk-gradient text-white text-center">
                                    <p className="mb-2 tamil-text fw-bold">{t('common.immediate_contact')}</p>
                                    <h3 className="mb-0 fw-black">+91 99406 18646</h3>
                                </div>
                            </motion.div>
                        </div>

                        {/* Volunteer Form */}
                        <div className="col-12 col-lg-6">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="card border-0 p-5 rounded-5 shadow-lg bg-white h-100"
                            >
                                <h3 className="h2 fw-bold text-primary mb-5 tamil-text">{t('volunteer.form_title')}</h3>
                                <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
                                    <div className="form-group">
                                        <label htmlFor="volunteer-name" className="form-label fw-bold text-muted small tamil-text mb-2 text-uppercase">{t('volunteer.label_name')}</label>
                                        <input
                                            id="volunteer-name"
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-control form-control-lg border-light bg-light rounded-4 px-4 py-3 shadow-none focus-border-primary"
                                            placeholder={t('volunteer.placeholder_name')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="volunteer-phone" className="form-label fw-bold text-muted small tamil-text mb-2 text-uppercase">{t('volunteer.label_phone')}</label>
                                        <input
                                            id="volunteer-phone"
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="form-control form-control-lg border-light bg-light rounded-4 px-4 py-3 shadow-none focus-border-primary"
                                            placeholder={t('volunteer.placeholder_phone')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="volunteer-area" className="form-label fw-bold text-muted small tamil-text mb-2 text-uppercase">{t('volunteer.label_area')}</label>
                                        <input
                                            id="volunteer-area"
                                            type="text"
                                            name="area"
                                            required
                                            value={formData.area}
                                            onChange={handleChange}
                                            className="form-control form-control-lg border-light bg-light rounded-4 px-4 py-3 shadow-none focus-border-primary"
                                            placeholder={t('volunteer.placeholder_area')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="volunteer-message" className="form-label fw-bold text-muted small tamil-text mb-2 text-uppercase">{t('volunteer.label_how_help')}</label>
                                        <textarea
                                            id="volunteer-message"
                                            name="message"
                                            required
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="form-control form-control-lg border-light bg-light rounded-4 px-4 py-3 shadow-none focus-border-primary"
                                            placeholder={t('volunteer.placeholder_help')}
                                            style={{ resize: 'none' }}
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn-primary-custom py-4 rounded-4 mt-3 fs-5 d-flex align-items-center justify-content-center gap-3 shadow-lg"
                                        aria-label="Send volunteer request"
                                    >
                                        <Send size={24} aria-hidden="true" />
                                        <span className="tamil-text">{t('volunteer.submit_btn')}</span>
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Volunteer;
