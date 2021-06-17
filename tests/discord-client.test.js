const BOT_TOKEN = 'replace-with-bot-config';
const Discord = require('discord.js');
const client = new Discord.Client();

afterAll(() => {
  client.destroy();
});

// src: https://jestjs.io/docs/asynchronous#promises
describe('discord bot connection', () =>{
  test('Should return token upon connection', () => {
    return client.login(BOT_TOKEN).then((token) => {
      expect(token).toBe(BOT_TOKEN);
    });
  });
});
