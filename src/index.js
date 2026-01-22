const express = require("express");
const { PORT } = require("./config/serverConfig");
const TicketController = require("./controllers/ticket-controller");
const jobs = require("./utils/jobs");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/api/v1/tickets", TicketController.create);

async function startServer() {
  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
  });
  jobs();
}
startServer();
