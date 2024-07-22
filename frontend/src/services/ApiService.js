import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchMeetings = async () => {
  try {
    const response = await axios.get(`${API_URL}/meetings`);
    return response.data;
  } catch (error) {
    console.error('Error fetching meetings:', error);
    throw error;
  }
};

// Other API services
