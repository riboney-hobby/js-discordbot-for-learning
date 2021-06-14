const Logger = require("./Logger");
const Helper = require("./Helper");
require("dotenv").config();

class CommandResolver {
  #commandPrefix = process.env.COMMAND_PREFIX || "?";
  #commands = {
    admin: {},
    global: {},
  };
  #userCommand = "";
  #msg = null;

  constructor() {
    this.logger = new Logger();
  }

  #addCommand(command, callback) {
    command = command.split(".");
    this.#commands[command[0]] = {
      ...this.#commands[command[0]],
      [command[1]]: callback,
    };
  }

  #runCallback(command) {
    command = command.split(".");
    return this.#commands[command[0]][command[1]](this.#msg);
  }

  addAdminCommand(command, callback) {
    this.#addCommand(`admin.${command}`, callback);
  }

  addGlobalCommand(command, callback) {
    this.#addCommand(`global.${command}`, callback);
  }

  getCommands() {
    return this.#commands;
  }

  isAdmin(msg) {
    return msg.member.hasPermission("ADMINISTRATOR");
  }

  isCommand(msg) {
    if (this.#commandPrefix !== msg.content[0]) return false;
    this.#msg = msg;
    const msgSplitted = msg.content.toLowerCase().split(" ")[0];
    this.#userCommand = msgSplitted.slice(1);
    return true;
  }

  resolve(msg) {
    if (!this.isCommand(msg)) {
      // This is not a command
    }

    if (this.#commands["global"].hasOwnProperty(this.#userCommand)) {
      this.#runCallback(`global.${this.#userCommand}`);
    }

    if (this.#commands["admin"].hasOwnProperty(this.#userCommand)) {
      if (!this.isAdmin(msg)) {
        msg.reply("You don't have permission to do that!");
      }
      this.#runCallback(`admin.${this.#userCommand}`);
    }
    // Command doesn't exist
    msg.reply(`${Helper.command(msg)} doesn't exist!`);
  }
}
module.exports = CommandResolver;
