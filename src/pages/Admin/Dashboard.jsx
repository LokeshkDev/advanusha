import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Newspaper, Image as ImageIcon, LogOut, Plus, Trash2, Edit2, Video, X } from 'lucide-react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import initialNews from '../../data/news.json';
import initialGallery from '../../data/gallery.json';

const Dashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('news');
    const [news, setNews] = useState([]);
    const [gallery, setGallery] = useState([]);

    // UI states
    const [isAddingNews, setIsAddingNews] = useState(false);
    const [isAddingGallery, setIsAddingGallery] = useState(false);
    const [editingNewsId, setEditingNewsId] = useState(null);
    const [editingGalleryId, setEditingGalleryId] = useState(null);

    // Form states
    const [newNews, setNewNews] = useState({
        title: '',
        date: new Date().toISOString().split('T')[0],
        image: '',
        imageFolder: 'news',
        description: '',
        content: '',
        videoUrl: ''
    });
    const [newGallery, setNewGallery] = useState({
        title: '',
        image: '',
        imageFolder: 'others',
        category: ''
    });
    const [imageFile, setImageFile] = useState(null);

    const API_BASE = 'https://advanusha.in/api';

    useEffect(() => {
        // Auth check
        const isAuth = localStorage.getItem('isAdminAuthenticated');
        if (!isAuth) {
            navigate('/admin');
            return;
        }
        fetchData();
    }, [navigate]);

    const fetchData = async () => {
        try {
            const newsRes = await fetch(`${API_BASE}/news`);
            const newsData = await newsRes.json();
            setNews(newsData);

            const galleryRes = await fetch(`${API_BASE}/gallery`);
            const galleryData = await galleryRes.json();
            setGallery(galleryData);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('isAdminAuthenticated');
        navigate('/admin');
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            // Local preview
            const reader = new FileReader();
            reader.onloadend = () => {
                if (activeTab === 'news') {
                    setNewNews({ ...newNews, image: reader.result });
                } else {
                    setNewGallery({ ...newGallery, image: reader.result });
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const addNews = async () => {
        try {
            const formData = new FormData();
            formData.append('imageFolder', newNews.imageFolder);

            // Clean data of MongoDB fields before sending
            const { _id, __v, ...cleanData } = newNews;
            formData.append('data', JSON.stringify(cleanData));

            if (imageFile) formData.append('imageFile', imageFile);

            const url = editingNewsId ? `${API_BASE}/news/${editingNewsId}` : `${API_BASE}/news`;
            const method = editingNewsId ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method: method,
                body: formData
            });

            if (res.ok) {
                fetchData();
                setIsAddingNews(false);
                setEditingNewsId(null);
                setNewNews({
                    title: '',
                    date: new Date().toISOString().split('T')[0],
                    image: '',
                    imageFolder: 'news',
                    description: '',
                    content: '',
                    videoUrl: ''
                });
                setImageFile(null);
            } else {
                const errData = await res.json();
                alert(`Error: ${errData.message}`);
            }
        } catch (err) {
            console.error('Error adding news:', err);
            alert('Failed to save news article.');
        }
    };

    const editNews = (item) => {
        setNewNews(item);
        setEditingNewsId(item._id); // MongoDB uses _id
        setIsAddingNews(true);
    };

    const deleteNews = async (id) => {
        if (window.confirm('Are you sure you want to delete this news article?')) {
            try {
                await fetch(`${API_BASE}/news/${id}`, { method: 'DELETE' });
                fetchData();
            } catch (err) {
                console.error('Error deleting news:', err);
            }
        }
    };

    const addGallery = async () => {
        try {
            const formData = new FormData();
            formData.append('imageFolder', newGallery.imageFolder);

            const { _id, __v, ...cleanData } = newGallery;
            formData.append('data', JSON.stringify(cleanData));

            if (imageFile) formData.append('imageFile', imageFile);

            const url = editingGalleryId ? `${API_BASE}/gallery/${editingGalleryId}` : `${API_BASE}/gallery`;
            const method = editingGalleryId ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method: method,
                body: formData
            });

            if (res.ok) {
                fetchData();
                setIsAddingGallery(false);
                setEditingGalleryId(null);
                setNewGallery({
                    title: '',
                    image: '',
                    imageFolder: 'others',
                    category: ''
                });
                setImageFile(null);
            }
        } catch (err) {
            console.error('Error adding gallery:', err);
        }
    };

    const editGallery = (item) => {
        setNewGallery(item);
        setEditingGalleryId(item._id);
        setIsAddingGallery(true);
    };

    const deleteGallery = async (id) => {
        if (window.confirm('Are you sure you want to delete this gallery image?')) {
            try {
                await fetch(`${API_BASE}/gallery/${id}`, { method: 'DELETE' });
                fetchData();
            } catch (err) {
                console.error('Error deleting gallery:', err);
            }
        }
    };

    const quillModules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'color'],
            ['clean']
        ],
    };

    const imageFolders = ['news', 'meeting', 'service', 'campaign', 'others'];

    const downloadJSON = (type) => {
        const data = type === 'news' ? news : gallery;
        const filename = type === 'news' ? 'news.json' : 'gallery.json';
        const blob = new Blob([JSON.stringify(data, null, 4)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const handleJSONImport = (e, type) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const importedData = JSON.parse(event.target.result);
                    if (Array.isArray(importedData)) {
                        if (type === 'news') {
                            setNews(importedData);
                        } else {
                            setGallery(importedData);
                        }
                        alert(`${type.charAt(0).toUpperCase() + type.slice(1)} data imported successfully!`);
                    } else {
                        alert('Invalid JSON format. Expected an array of items.');
                    }
                } catch (error) {
                    alert('Error parsing JSON file.');
                }
            };
            reader.readAsText(file);
        }
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
                    <div className="d-flex align-items-center gap-3">
                        <h2 className="h2 fw-black text-primary text-capitalize mb-0">{activeTab} Management</h2>
                        <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2">{activeTab === 'news' ? news.length : gallery.length} Items</span>
                        <button
                            onClick={() => downloadJSON(activeTab)}
                            className="btn btn-outline-primary rounded-pill px-3 py-1 small fw-bold d-flex align-items-center gap-2"
                            style={{ fontSize: '11px' }}
                            title={`Download updated ${activeTab}.json`}
                        >
                            <LogOut size={12} className="rotate-90" /> Export
                        </button>
                        <label
                            className="btn btn-outline-secondary rounded-pill px-3 py-1 small fw-bold d-flex align-items-center gap-2 mb-0"
                            style={{ fontSize: '11px', cursor: 'pointer' }}
                            title={`Upload a ${activeTab}.json file`}
                        >
                            <Plus size={12} /> Import
                            <input
                                type="file"
                                accept=".json"
                                className="d-none"
                                onChange={(e) => handleJSONImport(e, activeTab)}
                            />
                        </label>
                    </div>
                    <button
                        onClick={() => {
                            if (activeTab === 'news') {
                                setEditingNewsId(null);
                                setIsAddingNews(!isAddingNews);
                                setNewNews({
                                    title: '',
                                    date: new Date().toISOString().split('T')[0],
                                    image: '',
                                    imageFolder: 'news',
                                    description: '',
                                    content: '',
                                    videoUrl: ''
                                });
                            } else {
                                setEditingGalleryId(null);
                                setIsAddingGallery(!isAddingGallery);
                                setNewGallery({
                                    title: '',
                                    image: '',
                                    imageFolder: 'others',
                                    category: ''
                                });
                            }
                        }}
                        className="btn-primary-custom d-flex align-items-center gap-2 px-4 py-3 rounded-4 shadow-lg"
                    >
                        {isAddingNews || isAddingGallery ? <X size={20} /> : <Plus size={20} />}
                        {isAddingNews || isAddingGallery ? 'Cancel' : `Add New ${activeTab === 'news' ? 'News' : 'Image'}`}
                    </button>
                </header>

                {/* News Section */}
                {activeTab === 'news' && (
                    <div className="d-flex flex-column gap-4">
                        {isAddingNews && (
                            <div className="card border-0 p-5 rounded-5 shadow-lg bg-white mb-4 border-2 border-primary border-opacity-25 animated fadeIn">
                                <h3 className="h4 fw-bold mb-4">{editingNewsId ? 'Edit News Article' : 'New News Article'}</h3>
                                <div className="row g-4 mb-4">
                                    <div className="col-md-8">
                                        <label className="form-label fw-bold text-muted small">Article Title</label>
                                        <input
                                            type="text"
                                            placeholder="Title"
                                            value={newNews.title}
                                            onChange={e => setNewNews({ ...newNews, title: e.target.value })}
                                            className="form-control bg-light border-0 px-4 py-3 rounded-3 shadow-none focus-primary"
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label fw-bold text-muted small">Publish Date</label>
                                        <input
                                            type="date"
                                            value={newNews.date}
                                            onChange={e => setNewNews({ ...newNews, date: e.target.value })}
                                            className="form-control bg-light border-0 px-4 py-3 rounded-3 shadow-none focus-primary"
                                        />
                                    </div>
                                </div>

                                <div className="row g-4 mb-4">
                                    <div className="col-md-4">
                                        <label className="form-label fw-bold text-muted small">Folder Location</label>
                                        <select
                                            className="form-select bg-light border-0 px-4 py-3 rounded-3 shadow-none"
                                            value={newNews.imageFolder}
                                            onChange={e => setNewNews({ ...newNews, imageFolder: e.target.value })}
                                        >
                                            {imageFolders.map(folder => (
                                                <option key={folder} value={folder}>{folder.charAt(0).toUpperCase() + folder.slice(1)}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-md-8">
                                        <label className="form-label fw-bold text-muted small">Image Upload / URL</label>
                                        <div className="input-group">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                                className="form-control bg-light border-0 px-4 py-3 rounded-start-3 shadow-none"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Or paste Image URL"
                                                value={newNews.image && !newNews.image.startsWith('data:') ? newNews.image : ''}
                                                onChange={e => setNewNews({ ...newNews, image: e.target.value })}
                                                className="form-control bg-light border-0 px-4 py-3 rounded-end-3 shadow-none"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-bold text-muted small">Video Link (Optional)</label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-light border-0 px-3"><Video size={18} /></span>
                                        <input
                                            type="text"
                                            placeholder="YouTube / Video Link"
                                            value={newNews.videoUrl}
                                            onChange={e => setNewNews({ ...newNews, videoUrl: e.target.value })}
                                            className="form-control bg-light border-0 px-4 py-3 rounded-end-3 shadow-none"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-bold text-muted small">Brief Summary (Rich Text)</label>
                                    <div className="quill-wrapper quill-editor-summary">
                                        <ReactQuill
                                            theme="snow"
                                            value={newNews.description}
                                            onChange={(val) => setNewNews({ ...newNews, description: val })}
                                            modules={quillModules}
                                        />
                                    </div>
                                </div>

                                <div className="mb-4 mt-4">
                                    <label className="form-label fw-bold text-muted small">Full Content (Rich Text)</label>
                                    <div className="quill-wrapper quill-editor-content">
                                        <ReactQuill
                                            theme="snow"
                                            value={newNews.content}
                                            onChange={(val) => setNewNews({ ...newNews, content: val })}
                                            modules={quillModules}
                                        />
                                    </div>
                                </div>

                                <div className="d-flex gap-3 mt-5 pt-3">
                                    <button onClick={addNews} className="btn btn-primary px-5 py-3 rounded-3 fw-bold border-0 shadow-sm" style={{ backgroundColor: 'var(--primary)' }}>
                                        {editingNewsId ? 'Update Article' : 'Save Article'}
                                    </button>
                                    <button onClick={() => {
                                        setIsAddingNews(false);
                                        setEditingNewsId(null);
                                    }} className="btn btn-light px-5 py-3 rounded-3 text-muted fw-bold">Cancel</button>
                                </div>
                            </div>
                        )}

                        <div className="row g-4">
                            {news.map(item => (
                                <div key={item._id || item.id} className="col-12">
                                    <div className="card border-0 p-3 rounded-4 shadow-sm bg-white d-flex flex-row align-items-center gap-4 hover-shadow transition-all">
                                        <div className="rounded-3 overflow-hidden bg-light shadow-sm" style={{ width: '150px', height: '100px', flexShrink: 0 }}>
                                            <img src={item.image} alt="" className="w-100 h-100 object-fit-cover" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="d-flex align-items-center gap-2 mb-1">
                                                <h4 className="h5 fw-bold text-primary mb-0">{item.title}</h4>
                                                {item.videoUrl && <span className="badge bg-danger bg-opacity-10 text-danger rounded-pill"><Video size={12} /> Video</span>}
                                            </div>
                                            <p className="text-muted small mb-0 d-flex align-items-center gap-1">
                                                <span className="fw-bold text-secondary">{item.date}</span>
                                                <span className="opacity-25 mx-2">|</span>
                                                <span className="text-uppercase tracking-wider" style={{ fontSize: '10px' }}>In Folder: assets/images/{item.imageFolder || 'news'}</span>
                                            </p>
                                        </div>
                                        <div className="d-flex gap-2 me-3">
                                            <button onClick={() => editNews(item)} className="btn btn-light text-primary p-3 rounded-3 hover-bg-primary-light transition-all border-0"><Edit2 size={18} /></button>
                                            <button onClick={() => deleteNews(item._id || item.id)} className="btn btn-light text-danger p-3 rounded-3 hover-bg-danger-light transition-all border-0"><Trash2 size={18} /></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Gallery Section */}
                {activeTab === 'gallery' && (
                    <div className="row g-4">
                        {isAddingGallery && (
                            <div className="col-12">
                                <div className="card border-0 p-5 rounded-5 shadow-lg bg-white border-2 border-primary border-opacity-25 animated slideInDown">
                                    <h3 className="h4 fw-bold mb-4">{editingGalleryId ? 'Edit Gallery Image' : 'New Gallery Image'}</h3>
                                    <div className="row g-4 mb-4">
                                        <div className="col-md-6">
                                            <label className="form-label fw-bold text-muted small">Image Title</label>
                                            <input
                                                type="text"
                                                placeholder="Title"
                                                value={newGallery.title}
                                                onChange={e => setNewGallery({ ...newGallery, title: e.target.value })}
                                                className="form-control bg-light border-0 px-4 py-3 rounded-3 shadow-none"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label fw-bold text-muted small">Category</label>
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

                                    <div className="row g-4 mb-4">
                                        <div className="col-md-4">
                                            <label className="form-label fw-bold text-muted small">Folder Location</label>
                                            <select
                                                className="form-select bg-light border-0 px-4 py-3 rounded-3 shadow-none"
                                                value={newGallery.imageFolder}
                                                onChange={e => setNewGallery({ ...newGallery, imageFolder: e.target.value })}
                                            >
                                                {imageFolders.map(folder => (
                                                    <option key={folder} value={folder}>{folder.charAt(0).toUpperCase() + folder.slice(1)}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-md-8">
                                            <label className="form-label fw-bold text-muted small">Image Upload / URL</label>
                                            <div className="input-group">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageUpload}
                                                    className="form-control bg-light border-0 px-4 py-3 rounded-start-3 shadow-none"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Or paste Image URL"
                                                    value={newGallery.image && !newGallery.image.startsWith('data:') ? newGallery.image : ''}
                                                    onChange={e => setNewGallery({ ...newGallery, image: e.target.value })}
                                                    className="form-control bg-light border-0 px-4 py-3 rounded-end-3 shadow-none"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-3 mt-4">
                                        <button onClick={addGallery} className="btn btn-primary px-5 py-3 rounded-3 fw-bold border-0 shadow-sm" style={{ backgroundColor: 'var(--primary)' }}>
                                            {editingGalleryId ? 'Update Image' : 'Add to Gallery'}
                                        </button>
                                        <button onClick={() => {
                                            setIsAddingGallery(false);
                                            setEditingGalleryId(null);
                                        }} className="btn btn-light px-5 py-3 rounded-3 text-muted fw-bold">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {gallery.map(item => (
                            <div key={item._id || item.id} className="col-12 col-md-4 col-xl-3">
                                <div className="card border-0 p-3 rounded-4 shadow-sm bg-white position-relative group hover-shadow transition-all h-100">
                                    <div className="rounded-4 overflow-hidden mb-3 bg-light ratio ratio-1x1 shadow-sm">
                                        <img src={item.image} alt="" className="w-100 h-100 object-fit-cover" />
                                    </div>
                                    <h4 className="h6 fw-bold text-primary mb-1">{item.title}</h4>
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <span className="badge bg-secondary bg-opacity-10 text-primary fw-bold px-2 rounded-pill" style={{ fontSize: '9px' }}>{item.category}</span>
                                        <span className="text-muted" style={{ fontSize: '9px' }}>{item.imageFolder || 'others'}</span>
                                    </div>

                                    <div className="position-absolute top-0 end-0 m-4 opacity-0 group-hover-opacity transition-all translate-y-2 group-hover-translate-0 d-flex gap-2">
                                        <button onClick={() => editGallery(item)} className="btn btn-light p-2 rounded-3 shadow-lg border-0 text-primary"><Edit2 size={16} /></button>
                                        <button onClick={() => deleteGallery(item._id || item.id)} className="btn btn-danger p-2 rounded-3 shadow-lg border-0"><Trash2 size={16} /></button>
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
