import React from 'react'

export default function DelModal({target,onYes,onNo}) {
  if(target===null) return null;
    return (
        <div className="fixed inset-0 z-110 flex items-center justify-center p-4">
            <div className="mbg absolute inset-0" onClick={onNo}/>
            <div className="mcon relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-sm border border-slate-200 dark:border-slate-700 p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-4"><i className="fa-solid fa-trash text-red-500 text-xl"/></div>
                <h3 className="font-heading font-semibold text-lg mb-2">Delete Transaction</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">This action cannot be undone. Are you sure?</p>
                <div className="flex gap-3">
                    <button onClick={onNo} className="flex-1 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer border-none text-sm">Cancel</button>
                    <button onClick={onYes} className="flex-1 py-2.5 bg-red-500 hover:bg-red-600 text-white font-medium rounded-xl transition-colors cursor-pointer border-none text-sm">Delete</button>
                </div>
            </div>
        </div>
    );
}
