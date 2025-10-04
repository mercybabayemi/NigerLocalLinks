import express from 'express';
import crypto from 'crypto';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());

app.get('/get-signature', (req, res) => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const stringToSign = `timestamp=${timestamp}${process.env.CLOUDINARY_API_SECRET}`;
  const signature = crypto.createHash('sha1').update(stringToSign).digest('hex');

  res.json({
    timestamp,
    signature,
    apiKey: process.env.CLOUDINARY_API_KEY,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
