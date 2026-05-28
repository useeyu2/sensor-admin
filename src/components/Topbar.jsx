import React from 'react';
import { Search, Bell } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import './Topbar.css';

const Topbar = () => {
  return (
    <header className="topbar">
      <div className="search-bar">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Search..." />
      </div>
      
      <div className="topbar-actions">
        <ThemeToggle />
        <button className="icon-btn">
          <Bell size={20} />
          <span className="badge">3</span>
        </button>
        <div className="user-profile">
          <img src="/portrait.png" alt="Admin" className="avatar" onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Admin&background=random'; }} />
          <div className="user-info">
            <span className="user-name">Admin User</span>
            <span className="user-role">Super Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
