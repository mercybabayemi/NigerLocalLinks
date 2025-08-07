// CreateDispute.jsx
import React, { useState } from 'react';
import { useCreateDisputeMutation } from '../store/slices/DisputeApiSlice.jsx';

const CreateDispute = () => {
  const [formData, setFormData] = useState({
    description: '',
  });

  const [createDispute, { isLoading, error }] = useCreateDisputeMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createDispute(formData).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center p-16">
      <div className="w-1/2 p-4 border border-black">
        <h1 className="text-2xl font-bold">Create Dispute</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <label>Description:</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-black rounded-full hover:bg-[#EBD1AE]"
          >
            Create Dispute
          </button>
        </form>
        {error && <p className="text-red-500">{error.message}</p>}
      </div>
    </div>
  );
};

export default CreateDispute;