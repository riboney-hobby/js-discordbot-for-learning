const bot = require('../src/loaders/discord.js');

jest.setTimeout(10000);

describe('Discord bot successfully connects', () =>{
  // need to set timer to ensure discord client tears down without error
  // src: https://gist.github.com/apieceofbart/e6dea8d884d29cf88cdb54ef14ddbcc4
  afterAll(async () => {
    const pause = (ms) => new Promise((res) => setTimeout(res, ms));
    await pause(3000);
    bot.destroy();
  });

  test('Should return token upon connection', async () => {
    return bot.login().then((token) => {
      expect(token).toBe(process.env.BOT_TOKEN);
    });
  });
});
