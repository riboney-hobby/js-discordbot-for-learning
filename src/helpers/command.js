class Command {
  /**
   * check if author of the message is admin
   * @param  {} msg
   * @returns  {boolean}
   */
  isAdmin(msg) {
    return msg.member.hasPermission("ADMINISTRATOR");
  }

  /**
   * return command - example: ?say hello => ?say
   * @param  {} msg
   * @returns  {string}
   */
  command(msg) {
    return msg.content.split(" ")[0];
  }
  /**
   * return command message - example: ?say hello => hello
   * @param    {} msg
   * @returns  {string}
   */
  commandMessage(msg) {
    return msg.content.split(" ").splice(1).join(" ");
  }
}
module.exports = new Command();
