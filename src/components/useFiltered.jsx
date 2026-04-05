import React from 'react'
import { useTxn } from './useTxn';

export default function useFiltered() {
	const {st}=useTxn();
    return React.useMemo(()=>{
        let l=[...st.txns]; const f=st.f;
        if(f.search){const q=f.search.toLowerCase();l=l.filter(t=>t.description.toLowerCase().includes(q)||t.category.toLowerCase().includes(q));}
        if(f.type!=='all') l=l.filter(t=>t.type===f.type);
        if(f.category!=='all') l=l.filter(t=>t.category===f.category);
        if(f.dateFrom) l=l.filter(t=>t.date>=f.dateFrom);
        if(f.dateTo) l=l.filter(t=>t.date<=f.dateTo);
        const[k,d]=f.sort.split('-');l.sort((a,b)=>d==='desc'?(b[k]>a[k]?1:-1):(a[k]>b[k]?1:-1));
        return l;
    },[st.txns,st.f]);
}
