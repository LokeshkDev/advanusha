import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import Layout from '../components/Layout';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        area: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
        console.log('Form submitted:', formData);
        setFormData({ name: '', phone: '', area: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Layout>
            <section className="ntk-gradient pt-5 pb-5 text-white">
                <div className="container pt-5 pb-4 mt-5 text-center">
                    <h1 className="display-4 fw-black mb-3 tamil-text">{t('nav.contact')}</h1>
                    <p className="fs-4 text-white-50 opacity-75 tamil-text">உங்கள் கருத்துக்களையும், ஆதரவையும் எங்களோடு பகிர்ந்து கொள்ளுங்கள்.</p>
                </div>
            </section>

            <section className="py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        {/* Info and Map */}
                        <div className="col-12 col-lg-6 d-flex flex-column gap-5">
                            <div className="row g-4">
                                {[
                                    { icon: <Phone />, title: 'Call Us', value: '+91 98765 43210' },
                                    { icon: <Mail />, title: 'Email Us', value: 'contact@advanusha.in' },
                                    { icon: <MessageSquare />, title: 'WhatsApp', value: '+91 98765 43210' },
                                    { icon: <MapPin />, title: 'Office', value: 'T. Nagar, Chennai' },
                                ].map((item, i) => (
                                    <div key={i} className="col-12 col-sm-6">
                                        <div className="card h-100 border-0 bg-light p-4 rounded-4 shadow-sm">
                                            <div className="text-primary mb-3">{React.cloneElement(item.icon, { size: 32 })}</div>
                                            <h4 className="fw-bold mb-1 fs-5">{item.title}</h4>
                                            <p className="text-muted small mb-0">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="rounded-5 overflow-hidden shadow-lg border border-5 border-white h-100 flex-grow-1 min-h-400">
                                <iframe
                                    title="T. Nagar Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15548.24354388307!2d80.222716!3d13.04015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670355555555%3A0x7c00000000000000!2sT.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="col-12 col-lg-6">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="card border-0 p-5 rounded-5 shadow-lg bg-white h-100"
                            >
                                <h3 className="h2 fw-bold text-primary mb-5 tamil-text">{t('common.send_message')}</h3>
                                <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
                                    <div className="form-group">
                                        <label className="form-label fw-bold text-muted small tamil-text mb-2 text-uppercase ls-wide">{t('common.name')}</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-control form-control-lg border-light bg-light rounded-4 px-4 py-3 shadow-none focus-border-primary"
                                            placeholder="உமது பெயர் / Your Name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label fw-bold text-muted small tamil-text mb-2 text-uppercase ls-wide">{t('common.phone')}</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="form-control form-control-lg border-light bg-light rounded-4 px-4 py-3 shadow-none focus-border-primary"
                                            placeholder="கைபேசி எண் / Phone Number"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label fw-bold text-muted small tamil-text mb-2 text-uppercase ls-wide">{t('common.area')}</label>
                                        <input
                                            type="text"
                                            name="area"
                                            required
                                            value={formData.area}
                                            onChange={handleChange}
                                            className="form-control form-control-lg border-light bg-light rounded-4 px-4 py-3 shadow-none focus-border-primary"
                                            placeholder="பகுதி / Your Area"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label fw-bold text-muted small tamil-text mb-2 text-uppercase ls-wide">{t('common.message')}</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="form-control form-control-lg border-light bg-light rounded-4 px-4 py-3 shadow-none focus-border-primary"
                                            placeholder="செய்தி / Your Message"
                                            style={{ resize: 'none' }}
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn-primary-custom py-4 rounded-4 mt-3 fs-5 d-flex align-items-center justify-content-center gap-3 shadow-lg"
                                    >
                                        <Send size={24} />
                                        <span className="tamil-text">{t('common.submit')}</span>
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

export default Contact;
