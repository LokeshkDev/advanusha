import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Heart, Send, QrCode, Copy, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';
import qrImage from '../assets/donation_qr.jpeg';
import bannerImg from '../assets/common-banner.png';

const Donate = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        amount: '',
        transactionId: '',
        message: ''
    });
    const [copied, setCopied] = useState(false);
    const upiId = "advanusha17-1@oksbi";

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.transactionId) {
            alert(t('donate.alert_txid'));
            return;
        }

        alert(t('donate.alert_success'));
        console.log('Donation complete:', formData);
        setFormData({ name: '', phone: '', amount: '', transactionId: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const copyUpi = () => {
        navigator.clipboard.writeText(upiId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Layout>
            <section
                className="parallax-section pt-5 pb-5 text-white"
                style={{ backgroundImage: `url(${bannerImg})`, minHeight: '400px', display: 'flex', alignItems: 'center' }}
            >
                <div className="parallax-overlay"></div>
                <div className="container pt-5 pb-4 mt-5 position-relative z-2 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="display-4 fw-black text-white mb-3 tamil-text">{t('common.donate')}</h1>
                        <p className="fs-4 text-white-50 opacity-75 tamil-text">{t('donate.banner_subtitle')}</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container py-5">
                    <div className="row g-5 align-items-stretch">
                        {/* Donation Form */}
                        <div className="col-12 col-lg-6">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="card border-0 p-4 p-md-5 rounded-5 shadow-lg bg-white h-100"
                            >
                                <div className="mb-4">
                                    <h3 className="h3 fw-bold text-primary tamil-text mb-2">{t('donate.form_title')}</h3>
                                    <div className="h-px bg-secondary w-25"></div>
                                </div>

                                <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
                                    <div className="form-group">
                                        <label htmlFor="donate-name" className="form-label fw-bold text-muted small tamil-text mb-2 text-uppercase">{t('donate.label_name')}</label>
                                        <input
                                            id="donate-name"
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-control form-control-lg border-light bg-light rounded-4 px-4 py-3 shadow-none focus-border-primary"
                                            placeholder={t('donate.placeholder_name')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="donate-phone" className="form-label fw-bold text-muted small tamil-text mb-2 text-uppercase">{t('donate.label_phone')}</label>
                                        <input
                                            id="donate-phone"
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="form-control form-control-lg border-light bg-light rounded-4 px-4 py-3 shadow-none focus-border-primary"
                                            placeholder={t('donate.placeholder_phone')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="donate-txid" className="form-label fw-bold text-muted small tamil-text mb-2 text-uppercase">{t('donate.label_txid')}</label>
                                        <input
                                            id="donate-txid"
                                            type="text"
                                            name="transactionId"
                                            required
                                            value={formData.transactionId}
                                            onChange={handleChange}
                                            className="form-control form-control-lg border-light bg-light rounded-4 px-4 py-3 shadow-none focus-border-primary"
                                            placeholder={t('donate.placeholder_txid')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="donate-amount" className="form-label fw-bold text-muted small tamil-text mb-2 text-uppercase">{t('donate.label_amount')}</label>
                                        <input
                                            id="donate-amount"
                                            type="number"
                                            name="amount"
                                            value={formData.amount}
                                            onChange={handleChange}
                                            className="form-control form-control-lg border-light bg-light rounded-4 px-4 py-3 shadow-none focus-border-primary"
                                            placeholder="₹ 500"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn-primary-custom py-4 rounded-4 mt-2 fs-5 d-flex align-items-center justify-content-center gap-3 shadow-lg"
                                        aria-label="Submit donation details"
                                    >
                                        <Send size={24} aria-hidden="true" />
                                        <span className="tamil-text">{t('donate.submit_btn')}</span>
                                    </button>
                                </form>
                            </motion.div>
                        </div>

                        {/* QR Scanner Section */}
                        <div className="col-12 col-lg-6">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="card border-0 p-4 p-md-5 rounded-5 shadow-lg text-white h-100 overflow-hidden"
                                style={{ background: '#1c1c1c' }}
                            >
                                <div className="position-relative z-2">
                                    <div className="d-flex align-items-center gap-3 mb-4">
                                        <QrCode size={32} className="text-secondary" />
                                        <h3 className="h3 fw-bold tamil-text mb-0">{t('donate.qr_title')}</h3>
                                    </div>

                                    <p className="text-white-50 mb-4 tamil-text">{t('donate.qr_desc')}</p>

                                    <div className="bg-white p-3 rounded-4 shadow-2xl mx-auto mb-4" style={{ maxWidth: '300px' }}>
                                        <img
                                            src={qrImage}
                                            alt="Donation QR Code"
                                            className="img-fluid rounded-3"
                                        />
                                    </div>

                                    <div className="bg-dark bg-opacity-50 p-3 rounded-4 border border-light border-opacity-10 d-flex justify-content-between align-items-center">
                                        <div>
                                            <p className="small text-white-50 mb-0 text-uppercase">UPI ID</p>
                                            <p className="fw-bold mb-0">{upiId}</p>
                                        </div>
                                        <button
                                            onClick={copyUpi}
                                            className="btn btn-outline-light border-0 p-2 rounded-3 hover-bg-secondary transition-300"
                                            aria-label="Copy UPI ID"
                                        >
                                            {copied ? <CheckCircle size={20} className="text-success" aria-hidden="true" /> : <Copy size={20} aria-hidden="true" />}
                                        </button>
                                    </div>

                                    <div className="mt-5 text-center">
                                        <p className="text-white-50 small mb-0 tamil-text opacity-75">
                                            {t('donate.quote')}
                                        </p>
                                    </div>
                                </div>

                                {/* Abstract background circle */}
                                <div className="position-absolute bottom-0 end-0 translate-middle-y me-n5 mb-n5"
                                    style={{
                                        width: '300px',
                                        height: '300px',
                                        background: 'var(--ntk-green)',
                                        borderRadius: '50%',
                                        opacity: 0.1,
                                        filter: 'blur(60px)'
                                    }}></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Donate;
