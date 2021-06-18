const BotClient = require("../discord/BotClient.js");
const config = {
  botToken: process.env.BOT_TOKEN,
};
const activity = {
  name: process.env.ACTIVITY_NAME,
  type: process.env.ACTIVITY_TYPE,
};

const presenceData = {
  activity: activity,
};
module.exports = new BotClient(config, { presence: presenceData });
