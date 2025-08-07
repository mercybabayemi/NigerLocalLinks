import { useState } from 'react';
import { useCreateRecordMutation } from '../store/slices/CreateRecordApiSlice.jsx';

const CreateRecord = () => {
  const [formData, setFormData] = useState({
    title: '',
    comments: '',
    officerid: '',
    localid: '',
    uploadimage: '',
    fee: '',
  });

  const [createRecord, { isLoading, error }] = useCreateRecordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createRecord(formData).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F2F0EF] sm:pt-24 lg:pt-4">
      
      <main className="flex-grow flex items-center justify-center p-4 sm:p-24">
        <div className="w-full max-w-[544px] bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">CREATE RECORD</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: 'Title', name: 'title', placeholder: 'Enter title here', type: 'text' },
              { label: 'Comments', name: 'comments', placeholder: 'Enter comments here', type: 'text' },
              { label: 'Officer-ID', name: 'officerid', placeholder: 'Enter officer ID here', type: 'text' },
              { label: 'Local-ID', name: 'localid', placeholder: 'Enter local ID here', type: 'text' },
              { label: 'Upload Image', name: 'uploadimage', placeholder: 'Upload image here', type: 'file' },
              { label: 'Fee', name: 'fee', placeholder: 'Enter fee here', type: 'tel' },
            ].map(({ label, name, placeholder, type = 'text' }) => (
              <div key={name} className="flex flex-col">
                <label htmlFor={name} className="text-sm font-medium mb-1">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  id={name}
                  value={formData[{name}]}
                  placeholder={placeholder}
                  className="w-full h-[52px] p-3 border rounded shadow-inner focus:outline-none focus:ring-2 focus:ring-[#333333]"
                  onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                  required={name !== 'phone' && name !== 'uploadimage'}
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-[#EBD1AE]"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Record...' : 'Create Record'}
            </button>
          </form>
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </div>
      </main>

    </div>
  );
};

export default CreateRecord;