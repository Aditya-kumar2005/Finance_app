
import React from 'react';
import { useTheme } from '../providers/ThemeProvider';

export default function Header({ setIsSidebarOpen }) {
  const { dark, setDark } = useTheme();

  return (
    <header className="relative z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-3">
          {/* Sidebar Toggle Button */}
          <button
            onClick={() => setIsSidebarOpen(prev => !prev)}
            className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
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
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={() => setDark(!dark)}
          className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
          aria-label="Toggle theme"
        >
          <i className={`fa-solid ${dark ? 'fa-sun' : 'fa-moon'} text-sm`} />
        </button>
      </div>
    </header>
  );
}
