import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap, Scale, Heart, Milestone, Eye } from 'lucide-react';
import Layout from '../components/Layout';
import bannerImg from '../assets/common-banner.png';
import heroPhoto from '../assets/advocate_hero_banner.png';

const About = () => {
    const { t } = useTranslation();

    const sections = [
        {
            icon: <GraduationCap size={32} />,
            title: t('about.education'),
            desc: t('about.education_desc')
        },
        {
            icon: <Scale size={32} />,
            title: t('about.legal_exp'),
            desc: t('about.legal_exp_desc')
        },
        {
            icon: <Heart size={32} />,
            title: t('about.social_service'),
            desc: t('about.social_service_desc')
        },
        {
            icon: <Milestone size={32} />,
            title: t('about.political_journey'),
            desc: t('about.political_journey_desc')
        },
        {
            icon: <Eye size={32} />,
            title: t('about.vision_tnagar'),
            desc: t('about.vision_tnagar_desc')
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
                <div className="container pt-5 pb-4 mt-5 position-relative z-2">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="display-4 fw-black mb-3 tamil-text text-white"
                    >
                        {t('about.banner_title')}
                    </motion.h1>
                    <p className="fs-4 text-white-50">{t('about.banner_subtitle')}</p>
                </div>
            </section>

            {/* Profile Section */}
            <section className="py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="col-lg-6 position-relative"
                        >
                            <div className="position-relative z-1 p-3">
                                <img
                                    src={heroPhoto}
                                    alt="Adv. Anusha"
                                    className="img-fluid rounded-5 shadow-2xl transition-700 border border-5 border-white bg-white"
                                />
                            </div>
                            <div className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center p-4 text-center text-primary fw-bold shadow-lg border border-5 border-white about-badge"
                                style={{ width: '180px', height: '180px', right: '-40px', bottom: '-20px', zIndex: 2 }}>
                                <span className="tamil-text">{t('about.badge_text')}</span>
                            </div>
                        </motion.div>

                        <div className="col-lg-6">
                            <div className="d-flex flex-column gap-5 py-3">
                                {sections.map((section, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="d-flex gap-4"
                                    >
                                        <div className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-4 border"
                                            style={{ width: '64px', height: '64px', backgroundColor: 'rgba(15, 81, 50, 0.05)', borderColor: 'rgba(15, 81, 50, 0.1)' }}>
                                            <span className="text-primary">{section.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="h4 fw-bold text-primary mb-2 tamil-text">{section.title}</h3>
                                            <p className="text-muted lh-relaxed mb-0">{section.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Public Life & Ideology Section */}
            <section className="py-5 bg-light">
                <div className="container py-5">
                    <div className="row g-4">
                        <div className="col-12 text-center mb-5">
                            <h2 className="display-5 fw-black tamil-text text-primary">{t('about.public_life_title')}</h2>
                            <div className="mx-auto bg-secondary mt-3" style={{ width: '80px', height: '4px' }}></div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                                <h3 className="h4 fw-bold text-primary mb-3 tamil-text">{t('about.public_life_heading')}</h3>
                                <p className="text-muted lh-lg mb-0 tamil-text">
                                    {t('about.public_life_desc')}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                                <h3 className="h4 fw-bold text-primary mb-3 tamil-text">{t('about.ntk_candidate_heading')}</h3>
                                <p className="text-muted lh-lg mb-0 tamil-text">
                                    {t('about.ntk_candidate_desc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote */}
            <section className="py-5 text-white text-center" style={{ backgroundColor: 'var(--primary)' }}>
                <div className="container py-5">
                    <div className="mx-auto" style={{ maxWidth: '800px' }}>
                        <span className="display-1 fw-serif opacity-25 d-block" style={{ color: 'var(--secondary)', marginBottom: '-40px' }}>“</span>
                        <h2 className="display-6 fw-light fst-italic lh-base tamil-text">
                            {t('about.quote')}
                        </h2>
                        <p className="mt-5 fw-bold text-uppercase ls-widest" style={{ color: 'var(--secondary)' }}>{t('about.quote_english')}</p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default About;
