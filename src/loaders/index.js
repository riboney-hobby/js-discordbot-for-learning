const bot = require("./discord.js");
const command = require("../helpers/Command");

module.exports = async () => {
  console.log("Starting up discord bot!");
  await bot.login();
  bot.on("message", (msg) => {
    if (msg.author.bot) return;
    if (command.command(msg) == "?ping") {
      msg.reply("pong");
    }
  });

  console.log("Finished loading up bot!");
};
