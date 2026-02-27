import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileText, Download, CheckSquare } from 'lucide-react';
import Layout from '../components/Layout';
import bannerImg from '../assets/common-banner.png';

const Manifesto = () => {
    const { t } = useTranslation();

    const categories = [
        {
            title: t('manifesto.cat1_title'),
            items: [
                t('manifesto.cat1_item1'),
                t('manifesto.cat1_item2'),
                t('manifesto.cat1_item3'),
                t('manifesto.cat1_item4')
            ]
        },
        {
            title: t('manifesto.cat2_title'),
            items: [
                t('manifesto.cat2_item1'),
                t('manifesto.cat2_item2'),
                t('manifesto.cat2_item3'),
                t('manifesto.cat2_item4')
            ]
        },
        {
            title: t('manifesto.cat3_title'),
            items: [
                t('manifesto.cat3_item1'),
                t('manifesto.cat3_item2'),
                t('manifesto.cat3_item3'),
                t('manifesto.cat3_item4')
            ]
        },
        {
            title: t('manifesto.cat4_title'),
            items: [
                t('manifesto.cat4_item1'),
                t('manifesto.cat4_item2'),
                t('manifesto.cat4_item3'),
                t('manifesto.cat4_item4')
            ]
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
                    <div className="row align-items-center g-4">
                        <div className="col-lg-8">
                            <motion.h1
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="display-4 fw-black mb-3 tamil-text text-white"
                            >
                                {t('nav.manifesto')}
                            </motion.h1>
                            <p className="fs-4 text-white-50 opacity-75 tamil-text">
                                {t('manifesto.banner_subtitle')}
                            </p>
                        </div>
                        <div className="col-lg-4 text-lg-end">
                            <button className="btn-secondary-custom px-5 py-4 d-flex align-items-center gap-3 ms-lg-auto">
                                <Download size={24} />
                                Download PDF (Tamil/English)
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-5">
                <div className="container py-5">
                    <div className="row g-4 pt-4">
                        {categories.map((category, idx) => (
                            <div key={idx} className="col-12 col-lg-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="card h-100 border-0 shadow-lg p-5 rounded-5 border-start border-primary"
                                    style={{ borderLeftWidth: '12px !important' }}
                                >
                                    <div className="d-flex align-items-center gap-4 mb-5">
                                        <div className="rounded-circle d-flex align-items-center justify-content-center text-primary" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(15, 81, 50, 0.1)' }}>
                                            <FileText size={24} />
                                        </div>
                                        <h3 className="h3 fw-bold text-primary mb-0">{category.title}</h3>
                                    </div>

                                    <ul className="list-unstyled d-flex flex-column gap-4">
                                        {category.items.map((item, i) => (
                                            <li key={i} className="d-flex gap-3 align-items-start group">
                                                <CheckSquare className="text-secondary mt-1" size={20} />
                                                <span className="text-muted fw-medium lh-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    <div className="ntk-gradient rounded-5 p-5 mt-5 text-white text-center shadow-lg position-relative overflow-hidden">
                        <div className="position-relative z-1 py-4">
                            <h2 className="display-5 fw-bold mb-4 tamil-text">{t('manifesto.cta_title')}</h2>
                            <p className="fs-5 text-white-50 opacity-75 mx-auto mb-5" style={{ maxWidth: '700px' }}>{t('manifesto.cta_desc')}</p>
                            <button className="btn-secondary-custom px-5 py-3">{t('common.i_support')}</button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Manifesto;
