import LandingPageButton from "../reusable/LandingPageButton";
import { useNavigate } from 'react-router-dom';

const OfficerLandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-1/2 p-24 border-2 border-black">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <h1 className="text-2xl font-bold">Welcome Officer</h1>
          <div className="md:ml-4 mt-4 md:mt-0 border border-black p-4 flex items-center justify-center">
            {/* Officer name will go here */}
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-4 mt-8 mx-auto max-w-md">
          <LandingPageButton className='p-4' onClick={() => navigate('/officer/registerlocal')}>Register Local</LandingPageButton>
          <LandingPageButton className='p-4' onClick={() => navigate('/officer/createrecord')}>Create Record</LandingPageButton>
          <LandingPageButton className='p-4' onClick={() => navigate('/officer/findlocal')}>Find Locals</LandingPageButton>
          <LandingPageButton className='p-4' onClick={() => navigate('/officer/autogeneratepayment')}>Autogenerate Payment</LandingPageButton>
        </div>
      </div>
    </div>
  );
};

export default OfficerLandingPage;