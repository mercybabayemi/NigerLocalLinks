// src/utils/cloudinaryUpload.js
export const uploadImage = async (file) => {
    const { timestamp, signature, apiKey, cloudName } = await fetch('http://localhost:5000/get-signature')
      .then(res => res.json());
  
    const formData = new FormData();
    formData.append('file', file);
    formData.append('timestamp', timestamp);
    formData.append('api_key', apiKey);
    formData.append('signature', signature);
  
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: formData,
    });
  
    const data = await response.json();
    return data.secure_url;
  };
  