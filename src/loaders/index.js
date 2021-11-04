const bot = require("./discord.js");

module.exports = async () => {
  try {
    await bot.login();
  } catch (e) {
    console.error(e);
  }
};
