const CommandResolver = require("./CommandResolver");

class App {
  constructor() {
    this.commandResolver = new CommandResolver();
  }
  resolve(msg) {
    return this.commandResolver.resolve(msg);
  }
}
module.exports = App;
