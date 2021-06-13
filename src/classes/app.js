import commandResolver from "./commandResolver";

class App {
  constructor(client) {
    this.client = client;
    this.commandResolver = new commandResolver();
  }
  resolve() {
    return this.commandResolver.resolve();
  }
}
export default App;
