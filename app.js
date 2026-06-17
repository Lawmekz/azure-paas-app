const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const APP_ENV = process.env.APP_ENV || 'development';
const STUDENT_NAME = process.env.STUDENT_NAME || 'Student';

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>Azure PaaS App</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:'Segoe UI',sans-serif;background:linear-gradient(135deg,#0078d4,#00bcf2);min-height:100vh;display:flex;align-items:center;justify-content:center;color:white}
    .card{background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);border-radius:16px;padding:48px;max-width:600px;text-align:center;border:1px solid rgba(255,255,255,0.2)}
    h1{font-size:2.5rem;margin-bottom:12px}
    p{font-size:1.1rem;opacity:0.9;margin:8px 0}
    .badge{display:inline-block;background:rgba(255,255,255,0.2);border-radius:20px;padding:6px 20px;margin-top:20px}
    .info-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:32px;text-align:left}
    .info-item{background:rgba(255,255,255,0.1);padding:16px;border-radius:10px}
    .info-item label{font-size:.75rem;opacity:.7;display:block}
    .info-item span{font-size:1rem;font-weight:600}
  </style>
</head>
<body>
  <div class="card">
    <h1>☁️ Azure PaaS App</h1>
    <p>Deployed with Azure App Service</p>
    <span class="badge">Assessment No. 5(2)</span>
    <div class="info-grid">
      <div class="info-item"><label>Student</label><span>${STUDENT_NAME}</span></div>
      <div class="info-item"><label>Environment</label><span>${APP_ENV}</span></div>
      <div class="info-item"><label>Runtime</label><span>Node.js + Express</span></div>
      <div class="info-item"><label>Platform</label><span>Azure App Service</span></div>
    </div>
  </div>
</body>
</html>`);
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', environment: APP_ENV, timestamp: new Date() });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));