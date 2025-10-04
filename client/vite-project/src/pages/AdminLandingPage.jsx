import { useSelector } from 'react-redux';
import LandingPageButton from "../reusable/LandingPageButton";
import { useNavigate } from 'react-router-dom';

const AdminLandingPage = () => {
  const navigate = useNavigate();
  
  // Get the user info from Redux store
  const userInfo = useSelector((state) => state.auth.user);
  const firstName = userInfo?.firstName || 'Admin';

  const adminActions = [
    {
      title: 'Register Local',
      description: 'Add new local members to the system',
      path: '/admin/registerlocal',
      icon: '👥'
    },
    {
      title: 'Create Record',
      description: 'Generate new records and documentation',
      path: '/admin/createrecord',
      icon: '📝'
    },
    {
      title: 'Find Locals',
      description: 'Search and locate registered locals',
      path: '/admin/findlocal',
      icon: '🔍'
    },
    {
      title: 'Upload Proof of Payment',
      description: 'Submit payment verification documents',
      path: '/admin/uploadproofofpayment',
      icon: '💰'
    },
    {
      title: 'Payment Outstanding',
      description: 'View pending payment records',
      path: '/admin/seepaymentoutstanding',
      icon: '📊'
    },
    {
      title: 'Settle Dispute',
      description: 'Resolve conflicts and issues',
      path: '/admin/settledispute',
      icon: '⚖️'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-full mb-6 text-2xl font-bold shadow-lg">
            {firstName.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome back, <span className="text-blue-600">{firstName}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Manage your administrative tasks efficiently with our comprehensive dashboard
          </p>
        </div>

        {/* Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adminActions.map((action, index) => (
            <div
              key={index}
              onClick={() => navigate(action.path)}
              className="group cursor-pointer bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {action.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {action.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {action.description}
                </p>
              </div>
              <div className="mt-6 flex justify-center">
                <div className="w-12 h-1 bg-gray-200 rounded-full group-hover:bg-blue-500 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            Need help? Contact support or check the documentation
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLandingPage;