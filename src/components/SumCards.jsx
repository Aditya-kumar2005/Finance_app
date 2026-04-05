import React from 'react'
import SumCard from './SumCard';
import useSummary from './useSummary';


export default function SumCards() {
	// function useSummary(){
    // const {st}=useTxn();
    // return React.useMemo(()=>{
    //     const inc=st.txns.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
    //     const exp=st.txns.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
    //     return {balance:inc-exp,income:inc,expenses:exp};
    // },[st.txns]);
	// }
  const s=useSummary();
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 st">
            <SumCard label="Total Balance" value={s.balance} icon="fa-wallet" first/>
            <SumCard label="Total Income" value={s.income} icon="fa-arrow-trend-up"/>
            <SumCard label="Total Expenses" value={s.expenses} icon="fa-arrow-trend-down"/>
            <SumCard label="Net Savings" value={s.balance} icon="fa-piggy-bank"/>
        </div>
    );
}
