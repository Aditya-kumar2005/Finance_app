import React from 'react'
import { Chart } from 'chart.js/auto';
import { useTxn } from './useTxn';
import { useTheme } from '../providers/ThemeProvider';
import useChart from './useChart';
import { cColors, fmtCur, catOf } from './Utilites';
export default function CatChart() {
  const{st}=useTxn();const{dark}=useTheme();
    const ref=useChart(canvas=>{
        const exp=st.txns.filter(t=>t.type==='expense');if(!exp.length)return null;
        const ct={};exp.forEach(t=>{ct[t.category]=(ct[t.category]||0)+t.amount;});
        const sorted=Object.entries(ct).sort((a,b)=>b[1]-a[1]);
        const c=cColors(dark);
        return new Chart(canvas,{type:'doughnut',data:{labels:sorted.map(s=>s[0]),datasets:[{data:sorted.map(s=>s[1]),backgroundColor:sorted.map(s=>catOf(s[0]).color),borderColor:dark?'rgba(15,23,42,.6)':'#FFF',borderWidth:3,hoverOffset:8}]},options:{responsive:true,maintainAspectRatio:false,cutout:'65%',plugins:{legend:{position:'bottom',labels:{color:c.text,font:{family:'DM Sans',size:11},padding:12,usePointStyle:true,pointStyleWidth:8}},tooltip:{backgroundColor:c.tip,titleColor:c.tipT,bodyColor:c.tipT,borderColor:c.tipB,borderWidth:1,cornerRadius:10,padding:12,bodyFont:{family:'DM Sans',weight:'600'},callbacks:{label:x=>x.label+': '+fmtCur(x.raw)}}}}});
    },[st.txns,dark]);
    return <div className="lg:col-span-2 cd"><h3 className="font-heading font-semibold text-base mb-4">Spending by Category</h3><div className="relative flex items-center justify-center" style={{height:280}}><canvas ref={ref}/></div></div>;
}
