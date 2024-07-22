# **SmartSync Meetings**

**SmartSync Meetings** is a cutting-edge application designed to revolutionize meeting scheduling and management using advanced AI technologies. Leveraging the power of Llama 3 and OpenAI’s GPT-4.0, SmartSync Meetings enhances productivity by intelligently planning meetings according to personal schedules and data.

## **Project Overview**

SmartSync Meetings integrates with your calendar and personal data to offer personalized meeting recommendations, transcribe discussions, and analyze sentiment. By utilizing large language models and sophisticated AI, this application streamlines scheduling, improves meeting efficiency, and ensures actionable insights.

## **Features**

- **Intelligent Meeting Recommendations:** Suggests optimal times and agenda items based on participants’ schedules and preferences.
- **Meeting Transcriptions & Summaries:** Automatically transcribes and summarizes meeting discussions, generating actionable items.
- **Sentiment Analysis:** Analyzes the sentiment of meeting discussions to gauge team morale and engagement.
- **Smart Reminders:** Sends personalized reminders and notifications to ensure timely participation.

## **Project Structure**

```
SmartSyncMeetings/
├── frontend/
│   ├── public/
│   │   ├── vite.svg
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Calendar.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── MeetingForm.jsx
│   │   │   ├── MeetingList.jsx
│   │   │   ├── Notification.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── MeetingRecommendations.jsx
│   │   │   ├── MeetingTranscription.jsx
│   │   │   ├── SentimentAnalysis.jsx
│   │   │   ├── SmartReminders.jsx
│   │   ├── styles/
│   │   │   ├── colors.css
│   │   │   ├── global.css
│   │   │   ├── reset.css
│   │   │   ├── recommendations.css
│   │   │   ├── transcription.css
│   │   │   ├── sentiment.css
│   │   │   ├── reminders.css
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   ├── services/
│   │   │   ├── ApiService.js
│   │   │   ├── AuthService.js
│   │   │   ├── NotificationService.js
│   │   ├── utils/
│   │   │   ├── dateUtils.js
│   │   │   ├── validationUtils.js
│   │   │   ├── config.js
│   │   ├── App.jsx
│   │   ├── index.jsx
│   │   ├── routes.jsx
│   │   ├── store/
│   │   │   ├── actions/
│   │   │   │   ├── meetingActions.js
│   │   │   ├── reducers/
│   │   │   │   ├── meetingReducer.js
│   │   │   │   ├── rootReducer.js
│   │   │   ├── store.js
│   ├── .env
├── backend/
│   ├── controllers/
│   │   ├── llama3Controller.js
│   ├── models/
│   │   ├── Meeting.js
│   ├── routes/
│   │   ├── llama3Routes.js
│   ├── services/
│   │   ├── Llama3Service.js
│   ├── utils/
│   │   ├── Llama3Utils.js
│   ├── .env
├── README.md
```

## **Technologies Used**

- **Frontend:**
  - React.js
  - Vite
  - Tailwind CSS
  - OpenAI GPT-4.0
  - Llama 3

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Llama 3

- **Other Tools:**
  - Git
  - GitHub
  - Postman

## **Setup Instructions**

1. **Frontend:**
   - Navigate to the `frontend` directory.
   - Install dependencies: `npm install`
   - Start the development server: `npm start`

2. **Backend:**
   - Navigate to the `backend` directory.
   - Install dependencies: `npm install`
   - Start the backend server: `npm start`

## **Contributions**

Feel free to contribute by opening issues or pull requests. We welcome feedback and suggestions to improve SmartSync Meetings.

