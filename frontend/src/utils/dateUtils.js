export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US').format(new Date(date));
  };
  
  export const formatTime = (time) => {
    return new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit' }).format(new Date(`1970-01-01T${time}:00`));
  };
  
  // Other date utilities
  