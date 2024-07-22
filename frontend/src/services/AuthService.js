import axios from 'axios';

const AUTH_URL = 'http://localhost:5000/api/auth';

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${AUTH_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Other authentication services
