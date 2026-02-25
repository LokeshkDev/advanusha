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
            title: "அதிகாரப்பரவல் & நிர்வாகம்",
            items: [
                "தொகுதி மேம்பாட்டு நிதியில் முழுமையான வெளிப்படைத்தன்மை.",
                "மாதம்தோறும் மக்கள் சபை கூட்டி குறைகளைக் கேட்டறிதல்.",
                "அரசுப் பணிகளில் முறைகேடுகளைத் தவிர்க்க டிஜிட்டல் கண்காணிப்பு.",
                "24/7 அவசர உதவி மையங்கள் அமைத்தல்."
            ]
        },
        {
            title: "மருத்துவம் & மக்கள் நலம்",
            items: [
                "நவீன வசதிகளுடன் கூடிய அரசு ஆரம்ப சுகாதார நிலையங்கள்.",
                "முதியோருக்கான நடமாடும் மருத்துவ வாகனச் சேவை.",
                "தொகுதி முழுவதும் தூய்மையான சுற்றுச்சூழல் மற்றும் டெங்கு தடுப்பு நடவடிக்கைகள்.",
                "நலிவடைந்த குடும்பங்களுக்கு அரசு நலத்திட்டங்கள் நேரடியாகச் சென்றடைய உறுதி செய்தல்."
            ]
        },
        {
            title: "கல்வி & வேலைவாய்ப்பு",
            items: [
                "அரசுப் பள்ளிகளை மின்னணு வகுப்பறைகளுடன் தரம் உயர்த்துதல்.",
                "போட்டித் தேர்வுகளுக்கான (TNPSC, UPSC) இலவசப் பயிற்சி மையங்கள்.",
                "உள்ளூர் இளைஞர்களுக்குத் தி.நகர் வணிக நிறுவனங்களில் வேலைவாய்ப்பு முன்னுரிமை.",
                "தையல் மற்றும் சிறுதொழில் முனைவோருக்குக் கடனுதவி மற்றும் சந்தைப்படுத்துதல்."
            ]
        },
        {
            title: "மண் & மக்கள் வளம்",
            items: [
                "நீர்நிலை ஆக்கிரமிப்புகளை அகற்றி தி.நகர் வெள்ளப் பாதிப்பில்லா மண்டலமாக மாற்றுதல்.",
                "திடக்கழிவு மேலாண்மையில் நவீன தொழில்நுட்பம் மற்றும் மக்கும் குப்பை உரம் தயாரிப்பு.",
                "நெகிழி இல்லா தி.நகரை உருவாக்கிப் பசுமைப் போர்வையை அதிகரித்தல்.",
                "பாரம்பரிய தமிழர் கலைகள் மற்றும் பண்பாட்டு நிகழ்வுகளுக்கான அரங்கம்."
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
                                தி.நகர் மக்களுக்கான எமது தேர்தல் வாக்குறுதிகள். புதியதொரு தேசம் செய்வோம்!
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
                            <h2 className="display-5 fw-bold mb-4 tamil-text">மாற்றம் எம்மால் நிச்சயம்!</h2>
                            <p className="fs-5 text-white-50 opacity-75 mx-auto mb-5" style={{ maxWidth: '700px' }}>We believe in accountability. This manifesto is not a mere paper but a social contract between us and you.</p>
                            <button className="btn-secondary-custom px-5 py-3">I Support This Vision</button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Manifesto;
