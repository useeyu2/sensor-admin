import React, { useState } from 'react';
import { UserPlus, Search, MoreHorizontal, Trash2, Edit } from 'lucide-react';
import './UserManagement.css';

const UserManagement = () => {
  const [users] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Student', status: 'Active', joined: 'Oct 12, 2023' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Instructor', status: 'Active', joined: 'Sep 28, 2023' },
    { id: 3, name: 'Charlie Davis', email: 'charlie@example.com', role: 'Student', status: 'Inactive', joined: 'Oct 05, 2023' },
    { id: 4, name: 'Diana Evans', email: 'diana@example.com', role: 'Admin', status: 'Active', joined: 'Jan 10, 2023' },
  ]);

  return (
    <div className="user-management animate-fade-in">
      <div className="page-header">
        <div>
          <h1>User Management</h1>
          <p>Add, remove, and manage academy members and their roles.</p>
        </div>
        <button className="btn-primary">
          <UserPlus size={18} /> Add New User
        </button>
      </div>

      <div className="table-container">
        <div className="table-controls">
          <div className="search-bar table-search">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search users by name or email..." />
          </div>
          <div className="filter-group">
            <select className="table-select">
              <option value="all">All Roles</option>
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>

        <div className="table-responsive">
          <table className="users-table">
            <thead>
              <tr>
                <th>User Info</th>
                <th>Role</th>
                <th>Status</th>
                <th>Joined Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="user-cell">
                      <img src={`https://ui-avatars.com/api/?name=${user.name.replace(' ', '+')}&background=random`} alt={user.name} className="user-avatar" />
                      <div className="user-details">
                        <span className="user-name">{user.name}</span>
                        <span className="user-email">{user.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`role-badge ${user.role.toLowerCase()}`}>{user.role}</span>
                  </td>
                  <td>
                    <span className={`status-badge ${user.status.toLowerCase()}`}>{user.status}</span>
                  </td>
                  <td>{user.joined}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="icon-action-btn edit" title="Edit User"><Edit size={16} /></button>
                      <button className="icon-action-btn delete" title="Remove User"><Trash2 size={16} /></button>
                      <button className="icon-action-btn more" title="More Options"><MoreHorizontal size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
