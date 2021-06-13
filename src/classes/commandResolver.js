class CommandResolver {
  #commandPrefix = "?"; //process.env.COMMAND_PREFIX
  #commands = {
    admin: {},
    global: {},
  };
  #userCommand = "";
  #msg = null;

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
    const msgSplitted = msg.content.toLowerCase().split(" ")[0];
    this.#userCommand = msgSplitted.slice(1);
    return true;
  }

  resolve(msg) {
    if (!this.isCommand(msg)) {
      // Todo This command does not exist!
    }
    this.#msg = msg;

    if (this.#commands["global"].hasOwnProperty(this.#userCommand)) {
      this.#runCallback(`global.${this.#userCommand}`);
    }

    if (this.#commands["admin"].hasOwnProperty(this.#userCommand)) {
      if (!this.isAdmin(msg)) {
        // Todo You are not admin
      }
      this.#runCallback(`admin.${this.#userCommand}`);
    }
  }
}
module.exports = CommandResolver;
