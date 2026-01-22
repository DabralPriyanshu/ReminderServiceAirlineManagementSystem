const sender = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");
const ticketRepository = new TicketRepository();
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
const fetchPendingEmails = async (timeStamps) => {
  try {
    return await ticketRepository.get({ status: "PENDING" });
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const createTicket = async (data) => {
  try {
    return await ticketRepository.create(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const updateTicket = async (ticketId, data) => {
  try {
    return await ticketRepository.updateTicket(ticketId, data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
module.exports = {
  sendBasicMail,
  fetchPendingEmails,
  createTicket,
  updateTicket,
};
