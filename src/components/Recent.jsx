import React from 'react'
import { useTxn } from './useTxn';
import { fmtDate,fmtCurE } from './Utilites';
import { CatIcon } from './CatIcon';
export default function Recent() {
  const{st}=useTxn();
    const list=React.useMemo(()=>[...st.txns].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,5),[st.txns]);
    if(!list.length) return <div className="cd text-center py-8 text-slate-400 text-sm">No transactions yet</div>;
    return (
        <div className="cd">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-semibold text-base">Recent Transactions</h3>
                <button onClick={()=>go('transactions')} className="text-emerald-500 dark:text-emerald-400 text-sm font-medium hover:underline cursor-pointer bg-transparent border-none">View All <i className="fa-solid fa-arrow-right text-xs ml-1"/></button>
            </div>
            {list.map(t=>(
                <div key={t.id} className="tr flex items-center gap-3 py-3 px-3 -mx-3 rounded-xl">
                    <CatIcon cat={t.category}/>
                    <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">{t.description}</div>
                        <div className="text-xs text-slate-400">{fmtDate(t.date)} · {t.category}</div>
                    </div>
                    <div className={`text-sm font-semibold shrink-0 ${t.type==='income'?'text-emerald-500 dark:text-emerald-400':'text-slate-700 dark:text-slate-200'}`}>
                        {t.type==='income'?'+':'-'}{fmtCurE(t.amount)}
                    </div>
                </div>
            ))}
        </div>
    );
}
