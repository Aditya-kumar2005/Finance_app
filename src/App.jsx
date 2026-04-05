import { useState } from 'react';
import { TxnProvider } from './providers/TxnProvider';
import { RoleProvider } from './providers/RoleProvider';
import { ThemeProvider } from './providers/ThemeProvider';
import { ToastProvider } from './providers/ToastProvider';
import Header from './components/Header';
import RoBanner from './components/RoBanner';
import DashTab from './components/DashTab';
import TxnTab from './components/TxnTab';
import InsTab from './components/InsTab';
import Toasts from './components/Toasts';

function App() {
  const [tab, setTab] = useState('dashboard');
  
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
              <Header tab={tab} setTab={setTab} />
              
              {/* Read-Only Banner */}
              <RoBanner />
              
              {/* Main Content */}
              <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative z-10 flex-1">
                {tab === 'dashboard' && <DashTab go={setTab} />}
                {tab === 'transactions' && <TxnTab />}
                {tab === 'insights' && <InsTab />}
              </main>
              
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
