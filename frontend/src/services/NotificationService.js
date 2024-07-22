import axios from 'axios';

const NOTIFICATION_URL = 'http://localhost:5000/api/notifications';

export const sendNotification = async (notification) => {
  try {
    const response = await axios.post(`${NOTIFICATION_URL}`, notification);
    return response.data;
  } catch (error) {
    console.error('Error sending notification:', error);
    throw error;
  }
};

// Other notification services
