import crypto from 'crypto';

export default function handler(req, res) {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const stringToSign = `timestamp=${timestamp}${process.env.CLOUDINARY_API_SECRET}`;
  const signature = crypto.createHash('sha1').update(stringToSign).digest('hex');

  return res.status(200).json({
    timestamp,
    signature,
    apiKey: process.env.CLOUDINARY_API_KEY,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  });
}
