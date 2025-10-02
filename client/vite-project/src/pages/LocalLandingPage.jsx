import { useSelector } from 'react-redux';
import LandingPageButton from "../reusable/LandingPageButton";
import { useNavigate } from 'react-router-dom';

const LocalLandingPage = () => {
  const navigate = useNavigate();
  
  // Get the user info from Redux store
  const userInfo = useSelector((state) => state.auth.user);
  const firstName = userInfo?.firstName || 'Local';
  const lastName = userInfo?.lastName || '';
  const fullName = `${firstName} ${lastName}`.trim();

  const localActions = [
    {
      title: 'Upload Proof of Payment',
      description: 'Submit payment verification documents',
      path: '/local/uploadproofofpayment',
      icon: '💳'
    },
    {
      title: 'Payment Outstanding',
      description: 'View your pending payment records',
      path: '/local/seepaymentoutstanding',
      icon: '📋'
    },
    {
      title: 'Create Dispute',
      description: 'Report issues or file complaints',
      path: '/local/createdispute',
      icon: '⚠️'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 text-white rounded-full mb-6 text-2xl font-bold shadow-lg">
            {firstName.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome, <span className="text-green-600">{fullName}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Access your local services and manage your account efficiently
          </p>
          <div className="mt-6 inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
            Local Member Dashboard
          </div>
        </div>

        {/* Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {localActions.map((action, index) => (
            <div
              key={index}
              onClick={() => navigate(action.path)}
              className="group cursor-pointer bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {action.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {action.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {action.description}
                </p>
              </div>
              <div className="mt-6 flex justify-center">
                <div className="w-12 h-1 bg-gray-200 rounded-full group-hover:bg-green-500 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats or Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-2">Account Status</h4>
            <p className="text-green-600 font-medium">Active Member</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
            <p className="text-gray-600 text-sm">Need help? Contact your local office</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            Your local member portal • Secure and confidential
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocalLandingPage;