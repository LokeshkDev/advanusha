import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Video } from 'lucide-react';
import Layout from '../components/Layout';
import initialNews from '../data/news.json';
import bannerImg from '../assets/common-banner.png';

const News = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/news')
            .then(res => res.json())
            .then(data => setNews(data))
            .catch(err => console.error('Error fetching news:', err));
    }, []);

    return (
        <Layout>
            <section
                className="parallax-section pt-5 pb-5 text-white"
                style={{ backgroundImage: `url(${bannerImg})`, minHeight: '400px', display: 'flex', alignItems: 'center' }}
            >
                <div className="parallax-overlay"></div>
                <div className="container pt-5 pb-4 mt-5 position-relative z-2 text-center">
                    <h1 className="display-4 fw-black text-white mb-3 tamil-text">{t('nav.news')}</h1>
                    <p className="fs-5 text-white-50 mx-auto tamil-text" style={{ maxWidth: '800px' }}>
                        தமிழகத்தின் அரசியல் மாற்றங்கள் மற்றும் எமது கட்சியின் செய்திகளை உடனுக்குடன் தெரிந்து கொள்ளுங்கள்.
                    </p>
                </div>
            </section>

            <section className="bg-light py-5">
                <div className="container">

                    <div className="row g-4">
                        {news.map((item, idx) => (
                            <div key={item._id || item.id} className="col-12 col-md-6 col-lg-4">
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
                                            <Calendar size={14} />
                                            {new Date(item.date).toLocaleDateString()}
                                        </div>
                                        {item.videoUrl && (
                                            <div className="position-absolute bottom-0 end-0 m-3 px-3 py-1 rounded-pill bg-danger text-white fw-bold small d-flex align-items-center gap-2 shadow-sm" style={{ fontSize: '10px' }}>
                                                <Video size={12} /> VIDEO
                                            </div>
                                        )}
                                    </div>

                                    <div className="card-body p-5 d-flex flex-column h-100">
                                        <h3 onClick={() => navigate(`/news/${item._id || item.id}`)} className="h3 fw-bold text-primary mb-4 transition-300 group-hover-text-secondary cursor-pointer" style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                            {item.title}
                                        </h3>
                                        <div className="text-muted mb-5 lh-relaxed" style={{ display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                            <div dangerouslySetInnerHTML={{ __html: item.description }} />
                                        </div>
                                        <div className="mt-auto">
                                            <button
                                                onClick={() => navigate(`/news/${item._id || item.id}`)}
                                                className="btn p-0 fw-bold text-primary d-flex align-items-center gap-2 border-0 hover-gap transition-300"
                                            >
                                                Read More <ArrowRight size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default News;
