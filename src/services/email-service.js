const sender = require("../config/emailConfig");

const sendBasicMail = async (mailFrom, mailTo, mailSubject, mailBody) => {
  try {
    const response = await sender.sendMail({
      from: mailFrom,
      to: mailTo,
      text: mailBody,
      subject: mailSubject,
    });
    console.log("mail send successfully", response);
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendBasicMail;
