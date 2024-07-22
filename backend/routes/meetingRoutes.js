const express = require('express');
const router = express.Router();
const meetingController = require('../controllers/meetingController');

router.post('/create', meetingController.createMeeting);
router.get('/', meetingController.getMeetings);

module.exports = router;
