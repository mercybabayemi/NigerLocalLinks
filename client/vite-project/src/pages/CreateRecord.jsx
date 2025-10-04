import { useState, useEffect } from "react";
import { useCreateRecordMutation } from "../store/slices/CreateRecordApiSlice.jsx";
import { useNavigate } from "react-router-dom";
import {uploadImage} from "../utils/CloudinaryUpload.js";
import { FileText, DollarSign, MessageSquare, User, MapPin, Upload, Loader2, AlertCircle } from "lucide-react";

const CreateRecord = () => {
  const [formData, setFormData] = useState({
    title: "",
    comments: "",
    officerid: "",
    localid: "",
    fee: "",
    url: [],
  });

  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const [createRecord, { isLoading, error, isSuccess, data }] = useCreateRecordMutation();
  const navigate = useNavigate();

  // Format Naira fee with commas
  const formatCurrency = (value) => {
    if (!value) return "";
    const onlyNums = value.replace(/\D/g, "");
    return onlyNums.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleFeeChange = (e) => {
    const formatted = formatCurrency(e.target.value);
    setFormData({ ...formData, fee: formatted });
  };

  // Handle regular input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Image upload logic
  const handleImageUpload = async (file) => {
    setIsUploading(true);
    try {
      const uploadedUrl = await uploadImage(file);
      setFormData((prev) => ({
        ...prev,
        url: [...prev.url, uploadedUrl],
      }));
    } catch (err) {
      console.error("Image upload failed:", err);
      alert("Failed to upload image. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) handleImageUpload(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.url.length === 0) {
      alert("Please upload at least one image before creating a record.");
      return;
    }
    try {
      await createRecord(formData).unwrap();
    } catch (err) {
      console.error("Error creating record:", err);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/record-success", { state: data });
    }
  }, [isSuccess, data, navigate]);

  const formFields = [
    {
      label: "Title",
      name: "title",
      placeholder: "Enter title",
      type: "text",
      icon: FileText,
      required: true,
    },
    {
      label: "Fee Amount",
      name: "fee",
      placeholder: "0.00",
      type: "text",
      icon: DollarSign,
      required: true,
      onChange: handleFeeChange,
    },
    {
      label: "Comments",
      name: "comments",
      placeholder: "Enter your comments",
      type: "text",
      icon: MessageSquare,
      required: true,
    },
    {
      label: "Officer ID",
      name: "officerid",
      placeholder: "Enter officer ID",
      type: "text",
      icon: User,
      required: true,
    },
    {
      label: "Local ID",
      name: "localid",
      placeholder: "Enter local ID",
      type: "text",
      icon: MapPin,
      required: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F2F0EF] sm:pt-16 lg:pt-4">
      <main className="relative flex items-center justify-center p-4 sm:p-8 lg:p-12">
        <div className="w-full max-w-[700px] bg-white shadow-2xl rounded-3xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#333333] to-[#4A4A4A] px-8 py-8 text-center">
            <div className="w-16 h-16 bg-[#EBD1AE] rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Create New Record</h2>
            <p className="text-gray-200 text-sm">Fill in the details below to create your record</p>
          </div>

          {/* Form Section */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-[#333333] flex items-center">
                  <div className="w-2 h-6 bg-[#EBD1AE] rounded-full mr-3"></div>
                  Basic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formFields.slice(0, 2).map(({ label, name, placeholder, type, icon: Icon, required, onChange }) => (
                    <div key={name} className="group relative">
                      <input
                        type={type}
                        id={name}
                        name={name}
                        value={formData[name]}
                        placeholder=" "
                        className="peer w-full h-14 px-10 pt-6 pb-2 border-2 border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-0 focus:border-[#EBD1AE] transition-all duration-300 hover:border-gray-300"
                        onChange={onChange || handleInputChange}
                        required={required}
                      />
                      <label
                        htmlFor={name}
                        className="absolute left-10 top-4 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#EBD1AE] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600"
                      >
                        {label} {required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      {name === "fee" ? (
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#EBD1AE] font-semibold">₦</span>
                      ) : (
                        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#EBD1AE] peer-focus:text-[#EBD1AE] transition-colors duration-300" />
                      )}
                      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#EBD1AE] to-transparent opacity-0 peer-focus:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
                {formFields.slice(2, 3).map(({ label, name, placeholder, type, icon: Icon, required }) => (
                  <div key={name} className="group relative">
                    <input
                      type={type}
                      id={name}
                      name={name}
                      value={formData[name]}
                      placeholder=" "
                      className="peer w-full h-14 px-10 pt-6 pb-2 border-2 border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-0 focus:border-[#EBD1AE] transition-all duration-300 hover:border-gray-300"
                      onChange={handleInputChange}
                      required={required}
                    />
                    <label
                      htmlFor={name}
                      className="absolute left-10 top-4 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#EBD1AE] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600"
                    >
                      {label} {required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#EBD1AE] peer-focus:text-[#EBD1AE] transition-colors duration-300" />
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#EBD1AE] to-transparent opacity-0 peer-focus:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>

              {/* ID Information Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-[#333333] flex items-center">
                  <div className="w-2 h-6 bg-[#EBD1AE] rounded-full mr-3"></div>
                  ID Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formFields.slice(3).map(({ label, name, placeholder, type, icon: Icon, required }) => (
                    <div key={name} className="group relative">
                      <input
                        type={type}
                        id={name}
                        name={name}
                        value={formData[name]}
                        placeholder=" "
                        className="peer w-full h-14 px-10 pt-6 pb-2 border-2 border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-0 focus:border-[#EBD1AE] transition-all duration-300 hover:border-gray-300"
                        onChange={handleInputChange}
                        required={required}
                      />
                      <label
                        htmlFor={name}
                        className="absolute left-10 top-4 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#EBD1AE] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600"
                      >
                        {label} {required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#EBD1AE] peer-focus:text-[#EBD1AE] transition-colors duration-300" />
                      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#EBD1AE] to-transparent opacity-0 peer-focus:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Upload Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-[#333333] flex items-center">
                  <div className="w-2 h-6 bg-[#EBD1AE] rounded-full mr-3"></div>
                  Upload Images
                </h3>
                <div
                  className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
                    dragActive ? "border-[#EBD1AE] bg-[#EBD1AE]/5 scale-105" : "border-gray-300 hover:border-[#EBD1AE] hover:bg-gray-50"
                  }`}
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    name="uploadimage"
                    id="uploadimage"
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    disabled={isUploading}
                  />
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-[#EBD1AE]/20 rounded-full mx-auto flex items-center justify-center">
                      {isUploading ? (
                        <Loader2 className="animate-spin h-6 w-6 text-[#EBD1AE]" />
                      ) : (
                        <Upload className="w-6 h-6 text-[#EBD1AE]" />
                      )}
                    </div>
                    <div>
                      <p className="text-lg font-medium text-gray-700">
                        {isUploading ? "Uploading..." : "Drop your image here or click to browse"}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">Supports: JPG, PNG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>

                {/* Image Preview Grid */}
                {formData.url.length > 0 && (
                  <div className="space-y-4">
                    <p className="text-sm font-medium text-gray-600">Uploaded Images ({formData.url.length})</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                      {formData.url.map((imgUrl, index) => (
                        <div key={index} className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                          <img
                            src={imgUrl}
                            alt={`Upload ${index + 1}`}
                            className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                          <button
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                url: prev.url.filter((_, i) => i !== index),
                              }))
                            }
                            className="absolute top-2 right-2 bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 hover:bg-red-500 transition-all duration-300 transform scale-90 hover:scale-100"
                          >
                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="group relative w-full py-4 px-6 text-white bg-[#333333] rounded-xl font-semibold text-lg shadow-md hover:shadow-lg disabled:opacity-50 transition-all duration-300 transform hover:bg-[#EBD1AE] disabled:hover:bg-[#333333] overflow-hidden"
                  disabled={isLoading || isUploading}
                >
                  <span className="relative flex items-center justify-center">
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                        Creating Record...
                      </>
                    ) : (
                      <>
                        Create Record
                        <svg className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>

            {/* Error Message */}
            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-center animate-fadeIn">
                <div className="flex items-center justify-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span>{error.data?.message || "An error occurred while creating the record."}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateRecord;