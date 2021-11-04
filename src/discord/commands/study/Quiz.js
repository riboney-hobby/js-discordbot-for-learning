const { Command } = require("discord.js-commando");
const prefix = process.env.COMMAND_PREFIX;

module.exports = class Quiz extends Command {
  /**
   *
   * @param {Object} client
   */
  constructor(client) {
    super(client, {
      name: "quiz",
      alias: ["q"],
      description: "Starts quiz",
      group: "study",
      memberName: "quiz",
      examples: [`${prefix}quiz`],
    });
  }

  /**
   *
   * @param {object} msg - CommandoMessage
   */
  async run(msg) {
    return msg.reply("Work in progress!");
  }
};
