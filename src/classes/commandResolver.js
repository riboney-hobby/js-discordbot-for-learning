class CommandResolver {
  #commandPrefix = "?"; //process.env.COMMAND_PREFIX
  #commands = {};
  #userCommand = "";

  addAdminCommand(command, callback) {
    this.#commands["admin"][command] = () => {
      return callback;
    };
  }

  addGlobalCommand(command, callback) {
    this.#commands["global"][command] = () => {
      return callback;
    };
  }

  getCommands(command = null) {
    if (command) return this.#commands[command];
    return command;
  }

  isAdmin(msg) {
    return msg.member.hasPermission("ADMINISTRATOR");
  }

  msgCommand(msg) {
    return msg.content.toLowerCase().startsWith();
  }

  isCommand(msg) {
    if (this.#commandPrefix !== msg.content[0]) return;
    msgSplitted = msg.content.toLowerCase().split(" ")[0];
    this.#userCommand = msgSplitted.slice(1);
  }

  resolve(msg) {
    if (isCommand(msg)) return;
    if (this.#commands["global"].hasOwnProperty(this.#userCommand)) {
      return this.#commands[this.#userCommand];
    }
    if (this.#commands["admin"].hasOwnProperty(this.#userCommand)) {
      if (!this.isAdmin(msg)) {
        // Todo You are not admin
      }
      return this.#commands["admin"];
    }
    // Todo This command does not exist!
  }
}
export default CommandResolver;
