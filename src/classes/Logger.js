class Logger {
  getTime() {
    return new Date().toLocaleTimeString();
  }

  getDate() {
    return new Date().toLocaleDateString();
  }

  now() {
    return new Date().toLocaleString();
  }

  messageSent(msg, text) {
    console.log(`Sent a '${text} to ${msg.author.username}' at ${this.now()}`);
  }

  messageReply(msg) {
    console.log(`Replied to to ${msg.author.username}' at ${this.now()}`);
  }
}
module.exports = Logger;
