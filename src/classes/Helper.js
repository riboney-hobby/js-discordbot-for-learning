class Helper {
  static commandText(msg) {
    return msg.content.split(" ").splice(1).join(" ");
  }
  static command(msg) {
    return msg.content.split(" ")[0];
  }
  static getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

module.exports = Helper;
