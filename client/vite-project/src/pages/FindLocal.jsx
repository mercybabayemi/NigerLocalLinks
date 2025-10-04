import { useState, useEffect } from 'react';
import { Search, Users, MapPin, Phone, Mail, User, SortAsc, Loader2, AlertCircle, MousePointer } from 'lucide-react';

const FindLocals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');

  // Mock data - replace with actual API data
  const [locals, setLocals] = useState([
    {
      id: 'LOC001',
      firstname: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
      phonenumber: '+234 801 234 5678',
      address: '123 Lagos Street, Victoria Island, Lagos',
      joinDate: '2024-01-15',
      avatar: null
    },
    {
      id: 'LOC002',
      firstname: 'Sarah',
      lastname: 'Johnson',
      email: 'sarah.j@example.com',
      phonenumber: '+234 802 345 6789',
      address: '456 Abuja Avenue, Maitama, FCT',
      joinDate: '2024-02-20',
      avatar: null
    },
    {
      id: 'LOC003',
      firstname: 'Michael',
      lastname: 'Brown',
      email: 'michael.brown@example.com',
      phonenumber: '+234 803 456 7890',
      address: '789 Port Harcourt Road, GRA, Rivers',
      joinDate: '2024-01-10',
      avatar: null
    }
  ]);

  const [filteredLocals, setFilteredLocals] = useState(locals);

  // Handle user click
  const handleUserClick = (local) => {
    console.log('User clicked:', local);
    // You can add navigation logic here, for example:
    // navigate(`/local/${local.id}`);
    alert(`Clicked on ${local.firstname} ${local.lastname} (ID: ${local.id})`);
  };

  // Simulate API call - Search only by ID, email, or firstname
  const performSearch = async (term) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      let filtered = locals.filter(local => 
        local.id.toLowerCase().includes(term.toLowerCase()) ||
        local.firstname.toLowerCase().includes(term.toLowerCase()) ||
        local.email.toLowerCase().includes(term.toLowerCase())
      );

      // Apply sorting
      filtered.sort((a, b) => {
        switch (sortBy) {
          case 'name':
            return a.firstname.localeCompare(b.firstname);
          case 'email':
            return a.email.localeCompare(b.email);
          case 'id':
            return a.id.localeCompare(b.id);
          case 'date':
            return new Date(b.joinDate) - new Date(a.joinDate);
          default:
            return 0;
        }
      });

      setFilteredLocals(filtered);
    } catch (err) {
      setError('Failed to search locals. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      performSearch(searchTerm);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, sortBy]);

  const getInitials = (firstname, lastname) => {
    return `${firstname.charAt(0)}${lastname.charAt(0)}`.toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-100 via-stone-50 to-indigo-50 p-4">
      <div className="max-w-6xl mx-auto pt-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full mb-4 shadow-lg">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Find Local Users</h1>
          <p className="text-gray-600">Search and manage local users in the system</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl border border-white/20 p-6 mb-6">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by ID, firstname, or email..."
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50/50 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-300"
            />
            {isLoading && (
              <Loader2 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-indigo-500 w-5 h-5 animate-spin" />
            )}
          </div>

          {/* Sort Controls */}
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center space-x-2">
              <SortAsc className="w-4 h-4 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              >
                <option value="name">Sort by Name</option>
                <option value="email">Sort by Email</option>
                <option value="id">Sort by ID</option>
                <option value="date">Sort by Join Date</option>
              </select>
            </div>

            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-white text-indigo-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-white text-indigo-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl border border-white/20 overflow-hidden">
          {/* Results Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">
                Search Results ({filteredLocals.length} found)
              </h2>
            </div>
          </div>

          {/* Error State */}
          {error && (
            <div className="p-6">
              <div className="flex items-center justify-center p-8 text-red-600">
                <AlertCircle className="w-8 h-8 mr-3" />
                <p className="text-lg font-medium">{error}</p>
              </div>
            </div>
          )}

          {/* Loading State */}
          {isLoading && !error && (
            <div className="p-6">
              <div className="flex items-center justify-center p-8">
                <Loader2 className="w-8 h-8 text-indigo-500 animate-spin mr-3" />
                <p className="text-lg font-medium text-gray-600">Searching locals...</p>
              </div>
            </div>
          )}

          {/* Results */}
          {!isLoading && !error && (
            <div className="p-6">
              {filteredLocals.length === 0 ? (
                <div className="text-center py-12">
                  <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-600 mb-2">No locals found</h3>
                  <p className="text-gray-500">Try adjusting your search terms or filters</p>
                </div>
              ) : (
                <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                  {filteredLocals.map((local) => (
                    <div
                      key={local.id}
                      onClick={() => handleUserClick(local)}
                      className={`group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-indigo-300 cursor-pointer hover:scale-[1.02] ${
                        viewMode === 'list' ? 'flex items-center space-x-4' : ''
                      }`}
                    >
                      {/* Avatar */}
                      <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mb-4'}`}>
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                          <span className="text-white font-semibold text-sm">
                            {getInitials(local.firstname, local.lastname)}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`${viewMode === 'list' ? 'flex-grow' : ''}`}>
                        <div className={`${viewMode === 'list' ? 'flex items-center justify-between' : ''}`}>
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                                {local.firstname} {local.lastname}
                              </h3>
                              <MousePointer className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center text-sm text-gray-600">
                                <User className="w-4 h-4 mr-2 text-indigo-500" />
                                <span className="font-medium">ID:</span>
                                <span className="ml-1 font-mono text-indigo-600">{local.id}</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <Mail className="w-4 h-4 mr-2 text-indigo-500" />
                                {local.email}
                              </div>
                              {local.phonenumber && (
                                <div className="flex items-center text-sm text-gray-600">
                                  <Phone className="w-4 h-4 mr-2 text-indigo-500" />
                                  {local.phonenumber}
                                </div>
                              )}
                              <div className="flex items-start text-sm text-gray-600">
                                <MapPin className="w-4 h-4 mr-2 mt-0.5 text-indigo-500 flex-shrink-0" />
                                <span className="line-clamp-2">{local.address}</span>
                              </div>
                            </div>
                          </div>

                          {viewMode === 'list' && (
                            <div className="flex items-center">
                              <div className="text-right">
                                <p className="text-xs text-gray-500">Click to view</p>
                                <p className="text-xs text-gray-400">Joined: {new Date(local.joinDate).toLocaleDateString()}</p>
                              </div>
                            </div>
                          )}
                        </div>

                        {viewMode === 'grid' && (
                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-xs text-gray-500">
                              Joined: {new Date(local.joinDate).toLocaleDateString()}
                            </span>
                            <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Click to view details
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindLocals;