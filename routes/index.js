import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const upload = multer({
  dest: path.join(__dirname, 'uploads'),
  limits: { fileSize: 50 * 1024 * 1024 },
});

app.post('/upload', upload.single('video'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.json({
    message: 'Video uploaded successfully!',
    file: req.file,
  });
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});