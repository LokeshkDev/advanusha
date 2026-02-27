import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Models
import News from './models/News.js';
import Gallery from './models/Gallery.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/advanusha';
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('MongoDB Connection Error:', err));

// Multer Setup for Image Uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const folder = req.body.imageFolder || 'others';
        // Saving to public/assets/images so Vite serves them correctly
        const uploadPath = path.join(__dirname, `../public/assets/images/${folder}`);

        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

// API Routes - News
app.get('/api/news', async (req, res) => {
    try {
        const news = await News.find().sort({ createdAt: -1 });
        res.json(news);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/news/:id', async (req, res) => {
    try {
        const article = await News.findById(req.params.id);
        if (article) {
            res.json(article);
        } else {
            res.status(404).json({ message: 'Article not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/news', upload.single('imageFile'), async (req, res) => {
    try {
        const newsData = JSON.parse(req.body.data);
        if (req.file) {
            // Construct the path relative to src for the frontend
            const folder = req.body.imageFolder || 'others';
            newsData.image = `/assets/images/${folder}/${req.file.filename}`;
        }
        const news = new News(newsData);
        const savedNews = await news.save();
        res.status(201).json(savedNews);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.put('/api/news/:id', upload.single('imageFile'), async (req, res) => {
    try {
        const newsData = JSON.parse(req.body.data);
        if (req.file) {
            const folder = req.body.imageFolder || 'others';
            newsData.image = `/assets/images/${folder}/${req.file.filename}`;
        }
        const updatedNews = await News.findByIdAndUpdate(req.params.id, newsData, { new: true });
        res.json(updatedNews);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.delete('/api/news/:id', async (req, res) => {
    try {
        await News.findByIdAndDelete(req.params.id);
        res.json({ message: 'News deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// API Routes - Gallery
app.get('/api/gallery', async (req, res) => {
    try {
        const gallery = await Gallery.find().sort({ createdAt: -1 });
        res.json(gallery);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/gallery', upload.single('imageFile'), async (req, res) => {
    try {
        const galleryData = JSON.parse(req.body.data);
        if (req.file) {
            const folder = req.body.imageFolder || 'others';
            galleryData.image = `/assets/images/${folder}/${req.file.filename}`;
        }
        const gallery = new Gallery(galleryData);
        const savedGallery = await gallery.save();
        res.status(201).json(savedGallery);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.put('/api/gallery/:id', upload.single('imageFile'), async (req, res) => {
    try {
        const galleryData = JSON.parse(req.body.data);
        if (req.file) {
            const folder = req.body.imageFolder || 'others';
            galleryData.image = `/assets/images/${folder}/${req.file.filename}`;
        }
        const updatedGallery = await Gallery.findByIdAndUpdate(req.params.id, galleryData, { new: true });
        res.json(updatedGallery);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.delete('/api/gallery/:id', async (req, res) => {
    try {
        await Gallery.findByIdAndDelete(req.params.id);
        res.json({ message: 'Gallery item deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Serve uploaded images
app.use('/assets/images', express.static(path.join(__dirname, '../public/assets/images')));

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
    const distPath = path.join(__dirname, '../dist');
    app.use(express.static(distPath));

    // SPA fallback - serve index.html for all non-API routes
    app.get('*', (req, res) => {
        if (!req.path.startsWith('/api')) {
            res.sendFile(path.join(distPath, 'index.html'));
        }
    });
}

app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));

