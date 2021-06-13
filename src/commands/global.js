const Helper = require("../classes/Helper");

function say(msg) {
  let text = Helper.commandText(msg);
  msg.channel.send(text);
}

function fire(msg) {
  msg.react("🔥");
}

function reply(msg) {
  let text = Helper.commandText(msg);
  msg.reply(text);
}
exports.say = say;
exports.fire = fire;
exports.reply = reply;
