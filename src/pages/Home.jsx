import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Award, Briefcase, Scale } from 'lucide-react';
import Layout from '../components/Layout';
import heroBanner from '../assets/advocate_hero_banner.png';
import anushaAbout from '../assets/anusha-about.png';
import visionBg from '../assets/vision-bg.png';

const Home = () => {
    const { t } = useTranslation();

    return (
        <Layout>
            {/* Hero Section - Advocate & Leader Premium Banner */}
            <section className="position-relative min-vh-100 d-flex align-items-center bg-white overflow-hidden py-5 py-lg-0">
                {/* Background Accents */}
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10 pointer-events-none">
                    <div className="position-absolute top-0 end-0 p-5">
                        <Scale size={400} strokeWidth={0.5} className="text-primary rotate-12" />
                    </div>
                </div>

                <div className="container position-relative z-2">
                    <div className="row align-items-center g-5">
                        {/* Text Content Area */}
                        <div className="col-lg-7 order-2 order-lg-1">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="pe-lg-5"
                            >
                                <div className="d-flex align-items-center gap-2 mb-4 mt-home" style={{ marginTop: '9rem' }}>
                                    <div className="h-px bg-primary" style={{ width: '40px' }}></div>
                                    <span className="text-primary fw-bold text-uppercase ls-widest small tamil-text">சமூகப் போராளி • வழக்கறிஞர் • மக்கள் வேட்பாளர்</span>
                                </div>

                                <h1 className="display-2 fw-black text-primary mb-4 tamil-text lh-1">
                                    நீதிக்கானக் குரல், <br />
                                    <span className="text-secondary">வளர்ச்சிக்கான மாற்றம்!</span>
                                </h1>

                                <p className="fs-4 text-black mb-5 tamil-text opacity-75">
                                    நீதிமன்றத்தில் எளிய மக்களின் உரிமைகளுக்காக வாதாடும் சட்டம், <br />
                                    இனி உங்கள் தொகுதியில் மாற்றத்தை விதைக்கும் கருவியாக!
                                </p>
                            </motion.div>
                        </div>

                        {/* Image Area */}
                        <div className="col-lg-5 order-1 order-lg-2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="position-relative"
                            >
                                {/* Decorative elements behind the photo */}
                                <div className="position-absolute top-50 start-50 translate-middle w-100 h-100"
                                    style={{
                                        background: 'var(--ntk-green)',
                                        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                                        opacity: 0.05,
                                        transform: 'translate(-50%, -50%) rotate(-10deg) scale(1.2)'
                                    }}></div>

                                <div className="profile-frame position-relative z-1 p-3">
                                    <img
                                        src={heroBanner}
                                        alt="Advocate Anusha"
                                        className="img-fluid rounded-5 shadow-2xl transition-700 border border-5 border-white"
                                        style={{ backgroundColor: '#fcfcfc' }}
                                    />

                                    {/* Floating stats card */}
                                    <div className="position-absolute bottom-0 start-0 m-4 bg-white p-3 rounded-4 shadow-xl border border-light">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="bg-secondary bg-opacity-20 p-2 rounded-3 text-primary">
                                                <Briefcase size={20} />
                                            </div>
                                            <div>
                                                <p className="small fw-black text-primary mb-0">10+ Years</p>
                                                <p className="text-black" style={{ fontSize: '0.6rem' }}>LEGAL PRACTICE</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Decorative Bottom Wave */}
                <div className="position-absolute bottom-0 start-0 w-100 overflow-hidden" style={{ height: '80px', transform: 'translateY(1px)' }}>
                    <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-100 h-100" style={{ fill: '#0F5132' }}>
                        <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,224C960,203,1056,149,1152,149.3C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </section>


            {/* About Quick Section */}
            <section className="py-5 bg-white">
                <div className="container py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <h3 className="text-secondary fw-bold text-uppercase ls-widest mb-3 tamil-text">வேட்பாளர் அறிமுகம்</h3>
                            <h2 className="display-5 fw-black text-primary mb-4 tamil-text">சமூகப் போராளி அட்வகேட் அனுஷா</h2>
                            <p className="fs-5 text-black mb-4 lh-lg tamil-text">
                                கடந்த 10 ஆண்டுகளுக்கு மேலாக சென்னை உயர்நீதிமன்றத்தில் வழக்கறிஞராக பணியாற்றி வரும் நான், எளிய மக்களின் உரிமைகளுக்காகத் தொடர்ந்து குரல் கொடுத்து வருகிறேன். சமூகம் மற்றும் அரசியல் மாற்றத்தின் அவசியத்தை உணர்ந்து, இன்று நாம் தமிழர் கட்சியின் சார்பில் உங்கள் தொகுதி வேட்பாளராகக் களமிறங்கியுள்ளேன்.
                            </p>
                            <a href="/about" className="btn-primary-custom px-5 py-3 text-decoration-none d-inline-block tamil-text">{t('common.read_full_bio')}</a>
                        </div>
                        <div className="col-lg-6">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="position-relative"
                            >
                                {/* Premium Border Highlight Effect */}
                                <div className="position-absolute -top-3 -end-3 -bottom-3 -start-3 bg-secondary opacity-20 rounded-5 blur-sm"></div>

                                <div className="position-relative z-1 p-2 bg-white rounded-5 shadow-2xl border border-light">
                                    <div className="rounded-4 overflow-hidden border border-4 border-white">
                                        <img
                                            src={anushaAbout}
                                            alt="Advocate Anusha About"
                                            className="img-fluid w-100 rounded-4"
                                            style={{ maxHeight: '500px', objectFit: 'cover' }}
                                        />
                                    </div>

                                </div>

                                {/* Floating Scale Icon */}
                                <div className="position-absolute -top-4 -right-4 bg-primary text-white p-3 rounded-circle shadow-xl d-none d-md-flex">
                                    <Scale size={32} strokeWidth={1.5} />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Preview with Parallax */}
            <section
                className="py-5 parallax-section overflow-hidden"
                style={{ backgroundImage: `url(${visionBg})` }}
            >
                {/* Light Overlay for readability */}
                <div className="parallax-overlay"></div>

                <div className="container py-5 position-relative z-2">
                    <div className="row align-items-end justify-content-between mb-5 g-4 text-center text-md-start">
                        <div className="col-lg-7">
                            <h2 className="display-5 fw-black text-primary mb-3 tamil-text">{t('vision.title')}</h2>
                            <p className="fs-5 text-white tamil-text">{t('home.vision_subtitle')}</p>
                        </div>
                        <div className="col-lg-auto">
                            <button className="btn-primary-custom px-5">{t('common.view_more')}</button>
                        </div>
                    </div>

                    <div className="row g-4 mt-2">
                        {[
                            { title: t('vision.infra'), desc: 'Modernizing drainage and road connectivity.' },
                            { title: t('vision.safety'), desc: '24/7 surveillance and community policing.' },
                            { title: t('vision.youth'), desc: 'Skill development and tech hubs for local youth.' },
                        ].map((item, i) => (
                            <div key={i} className="col-12 col-md-4">
                                <div className="bg-white p-5 rounded-4 shadow-sm h-100 border-top border-4 border-secondary hover-y transition-300">
                                    <h3 className="h4 fw-bold text-primary mb-4 tamil-text">{item.title}</h3>
                                    <p className="text-muted mb-5 lh-relaxed">{item.desc}</p>
                                    <a href="/vision" className="text-primary fw-bold text-decoration-none d-flex align-items-center gap-2 hover-gap transition-300 tamil-text">
                                        {t('common.read_more')} <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="ntk-gradient py-5 text-center position-relative text-white overflow-hidden">
                <div className="container py-5">
                    <div className="mx-auto" style={{ maxWidth: '800px' }}>
                        <h2 className="display-4 fw-black tamil-text mb-4 lh-sm">இணைவோம் மாற்றத்திற்காக!</h2>
                        <p className="fs-4 text-white fst-italic mb-5 opacity-75 tamil-text">{t('home.cta_subtitle')}</p>
                        <div className="d-flex flex-wrap justify-center gap-4">
                            <button className="px-5 py-3 rounded-pill fw-bold fs-5 btn-secondary-custom shadow-lg tamil-text">
                                {t('common.volunteer')}
                            </button>
                            <button className="px-5 py-3 rounded-pill fw-bold fs-5 btn btn-outline-light border-white border-2 opacity-75 hover-opacity-100 transition-300 tamil-text">
                                {t('common.support_now')}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
