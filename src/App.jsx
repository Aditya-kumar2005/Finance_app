import { useState } from 'react';
import { TxnProvider } from './providers/TxnProvider';
import { RoleProvider } from './providers/RoleProvider';
import { ThemeProvider } from './providers/ThemeProvider';
import { ToastProvider } from './providers/ToastProvider';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RoBanner from './components/RoBanner';
import DashTab from './components/DashTab';
import TxnTab from './components/TxnTab';
import InsTab from './components/InsTab';
import Toasts from './components/Toasts';

function App() {
  const [tab, setTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <TxnProvider>
      <RoleProvider>
        <ThemeProvider>
          <ToastProvider>
            <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 flex flex-col">
              {/* Background Orbs */}
              <div className="orb o1"></div>
              <div className="orb o2"></div>
              <div className="orb o3"></div>

              {/* Header */}
              <Header tab={tab} setTab={setTab} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

              {/* Sidebar and Main Content */}
              <div className="relative flex-1">
                <Sidebar tab={tab} setTab={setTab} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

                {/* Main Content */}
                <main className="flex-1 flex justify-center pb-16 md:pb-0">
                  <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
                    {/* Read-Only Banner */}
                    <RoBanner />

                    {/* Tab Content */}
                    {tab === 'dashboard' && <DashTab go={setTab} />}
                    {tab === 'transactions' && <TxnTab />}
                    {tab === 'insights' && <InsTab />}
                  </div>
                </main>
              </div>

              {/* Toasts */}
              <Toasts />
            </div>
          </ToastProvider>
        </ThemeProvider>
      </RoleProvider>
    </TxnProvider>
  );
}

export default App;
