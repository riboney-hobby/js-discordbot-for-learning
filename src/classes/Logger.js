class Logger {
  constructor() {
    this.date = new Date();
  }

  getTime() {
    return (
      this.date.getHours() +
      ":" +
      this.date.getMinutes() +
      ":" +
      this.date.getSeconds()
    );
  }

  getDate() {
    return (
      this.date.getDate() +
      "/" +
      (this.date.getMonth() + 1) +
      "/" +
      this.date.getFullYear()
    );
  }

  now() {
    return (
      this.date.getDate() +
      "/" +
      (this.date.getMonth() + 1) +
      "/" +
      this.date.getFullYear() +
      " @ " +
      this.date.getHours() +
      ":" +
      this.date.getMinutes() +
      ":" +
      this.date.getSeconds()
    );
  }
  messageSent(msg, text) {
    console.log(`Sent a '${text} to ${msg.author.username}' at ${this.now()}`);
  }

  messageReply(msg) {
    console.log(`Replied to to ${msg.author.username}' at ${this.now()}`);
  }
}
module.exports = Logger;
