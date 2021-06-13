const Helper = require("../classes/Helper");

function pin(msg) {
  let text = Helper.commandText(msg);
  msg.channel.send(text).then((msg) => msg.pin());
}

exports.pin = pin;
