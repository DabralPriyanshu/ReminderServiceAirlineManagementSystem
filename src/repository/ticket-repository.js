const { NotificationTickets } = require("../models/index");
const { Op } = require("sequelize");
class TicketRepository {
  async getAll() {
    try {
      return await NotificationTickets.findAll();
    } catch (error) {
      throw error;
    }
  }
  async create(data) {
    try {
      return await NotificationTickets.create(data);
    } catch (error) {
      throw error;
    }
  }
  async get(filter) {
    try {
      return await NotificationTickets.findAll({
        where: {
          status: filter.status,
          notificationTime: { [Op.lte]: new Date() },
        },
      });
    } catch (error) {
      throw error;
    }
  }
  async updateTicket(ticketId, data) {
    try {
      let ticket = await NotificationTickets.findByPk(ticketId);
      if (data.status) {
        ticket.status = data.status;
        await ticket.save();
      }
      return ticket;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = TicketRepository;
