import { useSelector } from 'react-redux';
import LandingPageButton from "../reusable/LandingPageButton";
import { useNavigate } from 'react-router-dom';

const OfficerLandingPage = () => {
  const navigate = useNavigate();
  
  // Get the user info from Redux store
  const userInfo = useSelector((state) => state.auth.user);
  const firstName = userInfo?.firstName || 'Officer';
  const lastName = userInfo?.lastName || '';
  const fullName = `${firstName} ${lastName}`.trim();

  const officerActions = [
    {
      title: 'Register Local',
      description: 'Add new local members to the system',
      path: '/officer/registerlocal',
      icon: '👤'
    },
    {
      title: 'Create Record',
      description: 'Generate new records and documentation',
      path: '/officer/createrecord',
      icon: '📄'
    },
    {
      title: 'Find Locals',
      description: 'Search and locate registered locals',
      path: '/officer/findlocal',
      icon: '🔍'
    },
    {
      title: 'Auto-generate Payment',
      description: 'Create automated payment schedules',
      path: '/officer/autogeneratepayment',
      icon: '💰'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-700 text-white rounded-full mb-6 text-2xl font-bold shadow-lg">
            {firstName.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome, Officer <span className="text-blue-700">{fullName}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Manage local operations and oversee administrative tasks with authority
          </p>
          <div className="mt-6 inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
            Officer Control Panel
          </div>
        </div>

        {/* Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {officerActions.map((action, index) => (
            <div
              key={index}
              onClick={() => navigate(action.path)}
              className="group cursor-pointer bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {action.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
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

        {/* Officer Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="text-2xl font-bold text-blue-700 mb-1">--</div>
            <p className="text-gray-600 text-sm">Active Locals</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">--</div>
            <p className="text-gray-600 text-sm">Records Created</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">--</div>
            <p className="text-gray-600 text-sm">Pending Tasks</p>
          </div>
        </div>

        {/* Quick Actions Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white text-center shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Officer Authority Zone</h3>
          <p className="text-blue-100 text-sm">
            You have full administrative privileges for local management and record keeping
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Officer Dashboard • Authorized Personnel Only
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfficerLandingPage;