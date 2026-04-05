import { CAT_CFG } from './Constant';

export const fmtCur  = n => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',minimumFractionDigits:0,maximumFractionDigits:0}).format(n);
export const fmtCurE = n => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n);
export const fmtDate = d => new Date(d+'T00:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
export const nextId  = tx => tx.length ? Math.max(...tx.map(t=>t.id))+1 : 1;
export const  catOf   = c => CAT_CFG[c] || CAT_CFG['Other'];
export const cColors = dk => ({grid:dk?'rgba(51,65,85,.3)':'rgba(226,232,240,.8)',text:dk?'#94A3B8':'#64748B',tip:dk?'#1E293B':'#FFF',tipT:dk?'#E2E8F0':'#0F172A',tipB:dk?'#334155':'#E2E8F0'});