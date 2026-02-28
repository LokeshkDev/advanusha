import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Award, Briefcase, Scale, Calendar } from 'lucide-react';
import Layout from '../components/Layout';
import heroBanner from '../assets/advocate_hero_banner.png';
import anushaAbout from '../assets/anusha-about.png';
import visionBg from '../assets/vision-bg.png';

const Home = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://advanusha.in/api/news')
            .then(res => res.json())
            .then(data => setNews(data.slice(0, 3)))
            .catch(err => console.error('Error fetching news:', err));
    }, []);

    return (
        <Layout>
            {/* Hero Section - Advocate & Leader Premium Banner */}
            <section className="position-relative min-vh-100 d-flex align-items-center bg-white overflow-hidden py-5 py-lg-0">
                {/* Background Accents */}
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10 pointer-events-none">
                    <div className="position-absolute top-0 end-0 p-5">
                        <Scale size={400} strokeWidth={0.5} className="text-primary rotate-12" aria-hidden="true" />
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
                                    <div className="h-px bg-primary"></div>
                                    <span className="text-primary fw-bold text-uppercase ls-widest small tamil-text">{t('home.hero_tagline')}</span>
                                </div>

                                <h1 className="display-2 fw-black text-primary mb-4 tamil-text lh-1">
                                    {t('home.hero_title_1')} <br />
                                    <span className="text-secondary">{t('home.hero_title_2')}</span>
                                </h1>

                                <p className="fs-4 text-black mb-5 tamil-text opacity-75">
                                    {t('home.hero_desc')}
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
                                            <div className="bg-secondary bg-opacity-20 p-2 rounded-3 text-primary" aria-hidden="true">
                                                <Briefcase size={20} />
                                            </div>
                                            <div>
                                                <p className="small fw-black text-primary mb-0">{t('home.stats_years')}</p>
                                                <p className="text-black tamil-text" style={{ fontSize: '0.6rem' }}>{t('home.stats_legal')}</p>
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
                            <h3 className="text-secondary fw-bold text-uppercase ls-widest mb-3 tamil-text">{t('home.candidate_intro')}</h3>
                            <h2 className="display-5 fw-black text-primary mb-4 tamil-text">{t('home.candidate_name')}</h2>
                            <p className="fs-5 text-black mb-4 lh-lg tamil-text">
                                {t('home.candidate_desc')}
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
                                <div className="position-absolute -top-4 -right-4 bg-primary text-white p-3 rounded-circle shadow-xl d-none d-md-flex" aria-hidden="true">
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
                            { title: t('home.vision_card_infra'), desc: t('home.vision_card_infra_desc') },
                            { title: t('home.vision_card_safety'), desc: t('home.vision_card_safety_desc') },
                            { title: t('home.vision_card_youth'), desc: t('home.vision_card_youth_desc') },
                        ].map((item, i) => (
                            <div key={i} className="col-12 col-md-4">
                                <div className="bg-white p-5 rounded-4 shadow-sm h-100 border-top border-4 border-secondary hover-y transition-300">
                                    <h3 className="h4 fw-bold text-primary mb-4 tamil-text">{item.title}</h3>
                                    <p className="text-muted mb-5 lh-relaxed">{item.desc}</p>
                                    <a href="/vision" className="text-primary fw-bold text-decoration-none d-flex align-items-center gap-2 hover-gap transition-300 tamil-text" aria-label={`Read more about ${item.title}`}>
                                        {t('common.read_more')} <ArrowRight size={16} aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest News Section */}
            {news.length > 0 && (
                <section className="py-5 bg-white">
                    <div className="container py-5">
                        <div className="d-flex justify-content-between align-items-end mb-5">
                            <div>
                                <h3 className="text-secondary fw-bold text-uppercase ls-widest mb-3 tamil-text">{t('home.latest_news')}</h3>
                                <h2 className="display-5 fw-black text-primary mb-0 tamil-text">{t('home.news_events')}</h2>
                            </div>
                            <button onClick={() => navigate('/news')} className="btn btn-primary-custom px-4 d-none d-md-block">
                                {t('common.view_more')}
                            </button>
                        </div>

                        <div className="row g-4">
                            {news.map((item, idx) => (
                                <div key={item._id || item.id} className="col-12 col-md-4">
                                    <motion.article
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="card h-100 border-0 shadow-lg rounded-5 overflow-hidden transition-300 hover-y group"
                                    >
                                        <div className="position-relative overflow-hidden" style={{ aspectRatio: '16/9' }} onClick={() => navigate(`/news/${item._id || item.id}`)}>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-100 h-100 object-fit-cover transition-700 group-hover-scale cursor-pointer"
                                            />
                                            <div className="position-absolute top-0 start-0 m-3 px-3 py-1 rounded-pill fw-bold small d-flex align-items-center gap-2 shadow-sm" style={{ backgroundColor: 'var(--secondary)', color: 'var(--primary)', fontSize: '11px' }}>
                                                <Calendar size={14} aria-hidden="true" />
                                                {new Date(item.date).toLocaleDateString()}
                                            </div>
                                        </div>

                                        <div className="card-body p-4 d-flex flex-column h-100">
                                            <h3 onClick={() => navigate(`/news/${item._id || item.id}`)} className="h5 fw-bold text-primary mb-3 transition-300 group-hover-text-secondary cursor-pointer" style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                {item.title}
                                            </h3>
                                            <div className="mt-auto">
                                                <button
                                                    onClick={() => navigate(`/news/${item._id || item.id}`)}
                                                    className="btn p-0 fw-bold text-primary d-flex align-items-center gap-2 border-0 hover-gap transition-300 small"
                                                    aria-label={`Read more about ${item.title}`}
                                                >
                                                    {t('common.read_more')} <ArrowRight size={16} aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.article>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-5 d-md-none">
                            <button onClick={() => navigate('/news')} className="btn btn-primary-custom w-100">
                                {t('common.view_more')}
                            </button>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="ntk-gradient py-5 text-center position-relative text-white overflow-hidden">
                <div className="container py-5">
                    <div className="mx-auto" style={{ maxWidth: '800px' }}>
                        <h2 className="display-4 fw-black tamil-text mb-4 lh-sm">{t('home.cta_title')}</h2>
                        <p className="fs-4 text-white fst-italic mb-5 opacity-75 tamil-text">{t('home.cta_subtitle')}</p>
                        <div className="d-flex flex-wrap justify-content-center gap-4">
                            <button onClick={() => navigate('/donate')} className="px-5 py-3 rounded-pill fw-bold fs-5 btn btn-secondary-custom shadow-lg d-flex flex-column align-items-center">
                                <span className="tamil-text">{t('common.voluntary_donation')}</span>
                                <span className="small opacity-75 text-uppercase ls-wide" style={{ fontSize: '12px' }}>Voluntary Donation</span>
                            </button>
                            <button onClick={() => navigate('/volunteer')} className="px-5 py-3 rounded-pill fw-bold fs-5 btn btn-outline-light border-white border-2 opacity-75 hover-opacity-100 transition-300 tamil-text">
                                {t('common.volunteer')}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
