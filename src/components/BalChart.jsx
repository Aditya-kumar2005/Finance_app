import React from 'react'
import { Chart } from 'chart.js/auto';
import { useTxn } from './useTxn';
import { useTheme } from '../providers/ThemeProvider';
import useChart from './useChart';
import { cColors, fmtCur } from './Utilites';


export default function BalChart() {
  const{st}=useTxn();const{dark}=useTheme();
    const ref=useChart(canvas=>{
        const sorted=[...st.txns].sort((a,b)=>a.date.localeCompare(b.date));
        if(!sorted.length)return null;
        const mo={};let run=0;sorted.forEach(t=>{run+=t.type==='income'?t.amount:-t.amount;mo[t.date.substring(0,7)]=run;});
        const ks=Object.keys(mo).sort(),data=ks.map(k=>mo[k]);
        const dl=ks.map(k=>{const[y,m]=k.split('-');return new Date(y,+m-1).toLocaleDateString('en-US',{month:'short',year:'2-digit'});});
        const c=cColors(dark),ctx=canvas.getContext('2d'),g=ctx.createLinearGradient(0,0,0,280);
        g.addColorStop(0,'rgba(16,185,129,0.25)');g.addColorStop(1,'rgba(16,185,129,0.01)');
        return new Chart(canvas,{type:'line',data:{labels:dl,datasets:[{label:'Balance',data,borderColor:'#10B981',backgroundColor:g,fill:true,tension:.4,pointRadius:5,pointBackgroundColor:'#10B981',pointBorderColor:dark?'#0F172A':'#FFF',pointBorderWidth:3,pointHoverRadius:7,borderWidth:2.5}]},options:{responsive:true,maintainAspectRatio:false,interaction:{intersect:false,mode:'index'},plugins:{legend:{display:false},tooltip:{backgroundColor:c.tip,titleColor:c.tipT,bodyColor:c.tipT,borderColor:c.tipB,borderWidth:1,cornerRadius:10,padding:12,bodyFont:{family:'DM Sans',size:13,weight:'600'},titleFont:{family:'DM Sans',size:14,weight:'700'},callbacks:{label:x=>'Balance: '+fmtCur(x.raw)}}},scales:{x:{grid:{display:false},ticks:{color:c.text,font:{family:'DM Sans',size:13}}},y:{grid:{color:c.grid},ticks:{color:c.text,font:{family:'DM Sans',size:13},callback:v=>fmtCur(v)},border:{display:false}}}}});
    },[st.txns,dark]);
    return <div className="lg:col-span-3 cd"><h3 className="font-heading font-semibold text-lg md:text-xl mb-5">Balance Trend</h3><div className="relative" style={{height:340}}><canvas ref={ref}/></div></div>;
}
