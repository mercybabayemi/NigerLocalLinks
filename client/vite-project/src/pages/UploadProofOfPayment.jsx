// UploadProofOfPayment.jsx
import React, { useState } from 'react';
import { useUploadProofOfPaymentMutation } from '../store/slices/PaymentApiSlice.jsx';

const UploadProofOfPayment = () => {
  const [file, setFile] = useState(null);
  const [uploadProofOfPayment, { isLoading, error }] = useUploadProofOfPaymentMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await uploadProofOfPayment(file).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center pt-16">
      <div className="w-1/2 p-4 border border-black space-y-4">
        <h1 className="text-2xl font-bold">Upload Proof of Payment</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-black rounded-full hover:bg-[#EBD1AE]"
          >
            Upload
          </button>
        </form>
        {error && <p className="text-red-500">{error.message}</p>}
      </div>
    </div>
  );
};

export default UploadProofOfPayment;