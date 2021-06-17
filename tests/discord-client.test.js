const bot = require('../src/loaders/discord.js');


// Jest doesn't exit properly without closing down Discord connection first
afterAll(() => {
  bot.destroy();
});

// src: https://jestjs.io/docs/asynchronous#promises
// Required for handling async operations
// resolve() jest function did not work for some reason
describe('Discord bot successfully connects', () =>{
  test('Should return token upon connection', () => {
    return bot.login().then((token) => {
      expect(token).toBe(process.env.BOT_TOKEN);
    });
  });
});

// describe('Discord bot successfully connects', () =>{
//   test('Should return token upon connection', () => {
//     return expect(bot.login()).resolves.toBe(process.env.BOT_TOKEN);
//   });
// });

// describe('Discord bot successfully connects', () =>{
//   test('Should return token upon connection', () => {
//     expect(bot.login()).toBe(process.env.BOT_TOKEN);
//   });
// });
