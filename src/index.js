const Discord = require('discord.js');
const {BOT_TOKEN, OWNER} = require('./constants/config');

const client = new Discord.Client();

client.once('ready', () => console.log(`All Ready, Boss:${OWNER}!`));

client.login(BOT_TOKEN);
