const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    participants: [String]
});

module.exports = mongoose.model('Meeting', meetingSchema);
