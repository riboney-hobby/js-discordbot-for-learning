const {BOT_TOKEN, COMMAND_PREFIX, OWNER} = require('../constants/config.js');
const {BotClient} = require('../discord/BotClient.js');

const config = {
  token: BOT_TOKEN,
  prefix: COMMAND_PREFIX,
  owner: OWNER,
};

const bot = new BotClient(config);
bot.login();
