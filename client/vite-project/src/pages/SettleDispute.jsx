// // SettleDispute.jsx
// import React, { useState, useEffect } from 'react';
// import { useGetDisputesQuery, useSettleDisputeMutation } from '../store/slices/DisputeApiSlice.jsx';

// const SettleDispute = () => {
//   const { data, isLoading, error } = useGetDisputesQuery();
//   const [settleDispute, { isLoading: isSettling, error: settleError }] = useSettleDisputeMutation();
//   const [disputeId, setDisputeId] = useState(null);

//   useEffect(() => {
//     if (data && data.length > 0) {
//       setDisputeId(data[0].id);
//     }
//   }, [data]);

//   const handleSettle = async () => {
//     try {
//       await settleDispute(disputeId).unwrap();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p className="text-red-500">{error.message}</p>;
//   }

//   return (
//     <div className="flex justify-center">
//       <div className="w-1/2 p-4 border border-black">
//         <h1 className="text-2xl font-bold">Settle Dispute</h1>
//         {data && data.length > 0 ? (
//           <p>Dispute ID: {disputeId}</p>
//         ) : (
//           <p>No disputes found.</p>
//         )}
//         <button
//           onClick={handleSettle}
//           className="px-4 py-2 text-white bg-black rounded-full hover:bg-[#EBD1AE]"
//         >
//           Settle Dispute
//         </button>
//         {isSettling ? (
//           <p>Settling...</p>
//         ) : settleError ? (
//           <p className="text-red-500">{settleError.message}</p>
//         ) : null}
//       </div>
//     </div>
//   );
// };

// export default SettleDispute;

const SettleDispute = () => {
  return (
    <div className="flex justify-center pt-16">
      <div className="w-1/2 p-4 border border-black">
        <h1 className="text-2xl font-bold">Settle Dispute</h1>
        <p>Feature under construction.</p>
      </div>
    </div>
  );
};

export default SettleDispute;