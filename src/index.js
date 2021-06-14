const Discord = require("discord.js");
const App = require("./classes/App");
require("dotenv").config();

const { say, fire, reply } = require("./commands/global");
const { pin } = require("./commands/admin");

const client = new Discord.Client();
const app = new App();

client.once("ready", () => console.log("Ready!"));

client.login(process.env.BOT_TOKEN);

// ----------- Command Section -----------

// ------ Global Section ------
app.commandResolver.addGlobalCommand("say", say);
app.commandResolver.addGlobalCommand("fire", fire);
app.commandResolver.addGlobalCommand("reply", reply);

// ------ Admin Section ------
app.commandResolver.addAdminCommand("pin", pin);

// ----------- Event Section -----------
client.on("message", (msg) => {
  if (msg.author.bot) return;
  app.resolve(msg);
});
