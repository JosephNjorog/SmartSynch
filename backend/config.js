module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || 'default_secret',
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/smart-sync-meetings'
};
