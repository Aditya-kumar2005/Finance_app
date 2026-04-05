

import { useContext } from 'react';
import { TxnCtx } from '../providers/TxnProvider';

export  const useTxn = () => { const c=useContext(TxnCtx); if(!c) throw new Error('No TxnCtx'); return c; };
