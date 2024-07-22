import React from 'react';
import Header from '../components/Header';
import MeetingList from '../components/MeetingList';
import MeetingForm from '../components/MeetingForm';
import './dashboard.css'; // Import CSS for styling

const Dashboard = () => {
  const meetings = [
    // Sample data
    { id: 1, title: 'Project Kickoff', date: '2024-07-20', time: '10:00', participants: ['example@example.com'] },
    { id: 2, title: 'Sprint Review', date: '2024-07-25', time: '14:00', participants: ['example@example.com'] },
  ];

  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
      <main className="main-content">
        <MeetingForm />
        <MeetingList meetings={meetings} />
      </main>
    </div>
  );
};

export default Dashboard;
