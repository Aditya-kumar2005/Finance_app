import React from 'react'
import { Chart } from 'chart.js/auto';
import { useTxn } from './useTxn';
import { useTheme } from '../providers/ThemeProvider';
import useChart from './useChart';
import { cColors, fmtCur } from './Utilites';


export default function MoChart() {
  const{st}=useTxn();const{dark}=useTheme();
    const ref=useChart(canvas=>{
        const md={};st.txns.forEach(t=>{const m=t.date.substring(0,7);if(!md[m])md[m]={i:0,e:0};md[m][t.type==='income'?'i':'e']+=t.amount;});
        const ms=Object.keys(md).sort();if(!ms.length)return null;
        const dl=ms.map(k=>{const[y,m]=k.split('-');return new Date(y,+m-1).toLocaleDateString('en-US',{month:'short',year:'2-digit'});});
        const c=cColors(dark);
        return new Chart(canvas,{type:'bar',data:{labels:dl,datasets:[
            {label:'Income',data:ms.map(m=>md[m].i),backgroundColor:'rgba(16,185,129,0.75)',borderRadius:6,borderSkipped:false,barPercentage:.7,categoryPercentage:.6},
            {label:'Expenses',data:ms.map(m=>md[m].e),backgroundColor:'rgba(244,63,94,0.75)',borderRadius:6,borderSkipped:false,barPercentage:.7,categoryPercentage:.6}
        ]},options:{responsive:true,maintainAspectRatio:false,interaction:{intersect:false,mode:'index'},plugins:{legend:{position:'top',align:'end',labels:{color:c.text,font:{family:'DM Sans',size:12},usePointStyle:true,pointStyleWidth:8,padding:16}},tooltip:{backgroundColor:c.tip,titleColor:c.tipT,bodyColor:c.tipT,borderColor:c.tipB,borderWidth:1,cornerRadius:10,padding:12,bodyFont:{family:'DM Sans',weight:'600'},callbacks:{label:x=>x.dataset.label+': '+fmtCur(x.raw)}}},scales:{x:{grid:{display:false},ticks:{color:c.text,font:{family:'DM Sans',size:11}}},y:{grid:{color:c.grid},ticks:{color:c.text,font:{family:'DM Sans',size:11},callback:v=>fmtCur(v)},border:{display:false}}}}});
    },[st.txns,dark]);
    return <div className="cd"><h3 className="font-heading font-semibold text-base mb-4">Monthly Income vs Expenses</h3><div className="relative" style={{height:320}}><canvas ref={ref}/></div></div>;
}
