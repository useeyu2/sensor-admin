import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, Settings, LogOut, Activity } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ onClose }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/logo.png" alt="Logo" className="sidebar-logo" onError={(e) => { e.target.style.display = 'none'; }} />
        <h2>Sensor Admin</h2>
      </div>
      
      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'} onClick={onClose}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/content" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'} onClick={onClose}>
          <FileText size={20} />
          <span>Content</span>
        </NavLink>
        <NavLink to="/users" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'} onClick={onClose}>
          <Users size={20} />
          <span>Users</span>
        </NavLink>
        <NavLink to="/sessions" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'} onClick={onClose}>
          <Activity size={20} />
          <span>Sessions</span>
        </NavLink>
      </nav>
      
      <div className="sidebar-footer">
        <NavLink to="/settings" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'} onClick={onClose}>
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>
        <button className="nav-item logout-btn" onClick={() => window.location.href='/login'}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
