// AutoGeneratePayments.jsx
import React from 'react';
import { useGeneratePaymentsMutation } from '../store/slices/AutoPaymentGenerationApiSlice.jsx';

const AutoGeneratePayments = () => {
  const [generatePayments, { isLoading, error }] = useGeneratePaymentsMutation();

  const handleGeneratePayments = async () => {
    await generatePayments();
  };

  if (isLoading) {
    return <p>Generating payments...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Auto Generate Payments</h2>
      <button onClick={handleGeneratePayments}>
        Generate Payments
      </button>
    </div>
  );
};

export default AutoGeneratePayments;