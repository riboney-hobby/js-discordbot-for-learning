const BotClient = require("../discord/BotClient.js");
const logger = require("../logger.js");
const path = require("path");

// project root path
const projectRoot = () => {
  const currentPathArr = __dirname.split("/");
  const indexOfSrc = currentPathArr.findIndex((item) => item === "src") + 1;
  const projectRootArr = currentPathArr.slice(1, indexOfSrc);
  return projectRootArr.join("/");
};

const config = {
  botToken: process.env.BOT_TOKEN,
};

const activity = {
  name: process.env.ACTIVITY_NAME,
  type: process.env.ACTIVITY_TYPE,
};

const presenceData = {
  activity: activity,
};

const client = new BotClient(config);

client.on("ready", () => {
  logger.info("Logged in!");
  client.user.setPresence(presenceData);
});

client.registry
  .registerDefaultTypes()
  .registerGroups([["bot-info", "Info on bot"]])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join("/", projectRoot(), "discord/commands/"));

module.exports = client;
