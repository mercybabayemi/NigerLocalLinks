const Footer = () => {
  return (
    <footer className="w-full bg-[#F2F0EF] shadow-inner min-h-[364px] py-10">
      <div className="max-w-[1200px] w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Privacy Policy Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Privacy Policy</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">GDPR Compliance</a></li>
            </ul>
          </div>
          
          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Best practices</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Colors</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Color wheel</a></li>
            </ul>
          </div>
          
          {/* Support Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Developers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Resource library</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">API Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500">© 2023 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
