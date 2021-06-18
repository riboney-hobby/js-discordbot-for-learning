const prefix = process.env.COMMAND_PREFIX;

module.exports = class {
  /**
   *
   * @param {Object} client
   */
  constructor() {
    this.client = client;
    this.commandInfo = {
      name: 'home',
      alias: ['github', 'sourcecode', 'git'],
      description: 'Gives link to bot\'s home (source code)',
      group: 'bot-info',
      memberName: 'home',
      examples: [`${prefix}home`],
    };
  }

  /**
   * Runs the command
   * @param {object} msg - CommandoMessage
   */
  async run(msg) {
    const githubLink = 'https://github.com/riboney/js-discordbot-for-learning';
    return msg.reply(githubLink);
  }
};
