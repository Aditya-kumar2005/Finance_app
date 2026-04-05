
import React from 'react';
import { useAuth } from '../providers/AuthProvider';

export default function LoginModal({ setIsOpen }) {
  const { login } = useAuth();

  const handleLogin = () => {
    login();
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <p className="mb-4">Please login to continue.</p>
        <button
          onClick={handleLogin}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
