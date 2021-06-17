/**
 * Config properties from .env
 * @typedef{{
 *  BOT_TOKEN: string,
 *  COMMAND_PREFIX: string
 *  OWNER: string,
 * }}
 */
module.exports = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  COMMAND_PREFIX: process.env.COMMAND_PREFIX,
  OWNER: process.env.OWNER,
};
