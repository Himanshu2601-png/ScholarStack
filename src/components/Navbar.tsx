import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BookOpen, LogOut, Upload as UploadIcon } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="font-bold text-xl text-gray-900">StudentShare</span>
            </Link>
          </div>
          
          {user && (
            <div className="flex items-center gap-4">
              <Link
                to="/upload"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <UploadIcon className="h-4 w-4 mr-2" />
                Upload
              </Link>
              
              <div className="flex items-center gap-3 border-l pl-4 border-gray-200">
                <div className="text-sm">
                  <p className="text-gray-900 font-medium">{user.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-400 hover:text-gray-500 rounded-full hover:bg-gray-100"
                  title="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
