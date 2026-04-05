import React from 'react'

export default function Empty() {
   return (
        <div className="cd text-center py-16">
            <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-receipt text-slate-400 text-2xl"/>
            </div>
            <p className="font-heading font-semibold text-lg text-slate-500 dark:text-slate-400">No transactions found</p>
            <p className="text-sm text-slate-400 mt-1">Try adjusting your filters or add a new transaction</p>
        </div>
    );
}
