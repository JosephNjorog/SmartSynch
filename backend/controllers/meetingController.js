const Meeting = require('../models/meetingModel');

exports.createMeeting = async (req, res) => {
    const { title, date, time, participants } = req.body;

    try {
        const newMeeting = new Meeting({ title, date, time, participants });
        await newMeeting.save();
        res.status(201).json({ message: 'Meeting created successfully', meeting: newMeeting });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getMeetings = async (req, res) => {
    try {
        const meetings = await Meeting.find();
        res.status(200).json(meetings);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
