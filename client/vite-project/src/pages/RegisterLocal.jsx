import { useState } from 'react';
import { useRegisterLocalMutation } from '../store/slices/AuthApiSlice.jsx';

const RegisterLocal = () => {
  const [formData, setFormData] = useState({
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
  });

  const [registerLocal, { isLoading, error }] = useRegisterLocalMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerLocal(formData).unwrap();
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F2F0EF] sm:pt-24 lg:pt-4">
      
      <main className="flex-grow flex items-center justify-center p-4 sm:p-24">
        <div className="w-full max-w-[544px] bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">REGISTER LOCAL</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: 'First Name', name: 'firstname', placeholder: 'Enter first name here', type: 'text' },
              { label: 'Lastname', name: 'lastname', placeholder: 'Enter last name here', type: 'text' },
              { label: 'Email', name: 'email', placeholder: 'Enter email here', type: 'email' },
              { label: 'Password', name: 'password', placeholder: 'Enter password here', type: 'password' },
              { label: 'Phone number', name: 'phonenumber', placeholder: 'Enter phone number here', type: 'tel' },
              { label: 'Address', name: 'address', placeholder: 'Enter address here', type: 'text' },
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
                  required={name !== 'phone'}
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-[#EBD1AE]"
              disabled={isLoading}
            >
              {isLoading ? 'Registering...' : 'Register'}
            </button>
          </form>
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </div>
      </main>

    </div>
    // <div className="flex justify-center">
    //   <div className="w-1/2 p-4 border border-black">
    //     <h1 className="text-2xl font-bold">Register Local</h1>
    //     <form onSubmit={handleSubmit}>
    //       <div className="flex flex-col space-y-4">
    //         <label>Surname:</label>
    //         <input
    //           type="text"
    //           value={formData.surname}
    //           onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
    //         />
    //         <label>Firstname:</label>
    //         <input
    //           type="text"
    //           value={formData.firstname}
    //           onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
    //         />
    //         <label>Phone Number:</label>
    //         <input
    //           type="text"
    //           value={formData.phoneNumber}
    //           onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
    //         />
    //         <label>Address:</label>
    //         <input
    //           type="text"
    //           value={formData.address}
    //           onChange={(e) => setFormData({ ...formData, address: e.target.value })}
    //         />
    //       </div>
    //       <button
    //         type="submit"
    //         className="px-4 py-2 text-white bg-black rounded-full hover:bg-[#EBD1AE]"
    //       >
    //         Register
    //       </button>
    //     </form>
    //     {error && <p className="text-red-500">{error.message}</p>}
    //   </div>
    // </div>
  );
};

export default RegisterLocal;
