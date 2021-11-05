const bot = require("./discord.js");
const sql = require("./database.js");

sql.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully!");
  })
  .catch((err) => {
    console.log("Can't establish database connection:\n" + err);
  });

module.exports = async () => {
  try {
    await bot.login();
  } catch (e) {
    console.error(e);
  }
};
