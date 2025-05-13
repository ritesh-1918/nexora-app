import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5001;

// Enable CORS for frontend connection
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// API endpoints
app.get('/api/technologies', (req, res) => {
  res.json({
    frontend: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'MongoDB', 'REST API']
  });
});

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});