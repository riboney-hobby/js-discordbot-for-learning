const {BOT_TOKEN, COMMAND_PREFIX, OWNER} = require('../constants/config.js');
const BotClient = require('../discord/BotClient.js');

const config = {
  botToken: BOT_TOKEN,
  prefix: COMMAND_PREFIX,
  owner: OWNER,
};

module.exports = new BotClient(config);
