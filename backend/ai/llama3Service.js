const axios = require('axios');
const { LLAMA3_API_KEY, LLAMA3_API_URL } = require('../config');

const llama3Client = axios.create({
    baseURL: LLAMA3_API_URL,
    headers: {
        'Authorization': `Bearer ${LLAMA3_API_KEY}`,
        'Content-Type': 'application/json'
    }
});

exports.getMeetingInsights = async (meetingDetails) => {
    try {
        const response = await llama3Client.post('/generate-insights', { data: meetingDetails });
        return response.data;
    } catch (error) {
        console.error('Error fetching insights from Llama 3:', error);
        throw new Error('Failed to fetch insights');
    }
};
