import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    image: { type: String, required: true },
    imageFolder: { type: String, default: 'news' },
    description: { type: String, required: true },
    content: { type: String },
    videoUrl: { type: String }
}, { timestamps: true });

export default mongoose.model('News', newsSchema);
