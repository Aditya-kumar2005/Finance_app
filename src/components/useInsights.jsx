import React from 'react'
import { useTxn } from './useTxn';
import { fmtCur } from './Utilites';
export default function useInsights() {
  const {st}=useTxn();
    return React.useMemo(()=>{
        const tx=st.txns; if(!tx.length) return [];
        const inc=tx.filter(t=>t.type==='income'), exp=tx.filter(t=>t.type==='expense');
        const totI=inc.reduce((s,t)=>s+t.amount,0), totE=exp.reduce((s,t)=>s+t.amount,0);
        /* Top spending category */
        const ct={};exp.forEach(t=>{ct[t.category]=(ct[t.category]||0)+t.amount;});
        const topC=Object.entries(ct).sort((a,b)=>b[1]-a[1])[0];
        /* Monthly data */
        const md={};tx.forEach(t=>{const m=t.date.substring(0,7);if(!md[m])md[m]={i:0,e:0};md[m][t.type==='income'?'i':'e']+=t.amount;});
        const ms=Object.keys(md).sort(), lm=md[ms[ms.length-1]], pm=ms.length>1?md[ms[ms.length-2]]:null;
        const sr=lm.i>0?((lm.i-lm.e)/lm.i*100):0;
        const avgE=exp.length?totE/exp.length:0;
        let mom=null;if(pm){const pn=pm.i-pm.e,cn=lm.i-lm.e;mom=pn!==0?((cn-pn)/Math.abs(pn)*100):0;}
        /* Top income source */
        const ic={};inc.forEach(t=>{ic[t.category]=(ic[t.category]||0)+t.amount;});
        const topI=Object.entries(ic).sort((a,b)=>b[1]-a[1])[0];
        return [
            {label:'Top Spending Category',value:topC?topC[0]:'N/A',sub:topC?fmtCur(topC[1]):'',icon:'fa-arrow-trend-down',color:'#F43F5E'},
            {label:'Monthly Savings Rate',value:sr.toFixed(1)+'%',sub:'of '+fmtCur(lm.i)+' income',icon:'fa-piggy-bank',color:sr>=0?'#10B981':'#F43F5E'},
            {label:'Avg Expense / Transaction',value:fmtCur(avgE),sub:exp.length+' total expenses',icon:'fa-calculator',color:'#06B6D4'},
            {label:'Total Transactions',value:String(tx.length),sub:inc.length+' income, '+exp.length+' expense',icon:'fa-list-check',color:'#8B5CF6'},
            {label:'Net Savings',value:fmtCur(totI-totE),sub:mom!==null?(mom>=0?'+':'')+mom.toFixed(1)+'% vs last month':'',icon:'fa-wallet',color:'#10B981'},
            {label:'Top Income Source',value:topI?topI[0]:'N/A',sub:topI?fmtCur(topI[1]):'',icon:'fa-arrow-trend-up',color:'#F59E0B'},
        ];
    },[st.txns]);
}
