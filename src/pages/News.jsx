import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import newsData from '../data/news.json';

const News = () => {
    const { t } = useTranslation();

    return (
        <Layout>
            <section className="bg-light pt-5 pb-5">
                <div className="container pt-5 mt-5">
                    <div className="text-center mb-5 pb-4">
                        <h1 className="display-4 fw-black text-primary mb-3 tamil-text">{t('nav.news')}</h1>
                        <p className="fs-5 text-muted">Stay updated with the latest activities and announcements.</p>
                    </div>

                    <div className="row g-4">
                        {newsData.map((news, idx) => (
                            <div key={news.id} className="col-12 col-md-6 col-lg-4">
                                <motion.article
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="card h-100 border-0 shadow-lg rounded-5 overflow-hidden transition-300 hover-y group"
                                >
                                    <div className="position-relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                                        <img
                                            src={news.image}
                                            alt={news.title}
                                            className="w-100 h-100 object-fit-cover transition-700 group-hover-scale"
                                        />
                                        <div className="position-absolute top-0 start-0 m-3 px-3 py-1 rounded-pill fw-bold small d-flex align-items-center gap-2 shadow-sm" style={{ backgroundColor: 'var(--secondary)', color: 'var(--primary)', fontSize: '11px' }}>
                                            <Calendar size={14} />
                                            {new Date(news.date).toLocaleDateString()}
                                        </div>
                                    </div>

                                    <div className="card-body p-5 d-flex flex-column h-100">
                                        <h3 className="h3 fw-bold text-primary mb-4 transition-300 group-hover-text-secondary" style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                            {news.title}
                                        </h3>
                                        <p className="text-muted mb-5 lh-relaxed" style={{ display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                            {news.description}
                                        </p>
                                        <div className="mt-auto">
                                            <button className="btn p-0 fw-bold text-primary d-flex align-items-center gap-2 border-0 hover-gap transition-300">
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
