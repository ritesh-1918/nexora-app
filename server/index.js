import express from 'express';
import cors from 'cors';

const app = express();
const port = 5174;

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.get('/api/technologies', (req, res) => {
  res.json({
    frontend: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    infrastructure: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions'],
    databases: ['MongoDB', 'PostgreSQL', 'Redis', 'Firestore']
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});