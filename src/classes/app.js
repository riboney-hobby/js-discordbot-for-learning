const CommandResolver = require("./CommandResolver");

class App {
  constructor() {
    this.commandResolver = new CommandResolver();
  }
  resolve() {
    return this.commandResolver.resolve();
  }
}
module.exports = App;
