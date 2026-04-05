
import React from 'react';
import { useAuth } from '../providers/AuthProvider';

export default function LoginModal() {
  const { login, setIsLoginModalOpen } = useAuth();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={() => setIsLoginModalOpen(false)} />
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-md border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700">
          <h3 className="font-heading font-semibold text-lg">Login</h3>
          <button onClick={() => setIsLoginModalOpen(false)} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer bg-transparent border-none" aria-label="Close"><i className="fa-solid fa-xmark" /></button>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">This is a demo application. Click the button below to log in as a guest.</p>
          <button onClick={login} className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-500/25 cursor-pointer border-none text-sm">Login as Guest</button>
        </div>
      </div>
    </div>
  );
}
