const llama3Service = require('../ai/llama3Service');

exports.getInsights = async (req, res) => {
    const { meetingDetails } = req.body;

    try {
        const insights = await llama3Service.getMeetingInsights(meetingDetails);
        res.status(200).json({ insights });
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve insights' });
    }
};
