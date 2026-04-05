
import React, { useState, useEffect, useRef } from 'react';
import { useTxn, A } from '../providers/TxnProvider';
import { useToast } from '../providers/ToastProvider';
import { EXP_CATS, INC_CATS } from './Constant';
import { nextId } from './Utilites';

export default function TxnModal({ open, mode, editId, onClose }) {
  const { st, disp } = useTxn();
  const { add } = useToast();
  const [desc, setDesc] = useState('');
  const [amt, setAmt] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [tp, setTp] = useState('expense');
  const [cat, setCat] = useState(EXP_CATS[0]);
  const [err, setErr] = useState('');
  const dRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    setErr('');
    if (mode === 'edit' && editId) {
      const t = st.txns.find((x) => x.id === editId);
      if (t) {
        setDesc(t.description);
        setAmt(String(t.amount));
        setDate(t.date);
        setTp(t.type);
        setCat(t.category);
      }
    } else {
      setDesc('');
      setAmt('');
      setDate(new Date().toISOString().split('T')[0]);
      setTp('expense');
      setCat(EXP_CATS[0]);
    }
  }, [open, mode, editId, st.txns]);

  useEffect(() => {
    if (open && dRef.current) setTimeout(() => dRef.current.focus(), 50);
  }, [open]);

  const cats = tp === 'income' ? INC_CATS : EXP_CATS;
  useEffect(() => {
    if (!cats.includes(cat)) setCat(cats[0]);
  }, [tp, cat, cats]);

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    setErr('');
    const a = parseFloat(amt);
    if (!desc.trim() || isNaN(a) || a <= 0 || !date || !cat) {
      setErr('Please fill in all fields with valid values.');
      return;
    }
    if (mode === 'edit' && editId) {
      disp({ type: A.UPD, p: { id: editId, d: { description: desc.trim(), amount: a, date, type: tp, category: cat } } });
      add('Transaction updated', 'success');
    } else {
      disp({ type: A.ADD, p: { id: nextId(st.txns), description: desc.trim(), amount: a, date, type: tp, category: cat } });
      add('Transaction added', 'success');
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="mbg absolute inset-0" onClick={onClose} />
      <div className="mcon relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-md border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700">
          <h3 className="font-heading font-semibold text-lg">{mode === 'edit' ? 'Edit Transaction' : 'Add Transaction'}</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer bg-transparent border-none" aria-label="Close"><i className="fa-solid fa-xmark" /></button>
        </div>
        <form onSubmit={submit} className="p-6 space-y-4">
          <div><label className="block text-sm font-medium mb-1.5">Description</label><input ref={dRef} type="text" value={desc} onChange={(e) => setDesc(e.target.value)} required className="inp" placeholder="e.g. Monthly Salary" /></div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className="block text-sm font-medium mb-1.5">Amount</label><input type="number" value={amt} onChange={(e) => setAmt(e.target.value)} required min="0.01" step="0.01" className="inp" placeholder="0.00" /></div>
            <div><label className="block text-sm font-medium mb-1.5">Date</label><input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className="inp" /></div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Type</label>
            <div className="flex gap-2">
              {[['expense', 'Expense', 'peer-checked:bg-red-500 peer-checked:border-red-500 hover:border-red-300 dark:hover:border-red-500/50'], ['income', 'Income', 'peer-checked:bg-emerald-500 peer-checked:border-emerald-500 hover:border-emerald-300 dark:hover:border-emerald-500/50']].map(([v, l, cl]) => (
                <label key={v} className="flex-1 cursor-pointer">
                  <input type="radio" name="mtype" value={v} checked={tp === v} onChange={() => setTp(v)} className="hidden peer" />
                  <div className={`peer-checked:text-white text-center py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-medium transition-all ${cl}`}>{l}</div>
                </label>
              ))}
            </div>
          </div>
          <div><label className="block text-sm font-medium mb-1.5">Category</label><select value={cat} onChange={(e) => setCat(e.target.value)} required className="inp">{cats.map((c) => <option key={c} value={c}>{c}</option>)}</select></div>
          {err && <div className="text-sm text-red-500 bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded-lg">{err}</div>}
          <button type="submit" className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-500/25 cursor-pointer border-none text-sm">{mode === 'edit' ? 'Save Changes' : 'Add Transaction'}</button>
        </form>
      </div>
    </div>
  );
}
