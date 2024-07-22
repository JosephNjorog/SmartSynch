import React from 'react';
import './meetingList.css'; // Import CSS for styling

const MeetingList = ({ meetings }) => {
  return (
    <div className="meeting-list">
      <h2>Upcoming Meetings</h2>
      <ul>
        {meetings.map((meeting) => (
          <li key={meeting.id}>
            <h3>{meeting.title}</h3>
            <p>Date: {meeting.date}</p>
            <p>Time: {meeting.time}</p>
            <p>Participants: {meeting.participants.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingList;
