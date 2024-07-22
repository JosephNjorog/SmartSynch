import React, { useState } from 'react';
import './meetingForm.css'; // Import CSS for styling

const MeetingForm = () => {
  const [meetingDetails, setMeetingDetails] = useState({
    title: '',
    date: '',
    time: '',
    participants: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeetingDetails({
      ...meetingDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form className="meeting-form" onSubmit={handleSubmit}>
      <label htmlFor="title">Meeting Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={meetingDetails.title}
        onChange={handleChange}
        required
      />

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={meetingDetails.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="time">Time:</label>
      <input
        type="time"
        id="time"
        name="time"
        value={meetingDetails.time}
        onChange={handleChange}
        required
      />

      <label htmlFor="participants">Participants:</label>
      <input
        type="text"
        id="participants"
        name="participants"
        value={meetingDetails.participants}
        onChange={handleChange}
        placeholder="Enter email addresses separated by commas"
        required
      />

      <button type="submit">Schedule Meeting</button>
    </form>
  );
};

export default MeetingForm;
