import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function VerifyEmail() {
  const location = useLocation();
  const email = location.state?.email || 'your email address';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center">
        <Mail className="mx-auto h-12 w-12 text-indigo-600" />
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Verify your email</h2>
        <p className="mt-4 text-sm text-gray-600">
          We have sent you a verification email to <strong>{email}</strong>. Please verify it and log in.
        </p>
        <div className="mt-8">
          <Link
            to="/login"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
