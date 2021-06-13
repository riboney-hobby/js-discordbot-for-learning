const Discord = require("discord.js");

const App = require("./classes/App");
const { say } = require("./commands/say");

const client = new Discord.Client();

client.once("ready", () => console.log("Ready!"));

client.login("YOUR_BOT_TOKEN");

app = new App();
// ----------- Command Section -----------
app.commandResolver.addGlobalCommand("say", say);

// ----------- Event Section -----------
client.on("message", (msg) => {
  if (msg.author.bot) return;
  app.commandResolver.resolve(msg);
});
