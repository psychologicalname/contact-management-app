import React from 'react';
import Sidebar from './Sidebar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="md:flex">
            <Sidebar />
            <div className="flex-grow p-6">
                {children}
            </div>
        </div>
    );
};

export default Layout;
