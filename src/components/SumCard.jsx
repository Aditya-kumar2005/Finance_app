import React from 'react';
import useAnimVal from './useAnimVal';
import { fmtCur } from './Utilites';
const SumCard = React.memo(({label,value,icon,first})=>{
	// function useAnimVal(target,dur=900){
    // const [v,setV]=React.useState(0);
    // React.useEffect(()=>{
    //     const t0=performance.now(),neg=target<0,abs=Math.abs(target);
    //     let raf;
    //     const tick=now=>{const p=Math.min((now-t0)/dur,1),e=1-Math.pow(1-p,3);setV(neg?-(abs*e):abs*e);if(p<1)raf=requestAnimationFrame(tick);};
    //     raf=requestAnimationFrame(tick);return()=>cancelAnimationFrame(raf);
    // },[target,dur]);
    // return v;
	// }
  	const av=useAnimVal(value);
    const wrap=first?'sc bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-transparent':'cd';
    const lc=first?'text-emerald-100':'text-slate-500 dark:text-slate-400';
    const vc=first?'text-white':value<0?'text-red-500 dark:text-red-400':'text-slate-900 dark:text-white';
    const ic=first
        ?<div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"><i className={`fa-solid ${icon} text-white`}/></div>
        :<div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/60 flex items-center justify-center text-slate-500 dark:text-slate-400"><i className={`fa-solid ${icon}`}/></div>;
    return (
        <div className={`${wrap} p-4 sm:p-5`}>
            <div className="flex items-center justify-between mb-3"><span className={`text-xs font-medium ${lc} uppercase tracking-wider`}>{label}</span>{ic}</div>
            <div className={`font-heading font-bold text-xl sm:text-2xl ${vc}`}>{fmtCur(av)}</div>
        </div>
    );
});

export default SumCard;