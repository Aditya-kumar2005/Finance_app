import React from 'react';


const InCard = React.memo(({ins})=>(
    <div className="cd flex items-start gap-4 p-5">
        <div className="ibar shrink-0" style={{background:ins.color}}/>
        <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">{ins.label}</div>
            <div className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-0.5">{ins.value}</div>
            <div className="text-xs text-slate-400 dark:text-slate-500">{ins.sub}</div>
        </div>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{background:ins.color+'15',color:ins.color}}><i className={`fa-solid ${ins.icon}`}/></div>
    </div>
));

export default InCard;