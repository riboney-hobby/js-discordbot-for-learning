const {BOT_TOKEN: botToken} = require('../src/constants/config');
const Discord = require('discord.js');
const client = new Discord.Client();

// Jest doesn't exit properly without closing down Discord connection first
afterAll(() => {
  client.destroy();
});

// src: https://jestjs.io/docs/asynchronous#promises
// Required for handling async operations
// resolve() jest function did not work for some reason
describe('discord bot connection', () =>{
  test('Should return token upon connection', () => {
    return client.login(botToken).then((token) => {
      expect(token).toBe(botToken);
    });
  });
});
