
import React, { useState } from 'react';
import TxnFilters from './TxnFilters';
import TxnRow from './TxnRow';
import TxnModal from './TxnModal';
import DelModal from './DelModal';
import Empty from './Empty';
import { useTxn, A } from '../providers/TxnProvider';
import { useToast } from '../providers/ToastProvider';
import { useRole } from '../providers/RoleProvider';
import useFiltered from './useFiltered';

export default function TxnTab() {
  const { st, disp } = useTxn();
  const { isAdmin } = useRole();
  const { add } = useToast();
  const filtered = useFiltered();

  /* Local state for modal & delete — only this tab cares */
  const [modal, setModal] = useState({ open: false, mode: 'add', editId: null });
  const [delTarget, setDelTarget] = useState(null);

  const openAdd = () => setModal({ open: true, mode: 'add', editId: null });
  const openEdit = (id) => setModal({ open: true, mode: 'edit', editId: id });
  const closeM = () => setModal({ open: false, mode: 'add', editId: null });

  const doDel = () => {
    disp({ type: A.DEL, p: delTarget });
    add('Transaction deleted', 'success');
    setDelTarget(null);
  };

  React.useEffect(() => {
    const h = (e) => {
      if (e.key === 'Escape') {
        if (delTarget !== null) setDelTarget(null);
        else if (modal.open) closeM();
      }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [delTarget, modal.open]);

  return (
    <div className="fu">
      <div className="flex justify-between items-center mb-4">
        <TxnFilters />
        <div className="w-48">
          <button
            onClick={openAdd}
            className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-white font-medium rounded-lg px-4 py-3 hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/30"
          >
            <i className="fa-solid fa-plus" />
            <span>Add Transaction</span>
          </button>
        </div>
      </div>
      <div className="text-sm text-slate-500 dark:text-slate-400 mb-3">
        Showing {filtered.length} of {st.txns.length} transactions
      </div>
      <div className="space-y-2">
        {filtered.map((t) => (
          <TxnRow key={t.id} t={t} isAdmin={isAdmin} onEdit={openEdit} onDel={setDelTarget} />
        ))}
      </div>
      {filtered.length === 0 && <Empty />}
      <TxnModal open={modal.open} mode={modal.mode} editId={modal.editId} onClose={closeM} />
      <DelModal target={delTarget} onYes={doDel} onNo={() => setDelTarget(null)} />
    </div>
  );
}

