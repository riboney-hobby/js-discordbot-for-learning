const { Command } = require("discord.js-commando");
const prefix = process.env.COMMAND_PREFIX;
const db = require("../../../crud.js");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
function getRandomId(max) {
  return Math.floor(Math.random() * (max) + 1);
}


module.exports = class VocabCommand extends Command {
  /**
   *
   * @param {Object} client
   */
  constructor(client) {
    super(client, {
      name: "vocab",
      alias: ["vocabulary", "v"],
      description: "Starts vocabulary review",
      group: "study",
      memberName: "vocab",
      examples: [`${prefix}vocab`],
    });
  }

  /**
   *
   * @param {object} msg - CommandoMessage
   */
  async run(msg) {
    const response = await db(getRandomId(3));
    const reply = `${response.term}\n||${response.definition}||`;
    await msg.reply(reply);
  }
};
