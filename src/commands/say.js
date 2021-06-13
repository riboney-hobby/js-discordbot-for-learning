function say(msg) {
  let body = msg.content.split(" ").splice(1).join(" ");
  msg.channel.send(body);
}
exports.say = say;
