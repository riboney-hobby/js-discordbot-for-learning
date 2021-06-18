const bot = require('./discord.js');

module.exports = async () => {
  console.log('Starting up discord bot!');
  await bot.login();
  console.log('Finished loading up bot!');
};
