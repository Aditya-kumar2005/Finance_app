import React from 'react';
import { CatIcon } from './CatIcon';
import { fmtCurE,fmtDate } from './Utilites';
import { catOf } from './Utilites';

const TxnRow = React.memo(({t,isAdmin,onEdit,onDel})=>{
    const cfg=catOf(t.category);
    return (
        <div className="tr cd flex items-center gap-3 sm:gap-4 p-3 sm:p-4">
            <CatIcon cat={t.category} big/>
            <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold truncate">{t.description}</div>
                <div className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 flex items-center gap-2 flex-wrap">
                    <span>{fmtDate(t.date)}</span><span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"/>
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[11px] font-medium" style={{background:cfg.color+'15',color:cfg.color}}>{t.category}</span>
                </div>
            </div>
            <div className="text-right shrink-0">
                <div className={`text-sm font-bold ${t.type==='income'?'text-emerald-500 dark:text-emerald-400':'text-slate-800 dark:text-slate-100'}`}>
                    {t.type==='income'?'+':'-'}{fmtCurE(t.amount)}
                </div>
                <div className={`text-[10px] uppercase font-bold tracking-wider mt-0.5 ${t.type==='income'?'text-emerald-400 dark:text-emerald-500':'text-slate-400 dark:text-slate-500'}`}>{t.type}</div>
            </div>
            {isAdmin&&<div className="flex items-center gap-1 shrink-0 ml-1">
                <button onClick={()=>onEdit(t.id)} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors cursor-pointer bg-transparent border-none" aria-label="Edit"><i className="fa-solid fa-pen-to-square text-xs"/></button>
                <button onClick={()=>onDel(t.id)} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors cursor-pointer bg-transparent border-none" aria-label="Delete"><i className="fa-solid fa-trash text-xs"/></button>
            </div>}
        </div>
    );
});

export default TxnRow;