import React from 'react'
import { catOf } from './Utilites'
export const CatIcon = React.memo(({cat,big})=>{
    const c=catOf(cat),sz=big?'w-10 h-10 rounded-xl':'w-9 h-9 rounded-lg',is=big?'':'text-sm';
    return <div className={`${sz} flex items-center justify-center shrink-0`} style={{background:c.color+'15',color:c.color}}><i className={`fa-solid ${c.icon} ${is}`}/></div>;
});

