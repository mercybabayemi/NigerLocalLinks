import React, { useState } from 'react';
import { useCreateDisputeMutation } from '../store/slices/DisputeApiSlice';

const CreateDispute = () => {
  const [formData, setFormData] = useState({
    description: '',
  });

  const [createDispute, { isLoading: isCreatingDispute, error: createDisputeError, isSuccess }] =
    useCreateDisputeMutation();

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
            <label className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              placeholder='Enter dispute description here'
              className="w-full p-2 mt-1 border rounded-md"
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
        {isCreatingDispute ? (
          <p>Creating dispute...</p>
        ) : createDisputeError ? (
          <p className="text-red-500">{createDisputeError.message}</p>
        ) : isSuccess ? (
          <p className="text-green-500">Dispute created successfully!</p>
        ) : null}
      </div>
    </div>
  );
};

export default CreateDispute;