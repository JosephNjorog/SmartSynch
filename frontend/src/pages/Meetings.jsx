import React from 'react';
import './meetings.css';

function Meetings() {
  return (
    <div className="meetings">
      <h1>Schedule a Meeting</h1>
      <form>
        <label>
          Meeting Title:
          <input type="text" name="title" />
        </label>
        <label>
          Date:
          <input type="date" name="date" />
        </label>
        <label>
          Time:
          <input type="time" name="time" />
        </label>
        <label>
          Participants:
          <textarea name="participants" placeholder="Enter email addresses separated by commas"></textarea>
        </label>
        <button type="submit">Schedule Meeting</button>
      </form>
      <div className="upcoming-meetings">
        <h2>Upcoming Meetings</h2>
        <div className="meeting">
          <h3>Project Kickoff</h3>
          <p>Date: 2024-07-20</p>
          <p>Time: 10:00</p>
          <p>Participants: example@example.com</p>
        </div>
        <div className="meeting">
          <h3>Sprint Review</h3>
          <p>Date: 2024-07-25</p>
          <p>Time: 14:00</p>
          <p>Participants: example@example.com</p>
        </div>
      </div>
    </div>
  );
}

export default Meetings;
