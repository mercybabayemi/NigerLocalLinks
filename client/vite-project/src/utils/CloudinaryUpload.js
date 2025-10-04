// src/utils/CloudinaryUpload.js
export const uploadImage = async (file) => {
  try {
    // 1️⃣ Get Cloudinary signature from your Vercel serverless function
    const res = await fetch('/api/get-signature');
    const { timestamp, signature, apiKey, cloudName } = await res.json();

    // 2️⃣ Build the form data for Cloudinary upload
    const formData = new FormData();
    formData.append('file', file);
    formData.append('timestamp', timestamp);
    formData.append('api_key', apiKey);
    formData.append('signature', signature);

    // 3️⃣ Upload directly to Cloudinary
    const uploadResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await uploadResponse.json();

    // 4️⃣ Return the uploaded image URL
    return data.secure_url;
  } catch (error) {
    console.error('Image upload failed:', error);
    throw new Error('Upload failed. Please try again.');
  }
};
