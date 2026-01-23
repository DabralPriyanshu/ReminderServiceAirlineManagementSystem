require("dotenv").config({ quiet: true });

module.exports = {
  PORT: process.env.PORT || 3003,
  EMAIL_ID: process.env.EMAIL_ID,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  MESSAGE_BROKER_URL: process.env.MESSAGE_BROKER_URL,
  EXCHANGE_NAME: process.env.EXCHANGE_NAME,
  REMINDER_BINDING_KEY: process.env.REMINDER_BINDING_KEY,
};
