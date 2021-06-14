const Helper = require("../classes/Helper");
const axios = require("axios");

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

function quote(msg) {
  let randomPage = Helper.getRandomNumber(1, 72672);
  axios
    .get(
      "https://quote-garden.herokuapp.com/api/v3/quotes?limit=1&page=" +
        randomPage
    )
    .then((resp) => resp.data.data[0])
    .then((data) => {
      msg.channel.send(
        `A Quote about ${data.quoteGenre} 🔥\n${data.quoteText}\n    -**${data.quoteAuthor}**`
      );
    })
    .catch((err) => err);
}

exports.say = say;
exports.fire = fire;
exports.reply = reply;
exports.quote = quote;
