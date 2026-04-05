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
import './App.css'

function App() {
  const[tab,setTab]=useState('dashboard');
    return (
        <TxnProvider>
            <RoleProvider>
                <ThemeProvider>
                    <ToastProvider>
                        <Header tab={tab} setTab={setTab}/>
                        <RoBanner/>
                        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
                            {tab==='dashboard'&&<DashTab go={setTab}/>}
                            {tab==='transactions'&&<TxnTab/>}
                            {tab==='insights'&&<InsTab/>}
                        </main>
                        <Toasts/>
                    </ToastProvider>
                </ThemeProvider>
            </RoleProvider>
        </TxnProvider>
    );
}

export default App;
