import React from 'react';
import { useTheme } from '../providers/ThemeProvider';

export default function Sidebar({ tab, setTab, isOpen, setIsOpen }) {
  const { dark } = useTheme();
  const tabs = [
    { k: 'dashboard', l: 'Dashboard', icon: 'fa-chart-line' },
    { k: 'transactions', l: 'Transactions', icon: 'fa-exchange-alt' },
    { k: 'insights', l: 'Insights', icon: 'fa-lightbulb' }
  ];

  return (
    <>
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <i className="fa-solid fa-vault text-white text-sm"/>
              </div>
              <span className="font-heading font-bold text-lg tracking-tight">FinVault</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
              aria-label="Close sidebar"
            >
              <i className="fa-solid fa-times text-sm"/>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {tabs.map(t => (
                <li key={t.k}>
                  <button
                    onClick={() => setTab(t.k)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      tab === t.k
                        ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
                    }`}
                  >
                    <i className={`fa-solid ${t.icon} text-sm`}/>
                    <span className="font-medium">{t.l}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Mobile Tab Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 py-2">
        <nav className="flex items-center justify-around">
          {tabs.map(t => (
            <button
              key={t.k}
              onClick={() => setTab(t.k)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                tab === t.k
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              <i className={`fa-solid ${t.icon} text-lg`}/>
              <span className="text-xs font-medium">{t.l}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}