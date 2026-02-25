import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Newspaper, Image as ImageIcon, LogOut, Plus, Trash2, Edit2 } from 'lucide-react';
import initialNews from '../../data/news.json';
import initialGallery from '../../data/gallery.json';

const Dashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('news');
    const [news, setNews] = useState(() => {
        const storedNews = localStorage.getItem('campaign_news');
        return storedNews ? JSON.parse(storedNews) : initialNews;
    });
    const [gallery, setGallery] = useState(() => {
        const storedGallery = localStorage.getItem('campaign_gallery');
        return storedGallery ? JSON.parse(storedGallery) : initialGallery;
    });
    const [isAddingNews, setIsAddingNews] = useState(false);
    const [isAddingGallery, setIsAddingGallery] = useState(false);

    // New Item states
    const [newNews, setNewNews] = useState({ title: '', date: '', image: '', description: '' });
    const [newGallery, setNewGallery] = useState({ title: '', image: '', category: '' });

    useEffect(() => {
        // Auth check
        const isAuth = localStorage.getItem('isAdminAuthenticated');
        if (!isAuth) {
            navigate('/admin');
            return;
        }
    }, [navigate]);

    useEffect(() => {
        if (news.length > 0) localStorage.setItem('campaign_news', JSON.stringify(news));
        if (gallery.length > 0) localStorage.setItem('campaign_gallery', JSON.stringify(gallery));
    }, [news, gallery]);

    const handleLogout = () => {
        localStorage.removeItem('isAdminAuthenticated');
        navigate('/admin');
    };

    const addNews = () => {
        const item = { ...newNews, id: Date.now() };
        setNews([item, ...news]);
        setIsAddingNews(false);
        setNewNews({ title: '', date: '', image: '', description: '' });
    };

    const deleteNews = (id) => {
        setNews(news.filter(n => n.id !== id));
    };

    const addGallery = () => {
        const item = { ...newGallery, id: Date.now() };
        setGallery([item, ...gallery]);
        setIsAddingGallery(false);
        setNewGallery({ title: '', image: '', category: '' });
    };

    const deleteGallery = (id) => {
        setGallery(gallery.filter(g => g.id !== id));
    };

    return (
        <div className="min-vh-100 bg-light d-flex">
            {/* Sidebar */}
            <div className="bg-primary text-white d-flex flex-column h-100 shadow-lg" style={{ width: '280px', minHeight: '100vh', position: 'sticky', top: 0 }}>
                <div className="p-4 border-bottom border-white border-opacity-10 text-center py-5">
                    <h1 className="h4 fw-black mb-0 text-secondary">Campaign Admin</h1>
                </div>
                <nav className="flex-grow-1 p-3 d-flex flex-column gap-2 mt-4">
                    <button
                        onClick={() => setActiveTab('news')}
                        className={`btn w-100 text-start d-flex align-items-center gap-3 px-4 py-3 rounded-4 border-0 transition-all ${activeTab === 'news' ? 'bg-secondary text-primary fw-bold' : 'text-white text-opacity-75 hover-bg-white-10'}`}
                        style={{ backgroundColor: activeTab === 'news' ? 'var(--secondary)' : 'transparent' }}
                    >
                        <Newspaper size={20} /> News
                    </button>
                    <button
                        onClick={() => setActiveTab('gallery')}
                        className={`btn w-100 text-start d-flex align-items-center gap-3 px-4 py-3 rounded-4 border-0 transition-all ${activeTab === 'gallery' ? 'bg-secondary text-primary fw-bold' : 'text-white text-opacity-75 hover-bg-white-10'}`}
                        style={{ backgroundColor: activeTab === 'gallery' ? 'var(--secondary)' : 'transparent' }}
                    >
                        <ImageIcon size={20} /> Gallery
                    </button>
                </nav>
                <div className="p-4 mt-auto border-top border-white border-opacity-10">
                    <button
                        onClick={handleLogout}
                        className="btn w-100 d-flex align-items-center justify-content-center gap-3 px-4 py-3 rounded-4 bg-danger bg-opacity-10 text-danger border-0 fw-bold hover-bg-danger hover-text-white transition-all"
                    >
                        <LogOut size={20} /> Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow-1 p-5 overflow-auto">
                <header className="d-flex justify-content-between align-items-center mb-5">
                    <h2 className="h2 fw-black text-primary text-capitalize mb-0">{activeTab} Management</h2>
                    <button
                        onClick={() => activeTab === 'news' ? setIsAddingNews(true) : setIsAddingGallery(true)}
                        className="btn-primary-custom d-flex align-items-center gap-2 px-4 py-3 rounded-4 shadow-lg"
                    >
                        <Plus size={20} /> Add New {activeTab === 'news' ? 'News' : 'Image'}
                    </button>
                </header>

                {/* News Section */}
                {activeTab === 'news' && (
                    <div className="d-flex flex-column gap-4">
                        {isAddingNews && (
                            <div className="card border-0 p-5 rounded-5 shadow-lg bg-white mb-4 border-2 border-primary border-opacity-25">
                                <h3 className="h4 fw-bold mb-4">New News Article</h3>
                                <div className="row g-4 mb-4">
                                    <div className="col-md-8">
                                        <input
                                            type="text"
                                            placeholder="Title"
                                            value={newNews.title}
                                            onChange={e => setNewNews({ ...newNews, title: e.target.value })}
                                            className="form-control bg-light border-0 px-4 py-3 rounded-3 shadow-none"
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <input
                                            type="date"
                                            value={newNews.date}
                                            onChange={e => setNewNews({ ...newNews, date: e.target.value })}
                                            className="form-control bg-light border-0 px-4 py-3 rounded-3 shadow-none"
                                        />
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Image URL (e.g., https://...)"
                                    value={newNews.image}
                                    onChange={e => setNewNews({ ...newNews, image: e.target.value })}
                                    className="form-control bg-light border-0 px-4 py-3 rounded-3 shadow-none mb-4"
                                />
                                <textarea
                                    placeholder="Brief Description"
                                    value={newNews.description}
                                    onChange={e => setNewNews({ ...newNews, description: e.target.value })}
                                    className="form-control bg-light border-0 px-4 py-3 rounded-3 shadow-none mb-4"
                                    style={{ height: '120px', resize: 'none' }}
                                ></textarea>
                                <div className="d-flex gap-3">
                                    <button onClick={addNews} className="btn btn-primary px-5 py-3 rounded-3 fw-bold border-0" style={{ backgroundColor: 'var(--primary)' }}>Save Article</button>
                                    <button onClick={() => setIsAddingNews(false)} className="btn btn-light px-5 py-3 rounded-3 text-muted fw-bold">Cancel</button>
                                </div>
                            </div>
                        )}

                        {news.map(item => (
                            <div key={item.id} className="card border-0 p-3 rounded-4 shadow-sm bg-white d-flex flex-row align-items-center gap-4 hover-shadow transition-all">
                                <div className="rounded-3 overflow-hidden bg-light" style={{ width: '120px', height: '80px', flexShrink: 0 }}>
                                    <img src={item.image} alt="" className="w-100 h-100 object-fit-cover" />
                                </div>
                                <div className="flex-grow-1">
                                    <h4 className="h5 fw-bold text-primary mb-1">{item.title}</h4>
                                    <p className="text-muted small mb-0">{item.date}</p>
                                </div>
                                <div className="d-flex gap-1 me-3">
                                    <button className="btn btn-light text-muted p-3 rounded-3 hover-text-primary"><Edit2 size={20} /></button>
                                    <button onClick={() => deleteNews(item.id)} className="btn btn-light text-muted p-3 rounded-3 hover-text-danger"><Trash2 size={20} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Gallery Section */}
                {activeTab === 'gallery' && (
                    <div className="row g-4">
                        {isAddingGallery && (
                            <div className="col-12">
                                <div className="card border-0 p-5 rounded-5 shadow-lg bg-white border-2 border-primary border-opacity-25">
                                    <h3 className="h4 fw-bold mb-4">New Gallery Image</h3>
                                    <div className="row g-4 mb-4">
                                        <div className="col-md-4">
                                            <input
                                                type="text"
                                                placeholder="Title"
                                                value={newGallery.title}
                                                onChange={e => setNewGallery({ ...newGallery, title: e.target.value })}
                                                className="form-control bg-light border-0 px-4 py-3 rounded-3 shadow-none"
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <input
                                                type="text"
                                                placeholder="Image URL"
                                                value={newGallery.image}
                                                onChange={e => setNewGallery({ ...newGallery, image: e.target.value })}
                                                className="form-control bg-light border-0 px-4 py-3 rounded-3 shadow-none"
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <select
                                                value={newGallery.category}
                                                onChange={e => setNewGallery({ ...newGallery, category: e.target.value })}
                                                className="form-select bg-light border-0 px-4 py-3 rounded-3 shadow-none"
                                            >
                                                <option value="">Select Category</option>
                                                <option value="Meetings">Meetings</option>
                                                <option value="Service">Service</option>
                                                <option value="Campaign">Campaign</option>
                                                <option value="Events">Events</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-3">
                                        <button onClick={addGallery} className="btn btn-primary px-5 py-3 rounded-3 fw-bold border-0" style={{ backgroundColor: 'var(--primary)' }}>Add to Gallery</button>
                                        <button onClick={() => setIsAddingGallery(false)} className="btn btn-light px-5 py-3 rounded-3 text-muted fw-bold">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {gallery.map(item => (
                            <div key={item.id} className="col-12 col-md-4">
                                <div className="card border-0 p-3 rounded-4 shadow-sm bg-white position-relative group">
                                    <div className="rounded-4 overflow-hidden mb-3 bg-light ratio ratio-1x1">
                                        <img src={item.image} alt="" className="w-100 h-100 object-fit-cover" />
                                    </div>
                                    <h4 className="h6 fw-bold text-primary mb-1">{item.title}</h4>
                                    <p className="text-muted small text-uppercase ls-widest mb-0" style={{ fontSize: '10px' }}>{item.category}</p>

                                    <div className="position-absolute top-0 end-0 m-4 opacity-0 group-hover-opacity transition-all translate-y-2 group-hover-translate-0">
                                        <button onClick={() => deleteGallery(item.id)} className="btn btn-danger p-2 rounded-3 shadow-lg border-0"><Trash2 size={16} /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
