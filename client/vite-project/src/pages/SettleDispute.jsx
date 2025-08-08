import React from 'react';
import { useGetDisputeQuery, useSettleDisputeMutation } from '../store/slices/DisputeApiSlice';

const SettleDispute = () => {
  const {
    data,
    isLoading,
    error,
    isUninitialized,
  } = useGetDisputeQuery(undefined, {
    skip: true,
  });
  const [settleDispute, { isLoading: isSettling, error: settleError }] = useSettleDisputeMutation();
  const [disputeId, setDisputeId] = React.useState(null);

  const handleSettle = async () => {
    try {
      await settleDispute({ disputeId, settlementData: {} }).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error.message}</p>;
  }

  return (
    <div className="flex justify-center pt-16">
    <div className="flex justify-center pt-16">
      <div className="w-1/2 p-4 border border-black">
        <h1 className="text-2xl font-bold">Settle Dispute</h1>
        {isUninitialized ? (
          <p>No dispute data available.</p>
        ) : (
          <p>Dispute ID: {disputeId}</p>
        )}
        <button
          onClick={handleSettle}
          className="px-4 py-2 text-white bg-black rounded-full hover:bg-[#EBD1AE]"
        >
          Settle Dispute
        </button>
        {isSettling ? (
          <p>Settling...</p>
        ) : settleError ? (
          <p className="text-red-500">{settleError.message}</p>
        ) : null}
      </div>
    </div>
  );
};

export default SettleDispute;