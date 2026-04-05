import React from 'react';
import { useRole } from '../providers/RoleProvider';
import { useTheme } from '../providers/ThemeProvider';
import {useToast} from '../providers/ToastProvider'

export default function Header({tab,setTab, isSidebarOpen, setIsSidebarOpen}) {
  const{role,setRole,isAdmin}=useRole();
    const{dark,flip}=useTheme();
    const{add}=useToast();
    const tabs=[{k:'dashboard',l:'Dashboard'},{k:'transactions',l:'Transactions'},{k:'insights',l:'Insights'}];
    const Nav=({cls})=>(
        <nav className={cls} role="tablist" aria-label="Main navigation">
            {tabs.map(t=>(
                <button key={t.k} className={`ntab ${tab===t.k?'on':''}`} role="tab" aria-selected={tab===t.k} onClick={()=>setTab(t.k)}>{t.l}</button>
            ))}
        </nav>
    );
    return (
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/60 dark:border-slate-800/60">
            <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="md:flex hidden w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800/60 items-center justify-center text-slate-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors cursor-pointer border-none"
                            aria-label="Toggle sidebar"
                        >
                            <i className={`fa-solid ${isSidebarOpen ? 'fa-bars-staggered' : 'fa-bars'} text-sm`}/>
                        </button>
                        <div className="w-9 h-9 rounded-xl bg-linear-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                            <i className="fa-solid fa-vault text-white text-sm"/>
                        </div>
                        <span className="font-heading font-bold text-xl tracking-tight">FinVault</span>
                    </div>
                    <Nav cls={`hidden md:flex items-center gap-1 bg-slate-100 dark:bg-slate-800/60 rounded-xl p-1 ${isSidebarOpen ? 'md:hidden' : ''}`}/>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <select value={role} onChange={e=>{setRole(e.target.value);add('Switched to '+(e.target.value==='admin'?'Admin':'Viewer')+' mode','info');}} aria-label="Select role" className="inp text-xs py-2 pr-8 font-medium cursor-pointer">
                            <option value="admin">Admin</option><option value="viewer">Viewer</option>
                        </select>
                        <span className={`hidden sm:inline-flex text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${isAdmin?'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300':'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300'}`}>
                            {isAdmin?'Full Access':'Read Only'}
                        </span>
                        <button onClick={flip} aria-label="Toggle theme" className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800/60 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors cursor-pointer border-none">
                            <i className={`fa-solid ${dark?'fa-moon':'fa-sun'} text-sm`}/>
                        </button>
                    </div>
                </div>
                <Nav cls="md:hidden flex items-center gap-1 pb-3 overflow-x-auto -mx-1 px-1"/>
            </div>
        </header>
    );
}
