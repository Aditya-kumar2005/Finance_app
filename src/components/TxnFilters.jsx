import React, { useState, useMemo, useEffect, useRef } from 'react'
import { useTxn } from './useTxn';
import { useRole } from '../providers/RoleProvider';
import { useToast } from '../providers/ToastProvider';
import useFiltered from './useFiltered';
import { A } from '../providers/TxnProvider';
// export default function TxnFilters() {
export default function TxnFilters({onAdd}) {
  const{st,disp}=useTxn();const{isAdmin}=useRole();const{add}=useToast();
    const[expOpen,setExpOpen]=useState(false);
    const filtered=useFiltered();
    const allCats=useMemo(()=>[...new Set(st.txns.map(t=>t.category))].sort(),[st.txns]);
    const sf=(k,v)=>disp({type:A.SF,k,v});
    const clear=()=>{disp({type:A.CF});add('Filters cleared','info');};
    const doExp=fmt=>{if(!filtered.length){add('No transactions to export','warning');return;}
        let c,n,m;if(fmt==='csv'){c='Date,Description,Amount,Type,Category\n'+filtered.map(t=>`"${t.date}","${t.description}",${t.amount},"${t.type}","${t.category}"`).join('\n');n='transactions.csv';m='text/csv';}
        else{c=JSON.stringify(filtered,null,2);n='transactions.json';m='application/json';}
        const b=new Blob([c],{type:m}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download=n;a.click();URL.revokeObjectURL(u);
        add('Exported '+filtered.length+' transactions as '+fmt.toUpperCase(),'success');setExpOpen(false);
    };
    const expRef=useRef(null);
    useEffect(()=>{const h=e=>{if(expRef.current&&!expRef.current.contains(e.target))setExpOpen(false);};document.addEventListener('click',h);return()=>document.removeEventListener('click',h);},[]);
    return (
        <div className="flex flex-col gap-3 mb-5">
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm"/>
                    <input type="text" value={st.f.search} onChange={e=>sf('search',e.target.value)} placeholder="Search by description..." className="inp pl-10" aria-label="Search"/>
                </div>
                <div className="flex flex-wrap gap-2">
                    <select value={st.f.type} onChange={e=>sf('type',e.target.value)} className="inp w-auto text-sm" aria-label="Filter type">
                        <option value="all">All Types</option><option value="income">Income</option><option value="expense">Expense</option>
                    </select>
                    <select value={st.f.category} onChange={e=>sf('category',e.target.value)} className="inp w-auto text-sm" aria-label="Filter category">
                        <option value="all">All Categories</option>{allCats.map(c=><option key={c} value={c}>{c}</option>)}
                    </select>
                    <select value={st.f.sort} onChange={e=>sf('sort',e.target.value)} className="inp w-auto text-sm" aria-label="Sort">
                        <option value="date-desc">Newest</option><option value="date-asc">Oldest</option>
                        <option value="amount-desc">Highest</option><option value="amount-asc">Lowest</option>
                    </select>
                </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <label htmlFor="df">From</label><input id="df" type="date" value={st.f.dateFrom} onChange={e=>sf('dateFrom',e.target.value)} className="inp w-auto text-sm py-1.5"/>
                    <label htmlFor="dt">To</label><input id="dt" type="date" value={st.f.dateTo} onChange={e=>sf('dateTo',e.target.value)} className="inp w-auto text-sm py-1.5"/>
                </div>
                <div className="flex-1"/>
                <button onClick={clear} className="text-sm text-slate-500 hover:text-emerald-500 transition-colors bg-transparent border-none cursor-pointer">Clear filters</button>
                {isAdmin&&<button onClick={onAdd} className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-500/25 cursor-pointer border-none">
                    <i className="fa-solid fa-plus text-xs"/> Add Transaction
                </button>}
                <div ref={expRef} className="relative">
                    <button onClick={e=>{e.stopPropagation();setExpOpen(p=>!p);}} className="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 text-sm font-medium rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer border-none">
                        <i className="fa-solid fa-download text-xs"/><span className="hidden sm:inline">Export</span>
                    </button>
                    {expOpen&&<div className="absolute right-0 top-full mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden z-10 min-w-35">
                        <button onClick={()=>doExp('csv')} className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors bg-transparent border-none cursor-pointer text-slate-700 dark:text-slate-200">Export CSV</button>
                        <button onClick={()=>doExp('json')} className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors bg-transparent border-none cursor-pointer text-slate-700 dark:text-slate-200">Export JSON</button>
                    </div>}
                </div>
            </div>
        </div>
    );
}
