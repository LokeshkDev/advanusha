import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, Video, ExternalLink, ArrowLeft, Share2 } from 'lucide-react';
import Layout from '../components/Layout';
import initialNews from '../data/news.json';

const NewsDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/news/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data && !data.message) {
                    setArticle(data);
                    window.scrollTo(0, 0);
                } else {
                    navigate('/news');
                }
            })
            .catch(err => {
                console.error('Error fetching article:', err);
                navigate('/news');
            });
    }, [id, navigate]);

    if (!article) return null;

    return (
        <Layout>
            <section className="bg-light pt-5 pb-5 mt-5">
                <div className="container pt-5">
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => navigate('/news')}
                        className="btn btn-white shadow-sm rounded-pill px-4 py-2 border-0 d-flex align-items-center gap-2 mb-5 hover-gap transition-all"
                    >
                        <ArrowLeft size={18} /> Back to News
                    </motion.button>

                    <div className="row g-5">
                        <div className="col-lg-9">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-5 shadow-lg overflow-hidden border border-light"
                            >
                                <div className="position-relative" style={{ aspectRatio: '16/9' }}>
                                    <img src={article.image} alt={article.title} className="w-100 h-100 object-fit-cover" />
                                    <div className="position-absolute top-0 start-0 m-4 px-3 py-1 rounded-pill bg-secondary text-primary fw-bold shadow-sm d-flex align-items-center gap-2">
                                        <Calendar size={16} />
                                        {new Date(article.date).toLocaleDateString()}
                                    </div>
                                </div>

                                <div className="p-5">
                                    <h1 className="display-5 fw-black text-primary tamil-text mb-4 lh-sm">{article.title}</h1>

                                    {article.videoUrl && (
                                        <div className="mb-5">
                                            <a href={article.videoUrl} target="_blank" rel="noopener noreferrer"
                                                className="btn btn-danger btn-lg rounded-4 w-100 d-flex align-items-center justify-content-center gap-3 fw-bold shadow-lg py-3">
                                                <Video size={24} /> WATCH EXCLUSIVE VIDEO COVERAGE <ExternalLink size={18} />
                                            </a>
                                        </div>
                                    )}

                                    <div className="rich-content tamil-text" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#333', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                                        {article.content ? (
                                            <div dangerouslySetInnerHTML={{ __html: article.content }} />
                                        ) : (
                                            <p className="fs-5">{article.description}</p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="col-lg-3">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="position-sticky" style={{ top: '100px' }}
                            >
                                <div className="bg-white p-5 rounded-5 shadow-lg border border-light mb-4 text-center">
                                    <h4 className="fw-bold text-primary mb-4">Share this Update</h4>
                                    <div className="d-flex justify-content-center gap-3">
                                        <button className="btn btn-primary rounded-circle p-3 d-flex align-items-center justify-content-center shadow-sm hover-y border-0" style={{ width: '55px', height: '55px' }}><Share2 size={24} /></button>
                                    </div>
                                    <p className="mt-4 text-muted small">Spread the word about our campaign activities and news.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default NewsDetail;
