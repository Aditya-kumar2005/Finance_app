
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from './providers/ThemeProvider';
import { TxnProvider } from './providers/TxnProvider';
import { AuthProvider } from './providers/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <TxnProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </TxnProvider>
    </ThemeProvider>
  </StrictMode>,
);
