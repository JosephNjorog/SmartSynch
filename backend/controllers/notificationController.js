const Notification = require('../models/notificationModel');

exports.sendNotification = async (req, res) => {
    const { message, userId } = req.body;

    try {
        const notification = new Notification({ message, userId });
        await notification.save();
        res.status(201).json({ message: 'Notification sent successfully', notification });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
