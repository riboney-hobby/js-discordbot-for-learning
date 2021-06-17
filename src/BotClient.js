const { Client, Collection } = require("discord.js");
const fs = require("fs/promises");
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
   * Loads the commands assuming that the commands folder contains folders only, with commands inside them.
   * @param {*} commandsPath - Path to the commands folder
   */
  async loadCommands(commandsPath) {
    try {
      const commandFolders = await fs.readdir(commandsPath);

      for (const folder of commandFolders) {
        const commandFiles = (
          await fs.readdir(path.resolve(commandsPath, folder))
        ).filter((file) => file.endsWith(".js"));

        for (const file of commandFiles) {
          const command = require(path.resolve(commandsPath, folder, file));
          this.commands.set(command.name, command);
        }
      }
    } catch (err) {
      console.error(
        `An error occured while loading commands from commands folder: ${err}`
      );
    }
  }

  /**
   * Loads the events.
   * @param {*} eventsPath
   */
  async loadEvents(eventsPath) {
    try {
      const eventFiles = await (
        await fs.readdir(eventsPath)
      ).filter((file) => file.endsWith(".js"));

      for (const file of eventFiles) {
        const event = require(path.resolve(eventsPath, file));

        if (event.once) {
          this.once(event.name, (...args) => event.execute(...args, this));
        } else {
          this.on(event.name, (...args) => event.execute(...args, this));
        }
      }
    } catch (err) {
      console.error(
        `An error occured while loading events from events folder: ${err}`
      );
    }
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
