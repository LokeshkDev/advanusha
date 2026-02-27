import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import Layout from '../components/Layout';
import galleryData from '../data/gallery.json';
import bannerImg from '../assets/common-banner.png';

const Gallery = () => {
    const { t } = useTranslation();
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        fetch('https://advanusha.in/api/gallery')
            .then(res => res.json())
            .then(data => setImages(data))
            .catch(err => console.error('Error fetching gallery:', err));
    }, []);

    const categories = ['All', ...new Set(images.map(item => item.category))];

    const filteredImages = filter === 'All'
        ? images
        : images.filter(img => img.category === filter);

    return (
        <Layout>
            <section
                className="parallax-section pt-5 pb-5 text-white"
                style={{ backgroundImage: `url(${bannerImg})`, minHeight: '400px', display: 'flex', alignItems: 'center' }}
            >
                <div className="parallax-overlay"></div>
                <div className="container pt-5 mt-5 position-relative z-2 text-center">
                    <h1 className="display-4 fw-black text-white mb-4 tamil-text">{t('nav.gallery')}</h1>
                    <p className="fs-5 text-white-50 mx-auto tamil-text" style={{ maxWidth: '800px' }}>
                        நமது கட்சியின் களப்பணிகள் மற்றும் முக்கிய நிகழ்வுகளின் புகைப்படத் தொகுப்பு.
                    </p>
                </div>
            </section>

            <section className="bg-light py-5">
                <div className="container">
                    {/* Filters */}
                    <div className="d-flex flex-wrap justify-center gap-3 mb-5 mt-2 overflow-auto pb-2 justify-content-center">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`btn rounded-pill px-4 fw-bold transition-all shadow-sm ${filter === cat
                                    ? 'btn-primary-custom'
                                    : 'bg-white text-muted hover-bg-light border'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="container py-5">
                    <div className="row g-4 pt-2">
                        <AnimatePresence mode='popLayout'>
                            {filteredImages.map((img) => (
                                <div key={img._id || img.id} className="col-12 col-md-6 col-lg-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="card border-0 rounded-5 overflow-hidden shadow-lg h-100 cursor-pointer position-relative group"
                                        onClick={() => setSelectedImage(img)}
                                    >
                                        <img
                                            src={img.image}
                                            alt={img.title}
                                            className="w-100 h-100 object-fit-cover transition-700 group-hover-scale"
                                            style={{ aspectRatio: '1/1' }}
                                        />
                                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center p-4 text-center text-white opacity-0 transition-300 group-hover-opacity" style={{ backgroundColor: 'rgba(15, 81, 50, 0.7)' }} role="button" tabIndex="0" aria-label={`View ${img.title}`}>
                                            <Maximize2 className="text-secondary mb-3" size={40} aria-hidden="true" />
                                            <h3 className="h4 fw-bold mb-1">{img.title}</h3>
                                            <p className="small fw-bold text-secondary text-uppercase ls-widest mb-0">{img.category}</p>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed-top w-100 vh-100 d-flex align-items-center justify-content-center p-4"
                        style={{ backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 1100 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="position-absolute top-0 end-0 m-5 btn text-white hover-text-secondary border-0"
                            aria-label="Close gallery"
                        >
                            <X size={48} aria-hidden="true" />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            className="position-relative"
                            style={{ maxWidth: '90vw' }}
                            onClick={e => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                className="img-fluid rounded-4 shadow-2xl"
                                style={{ maxHeight: '80vh' }}
                            />
                            <div className="mt-4 text-center">
                                <h3 className="text-white h3 fw-bold mb-1">{selectedImage.title}</h3>
                                <p className="text-secondary fw-bold text-uppercase ls-widest fs-5">{selectedImage.category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Layout>
    );
};

export default Gallery;
