import React from 'react';
import './sidebar.css'; // Import CSS for styling

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#meetings">Meetings</a></li>
        <li><a href="#settings">Settings</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
