const TicketService = require("../services/email-service");

async function create(req, res) {
  try {
    const response = await TicketService.createTicket(req.body);
    return res.status(201).json({
      success: true,
      data: response,
      message: "successfully created a ticket",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      data: {},
      message: "Not able to create a ticket",
      err: error,
    });
  }
}
module.exports = { create };
