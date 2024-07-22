import React from 'react';
import './notification.css'; // Import CSS for styling

const Notification = ({ message }) => {
  return (
    <div className="notification">
      <p>{message}</p>
    </div>
  );
};

export default Notification;
