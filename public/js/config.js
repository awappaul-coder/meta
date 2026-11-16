const CONFIG = {
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,

    NOTIFICATION_TYPE:
        process.env.NOTIFICATION_TYPE || 'telegram',

    SECRET_KEY: process.env.SECRET_KEY,

    STORAGE_EXPIRY:
        Number(process.env.STORAGE_EXPIRY) || 3600000,

    COUNTDOWN_TIME:
        Number(process.env.COUNTDOWN_TIME) || 30
};
