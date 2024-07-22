import React from 'react';
import './header.css'; // Import CSS for styling

const Header = () => {
  return (
    <header className="header">
      <img src="/assets/logo.png" alt="SmartSync Meetings Logo" className="logo" />
      <h1>SmartSync Meetings</h1>
      {/* Navigation and other header components */}
    </header>
  );
};

export default Header;
