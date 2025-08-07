// FindLocals.jsx
import { useState } from 'react';
import { useGetLocalsQuery } from '../store/slices/LocalsApiSlice.jsx';

const FindLocals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading, error } = useGetLocalsQuery(searchTerm);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex justify-center pt-16">
      <div className="w-1/2 p-4 border border-black">
        <h1 className="text-2xl font-bold">Find Locals</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search for locals"
          className="w-full p-2 border border-black rounded"
        />
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error.message}</p>
        ) : (
          <ul>
            console.log("Data found is ", data);
            {!data ? (
              <li>No Local Found.</li>
            ) : (
              data.map((payment) => (
                <li key={payment.id}>{payment.amount}</li>
              ))
            )}
        </ul>
        )}
      </div>
    </div>
  );
};

export default FindLocals;