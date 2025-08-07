import { useGetPaymentOutstandingQuery } from '../store/slices/PaymentApiSlice';

const SeePaymentOutstanding = () => {
  const {
    data,
    isLoading,
    error,
    isUninitialized,
  } = useGetPaymentOutstandingQuery(undefined, {
    skip: true, // Skip the API call initially
  });

  // Mock the API response
  const mockData = [
    { id: 1, amount: 100 },
    { id: 2, amount: 200 },
  ];

  if (isUninitialized) {
    // Render mock data or a loading state
    return (
      <div className="flex justify-center pt-16">
        <div className="w-1/2 p-4 border border-black">
          <h1 className="text-2xl font-bold">See Payment Outstanding</h1>
          <ul>
            {mockData.map((payment) => (
              <li key={payment.id}>{payment.amount}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  // If data is available, render actual data
  return (
    <div className="flex justify-center pt-16">
      <div className="w-1/2 p-4 border border-black">
        <h1 className="text-2xl font-bold">See Payment Outstanding</h1>
        <ul>
          {data.map((payment) => (
            <li key={payment.id}>{payment.amount}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SeePaymentOutstanding;