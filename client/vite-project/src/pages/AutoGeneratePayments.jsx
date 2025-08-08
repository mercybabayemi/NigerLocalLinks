// AutoGeneratePayments.jsx
import React from 'react';
import { useGeneratePaymentsMutation } from '../store/slices/AutoPaymentGenerationApiSlice.jsx';

const AutoGeneratePayments = () => {
  const [generatePayments, { isLoading, error, isSuccess }] = useGeneratePaymentsMutation();

  const handleGeneratePayments = async () => {
    try {
      await generatePayments().unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <p>Generating payments...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center">
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="flex justify-center">
        <p className="text-green-500">Payments generated successfully!</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center p-16">
      <div className="w-1/2 p-4 border border-black">
        <h2 className="text-2xl font-bold">Auto Generate Payments</h2>
        <button
          onClick={handleGeneratePayments}
          className="px-4 py-2 text-white bg-black rounded-full hover:bg-[#EBD1AE]"
        >
          Generate Payments
        </button>
      </div>
    </div>
  );
};

export default AutoGeneratePayments;