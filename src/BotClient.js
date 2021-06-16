const { Client, Collection } = require("discord.js");
const fs = require("fs");
const path = require("path");

/**
 * Bot client class
 */
class BotClient extends Client {
  /**
   * Create an instance of the Bot
   * @param {Object} config - The bot's config settings.
   * @param {*} options - The Discord client options.
   */
  constructor(config, options) {
    super(options);
    this.config = config;
    this.commands = new Collection();
    this.cooldowns = new Collection();
  }

  /**
   * Loads the commands
   * @param {*} commandsPath
   */
  async loadCommands(commandsPath) {
    fs.readdir(commandsPath, (err, commandFolders) => {
      if (err) return console.error(err);

      commandFolders.forEach((folder) => {
        fs.readdir(path.resolve(commandsPath, folder), (err, commandFiles) => {
          if (err) return console.error(err);
          const javaScriptFiles = commandFiles.filter((file) =>
            file.endsWith(".js")
          );

          javaScriptFiles.forEach((file) => {
            const command = require(path.resolve(commandsPath, folder, file));

            this.commands.set(command.name, command);
          });
        });
      });
    });

    return;
  }

  /**
   * Loads the events.
   * @param {*} eventsPath
   */
  async loadEvents(eventsPath) {
    return;
  }

  /**
   * Logs the bot in.
   * @return {*} promise
   */
  login() {
    return super.login(this.config.botToken);
  }
}

module.exports = BotClient;
