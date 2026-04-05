
import React, { useState } from 'react';
import { useTheme } from '../providers/ThemeProvider';
import { A, useTxn } from '../providers/TxnProvider';
import { useAuth } from '../providers/AuthProvider';
import LoginModal from './LoginModal';

export default function Header({ tab, setTab, setIsSidebarOpen }) {
  const { dark, flip } = useTheme();
  const { disp } = useTxn();
  const { user, logout } = useAuth();
  const [search, setSearch] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    disp({ type: A.SF, k: 'search', v: e.target.value });
  };

  const tabs = [
    { k: 'dashboard', l: 'Dashboard', icon: 'fa-chart-line' },
    { k: 'transactions', l: 'Transactions', icon: 'fa-exchange-alt' },
    { k: 'insights', l: 'Insights', icon: 'fa-lightbulb' }
  ];

  return (
    <header className="relative z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-3">
          {/* Sidebar Toggle Button */}
          <button
            onClick={() => setIsSidebarOpen(prev => !prev)}
            className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors md:hidden"
            aria-label="Toggle sidebar"
          >
            <i className="fa-solid fa-bars text-sm" />
          </button>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <i className="fa-solid fa-vault text-white text-sm" />
            </div>
            <span className="font-heading font-bold text-lg tracking-tight">FinVault</span>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-1.5 ml-6">
            <i className="fa-solid fa-search text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none text-sm w-48"
              value={search}
              onChange={handleSearch}
            />
          </div>
        </div>
        
        {/* Laptop/Desktop Tabs */}
        <div className="hidden md:flex items-center gap-6">
          {tabs.map(t => (
            <button
              key={t.k}
              onClick={() => setTab(t.k)}
              className={`flex items-center gap-2 transition-colors ${
                tab === t.k
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-slate-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400'
              }`}
            >
              <i className={`fa-solid ${t.icon} text-lg`}/>
              <span className="text-sm font-medium">{t.l}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Profile Button */}
          {user ? (
            <button
              onClick={logout}
              className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
              aria-label="Logout"
            >
              <i className="fa-solid fa-sign-out-alt text-sm" />
            </button>
          ) : (
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
              aria-label="Login"
            >
              <i className="fa-solid fa-user text-sm" />
            </button>
          )}

          {/* Theme Toggle Button */}
          <button
            onClick={flip}
            className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
            aria-label="Toggle theme"
          >
            <i className={`fa-solid ${dark ? 'fa-sun' : 'fa-moon'} text-sm`} />
          </button>
        </div>
      </div>
      {isLoginModalOpen && <LoginModal setIsOpen={setIsLoginModalOpen} />}
    </header>
  );
}
