import React from 'react'
import { useToast } from '../providers/ToastProvider';

export default function Toasts() {
  const{list}=useToast();
    const cm={success:'bg-emerald-500',error:'bg-red-500',info:'bg-blue-500',warning:'bg-amber-500'};
    const ic={success:'fa-check',error:'fa-xmark',info:'fa-info',warning:'fa-exclamation'};
    return (
        <div className="fixed bottom-4 right-4 z-200 space-y-2 pointer-events-none">
            {list.map(t=>(
                <div key={t.id} className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl ${cm[t.type]} text-white text-sm font-medium min-w-[260px] ${t.out?'tout':'tin'}`}>
                    <i className={`fa-solid ${ic[t.type]} text-white/80`}/><span>{t.msg}</span>
                </div>
            ))}
        </div>
    );
}
