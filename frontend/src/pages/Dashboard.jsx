import React from 'react';
import './dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="card">
        <h3>Project Kickoff</h3>
        <p>Date: 2024-07-20</p>
        <p>Time: 10:00</p>
        <p>Participants: example@example.com</p>
      </div>
      <div className="card">
        <h3>Sprint Review</h3>
        <p>Date: 2024-07-25</p>
        <p>Time: 14:00</p>
        <p>Participants: example@example.com</p>
      </div>
    </div>
  );
}

export default Dashboard;
