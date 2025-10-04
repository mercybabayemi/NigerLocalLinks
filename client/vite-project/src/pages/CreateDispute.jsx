
import { useState, useEffect } from 'react';
import { Upload, FileText, User, AlertCircle, CheckCircle2, Camera, Loader2 } from 'lucide-react';

const CreateDispute = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    localId: '',
    url: '',
    isSettled: false,
  });

  const [isUploading, setIsUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle drag and drop
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleImageUpload(file);
    }
  };

  // Handle image selection and automatic upload
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleImageUpload = async (file) => {
    setIsUploading(true);
    try {
      // Simulated upload - replace with actual uploadImage function
      await new Promise(resolve => setTimeout(resolve, 2000));
      const mockUrl = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        url: mockUrl,
      }));
    } catch (err) {
      console.error('Image upload failed:', err);
      setError('Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.url) {
      setError('Please upload an image before creating the dispute.');
      return;
    }

    if (!formData.title.trim() || !formData.description.trim() || !formData.localId.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);
    try {
      // Simulated API call - replace with actual createDispute function
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSuccess(true);
      setTimeout(() => {
        // Navigate logic would go here
        console.log('Navigating to success page...');
      }, 1500);
    } catch (err) {
      console.error('Error creating dispute:', err);
      setError('Failed to create dispute. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-100 via-stone-50 to-amber-50 p-4">
      <div className="max-w-2xl mx-auto pt-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-4 shadow-lg">
            <AlertCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Create New Dispute</h1>
          <p className="text-gray-600">Submit your dispute details and evidence for review</p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl border border-white/20 overflow-hidden">
          {/* Progress Bar */}
          <div className="h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500"></div>
          
          <div className="p-8 space-y-6">
            {/* Title Field */}
            <div className="group">
              <label htmlFor="title" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <FileText className="w-4 h-4 mr-2 text-amber-600" />
                Dispute Title *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  placeholder="Enter a clear, descriptive title"
                  className="w-full p-4 pl-4 border-2 border-gray-200 rounded-xl bg-gray-50/50 focus:outline-none focus:border-amber-500 focus:bg-white transition-all duration-300 group-hover:border-gray-300"
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Description Field */}
            <div className="group">
              <label htmlFor="description" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <FileText className="w-4 h-4 mr-2 text-amber-600" />
                Description *
              </label>
              <div className="relative">
                <textarea
                  id="description"
                  value={formData.description}
                  placeholder="Provide detailed information about your dispute..."
                  rows="4"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl bg-gray-50/50 focus:outline-none focus:border-amber-500 focus:bg-white transition-all duration-300 resize-none group-hover:border-gray-300"
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Local ID Field */}
            <div className="group">
              <label htmlFor="localId" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <User className="w-4 h-4 mr-2 text-amber-600" />
                Local ID *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="localId"
                  value={formData.localId}
                  placeholder="Enter your local identification"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl bg-gray-50/50 focus:outline-none focus:border-amber-500 focus:bg-white transition-all duration-300 group-hover:border-gray-300"
                  onChange={(e) => setFormData({ ...formData, localId: e.target.value })}
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Image Upload Section */}
            <div className="group">
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <Camera className="w-4 h-4 mr-2 text-amber-600" />
                Evidence Photo *
              </label>
              
              {!formData.url ? (
                <div
                  className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 cursor-pointer ${
                    dragOver
                      ? 'border-amber-500 bg-amber-50'
                      : 'border-gray-300 hover:border-amber-400 hover:bg-gray-50'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById('uploadimage').click()}
                >
                  <input
                    type="file"
                    id="uploadimage"
                    onChange={handleImageSelect}
                    accept="image/*"
                    className="hidden"
                  />
                  
                  {isUploading ? (
                    <div className="flex flex-col items-center space-y-3">
                      <Loader2 className="w-12 h-12 text-amber-600 animate-spin" />
                      <p className="text-amber-600 font-medium">Uploading image...</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                        <Upload className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Drag & drop your image here</p>
                        <p className="text-gray-500 text-sm">or click to browse</p>
                      </div>
                      <p className="text-xs text-gray-400">PNG, JPG up to 10MB</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative group">
                  <img
                    src={formData.url}
                    alt="Uploaded evidence"
                    className="w-full h-48 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, url: '' })}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
                    >
                      Remove Image
                    </button>
                  </div>
                  <div className="absolute top-3 right-3 bg-green-500 text-white p-2 rounded-full shadow-lg">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
              )}
            </div>

            {/* Settlement Status */}
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
              <input
                type="checkbox"
                id="isSettled"
                checked={formData.isSettled}
                onChange={(e) => setFormData({ ...formData, isSettled: e.target.checked })}
                className="w-5 h-5 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 focus:ring-2"
              />
              <label htmlFor="isSettled" className="text-sm font-medium text-gray-700 cursor-pointer">
                Mark this dispute as already settled
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              disabled={isLoading || isUploading}
              onClick={handleSubmit}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform ${
                isLoading || isUploading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Creating Dispute...</span>
                </div>
              ) : (
                'Create Dispute'
              )}
            </button>
          </div>

          {/* Status Messages */}
          {error && (
            <div className="mx-8 mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            </div>
          )}
          
          {success && (
            <div className="mx-8 mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                <p className="text-green-700 font-medium">
                  Dispute created successfully!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Additional Info Card */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-500 rounded-full p-2 mt-0.5">
              <AlertCircle className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Important Information</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• All fields marked with * are required</li>
                <li>• Upload clear evidence photos for better resolution</li>
                <li>• Disputes are reviewed within 24-48 hours</li>
                <li>• You'll receive updates via email</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDispute;