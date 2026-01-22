const express = require("express");
const { PORT } = require("./config/serverConfig");
const sendBasicMail = require("./services/email-service");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
async function startServer() {
  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
    sendBasicMail(
      "support@admin.com",
      "priyanshudabral07@gmail.com",
      "this is testing email",
      "hey how are you doing",
    );
  });
}
startServer();
