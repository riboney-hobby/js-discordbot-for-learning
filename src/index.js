import Discord from "discord.js";
import App from "./classes/app";

const client = new Discord.Client();

client.once("ready", () => console.log("Ready!"));

client.login("ENTER_BOT_TOKEN_HERE");

client.on("message", (msg) => {
  if (msg.author.bot) return;
  if (msg.content.toLowerCase().startsWith("?say")) {
    let args = msg.content.split(" ").slice(1).join(" ");
    msg.channel.send(args);
  }
});
