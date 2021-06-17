const bot = require('../src/loaders/discord.js');


// Jest doesn't exit properly without closing down Discord connection first
afterAll(() => {
  bot.destroy();
});

// src: https://jestjs.io/docs/asynchronous#promises
// Required for handling async operations
describe('Discord bot successfully connects', () =>{
  test('Should return token upon connection', () => {
    return expect(bot.login()).resolves.toBe(process.env.BOT_TOKEN);
  });
});
