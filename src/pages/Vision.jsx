import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Truck, Shield, Briefcase, ShoppingBag, Leaf, Droplets, Zap, Users } from 'lucide-react';
import Layout from '../components/Layout';
import bannerImg from '../assets/common-banner.png';

const Vision = () => {
    const { t } = useTranslation();

    const visions = [
        {
            icon: <Leaf size={40} />,
            title: t('vision.card_env_title'),
            desc: t('vision.card_env_desc')
        },
        {
            icon: <Truck size={40} />,
            title: t('vision.card_infra_title'),
            desc: t('vision.card_infra_desc')
        },
        {
            icon: <Shield size={40} />,
            title: t('vision.card_safety_title'),
            desc: t('vision.card_safety_desc')
        },
        {
            icon: <ShoppingBag size={40} />,
            title: t('vision.card_traders_title'),
            desc: t('vision.card_traders_desc')
        },
        {
            icon: <Briefcase size={40} />,
            title: t('vision.card_youth_title'),
            desc: t('vision.card_youth_desc')
        },
        {
            icon: <Droplets size={40} />,
            title: t('vision.card_water_title'),
            desc: t('vision.card_water_desc')
        }
    ];

    return (
        <Layout>
            {/* Header with Parallax Banner */}
            <section
                className="parallax-section pt-5 pb-5 text-white"
                style={{ backgroundImage: `url(${bannerImg})`, minHeight: '400px', display: 'flex', alignItems: 'center' }}
            >
                <div className="parallax-overlay"></div>
                <div className="container pt-5 pb-4 mt-5 position-relative z-2 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="d-inline-block px-3 py-1 rounded-pill bg-primary bg-opacity-10 text-primary fw-bold small text-uppercase ls-widest mb-4"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1) !important', color: 'var(--secondary) !important' }}
                    >
                        {t('vision.badge')}
                    </motion.div>
                    <h1 className="display-4 fw-black text-white mb-4 tamil-text">
                        {t('vision.title')}
                    </h1>
                    <p className="fs-5 text-white-50 mx-auto tamil-text" style={{ maxWidth: '800px' }}>
                        {t('vision.subtitle')}
                    </p>
                </div>
            </section>

            {/* Vision Grid */}
            <section className="py-5">
                <div className="container py-5">
                    <div className="row g-4">
                        {visions.map((vision, idx) => (
                            <div key={idx} className="col-12 col-md-6 col-lg-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="card h-100 border-0 shadow-lg p-5 rounded-5 hover-y transition-500 position-relative overflow-hidden group"
                                >
                                    <div className="position-absolute top-0 end-0 rounded-circle opacity-5 transition-500 scale-110"
                                        style={{ width: '120px', height: '120px', backgroundColor: 'var(--primary)', margin: '-20px' }}></div>

                                    <div className="position-relative z-1">
                                        <div className="d-flex align-items-center justify-content-center rounded-4 mb-4 transition-500 bg-primary bg-opacity-10 text-primary group-hover-bg-primary group-hover-text-white" style={{ width: '80px', height: '80px' }} aria-hidden="true">
                                            {vision.icon}
                                        </div>
                                        <h3 className="h4 fw-bold text-primary mb-3 tamil-text">{vision.title}</h3>
                                        <p className="text-muted lh-relaxed mb-0">{vision.desc}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Section */}
            <section className="ntk-gradient py-5 text-white position-relative overflow-hidden">
                <div className="position-absolute h-100 w-100 top-0 start-0 opacity-10 pointer-events-none d-flex justify-content-end align-items-center">
                    <Zap size={400} strokeWidth={0.5} className="text-secondary rotate-12" style={{ transform: 'translateX(20%)' }} />
                </div>

                <div className="container position-relative z-1 py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-7">
                            <h2 className="display-5 fw-black tamil-text mb-4">{t('vision.feature_title')}</h2>
                            <p className="fs-4 opacity-75 mb-5 tamil-text">{t('vision.feature_desc')}</p>
                            <ul className="list-unstyled d-flex flex-column gap-3">
                                {[
                                    t('vision.feature_list_1'),
                                    t('vision.feature_list_2'),
                                    t('vision.feature_list_3')
                                ].map((item, i) => (
                                    <li key={i} className="d-flex align-items-center gap-3 fs-5">
                                        <CheckCircle className="text-secondary flex-shrink-0" />
                                        <span className="tamil-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-5">
                            <div className="p-5 rounded-5 border border-white border-opacity-10 shadow-lg bg-white bg-opacity-10 backdrop-blur-md">
                                <div className="d-flex align-items-center gap-4 mb-4">
                                    <div className="rounded-circle d-flex align-items-center justify-content-center text-primary" style={{ width: '80px', height: '80px', backgroundColor: 'var(--secondary)' }}>
                                        <Users size={40} />
                                    </div>
                                    <div>
                                        <h4 className="fw-bold fs-3 mb-0 tamil-text">{t('vision.assembly_title')}</h4>
                                        <p className="text-secondary small fw-bold mb-0 tamil-text">{t('vision.assembly_subtitle')}</p>
                                    </div>
                                </div>
                                <p className="text-white text-opacity-75 lh-relaxed mb-5 tamil-text">
                                    {t('vision.assembly_desc')}
                                </p>
                                <button className="btn-secondary-custom w-100 py-3 tamil-text">{t('vision.assembly_btn')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

const CheckCircle = ({ className }) => (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

export default Vision;
