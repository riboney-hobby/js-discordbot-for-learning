const { Command } = require("discord.js-commando");
const prefix = process.env.COMMAND_PREFIX;

module.exports = class Home extends Command {
  /**
   *
   * @param {Object} client
   */
  constructor(client) {
    super(client, {
      name: "home",
      alias: ["github", "sourcecode", "git"],
      description: "Gives link to bot's home (source code)",
      group: "bot-info",
      memberName: "home",
      examples: [`${prefix}home`],
    });
  }

  /**
   * Runs the command
   * @param {object} msg - CommandoMessage
   */
  async run(msg) {
    const githubLink = "https://github.com/riboney/js-discordbot-for-learning";
    return msg.reply(githubLink);
  }
};
