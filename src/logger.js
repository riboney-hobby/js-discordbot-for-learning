const winston = require('winston');
const path = require('path');
require('winston-daily-rotate-file');

const {createLogger, transports, format} = winston;

const {combine, printf, timestamp} = format;

const logsPath = path.resolve(__dirname, 'logs') + path.sep;
const env = process.env.NODE_ENV;


const defaultFormat = combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss (Z)',
    }),
    format.errors({stack: true})
    ,
    format.metadata({
      fillExcept: ['timestamp', 'service', 'level', 'message', 'stack'],
    }),

);

const consoleFormat = printf(({timestamp, level, message, metadata, stack}) => {
  const metadataString = Object.entries(metadata).length !== 0 ?
    'Meta: ' + JSON.stringify(metadata) : '';
  let logMsg = `${timestamp} [ ${level} ] : ${message}`;

  if (stack || metadataString) {
    logMsg += ` - ${stack ? stack : ''} ${metadataString}`;
  }


  return logMsg;
});


const loggerConfig = {
  level: env === 'production' ? 'info' : 'debug',
  format: combine(defaultFormat,
      format.json()),
  transports: [
    new transports.Console({
      format: combine(
          consoleFormat,
          format.colorize({all: true})),
    }),
    new transports.DailyRotateFile({
      filename: logsPath + `logs-%DATE%.log`,
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
    new transports.DailyRotateFile({
      level: 'error',
      filename: logsPath + `errors-%DATE%.log`,
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
};

module.exports = createLogger(loggerConfig);
