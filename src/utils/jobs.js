const cron = require("node-cron");
const sender = require("../config/emailConfig");
const EmailService = require("../services/email-service");

//setting up cron job function
function setUpJobs() {
  cron.schedule("*/2 * * * *", async () => {
    const response = await EmailService.fetchPendingEmails();
    console.log("email sending starts");
    response.forEach((email) => {
      sender.sendMail(
        {
          to: email.recipientEmail,
          subject: email.subject,
          text: email.content,
        },
        async (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
            await EmailService.updateTicket(email.id, {
              status: "SUCCESS",
            });
          }
        },
      );
    });
  });
}
module.exports = setUpJobs;
