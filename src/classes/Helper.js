class Helper {
  static commandText(msg) {
    return msg.content.split(" ").splice(1).join(" ");
  }
  static command(msg) {
    return msg.content.split(" ")[0];
  }
}

module.exports = Helper;
