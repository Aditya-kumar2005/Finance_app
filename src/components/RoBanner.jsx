import React from 'react';
import { useRole } from '../providers/RoleProvider';

export default function RoBanner() {
  const{isAdmin}=useRole();
    if(isAdmin) return null;
    return (
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <div className="ro rounded-xl px-4 py-2.5 flex items-center gap-2 text-sm text-amber-700 dark:text-amber-300">
                <i className="fa-solid fa-eye text-xs"/><span className="font-medium">Viewing in read-only mode — switch to Admin to make changes</span>
            </div>
        </div>
    );
}
