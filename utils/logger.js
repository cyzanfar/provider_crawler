const dotenv = require('dotenv');
const winston = require('winston');
const { format } = require('winston')
const { combine, timestamp, json } = format;
const CloudWatchTransport = require('winston-aws-cloudwatch');

dotenv.config();

const NODE_ENV = process.env.NODE_ENV || 'development';
console.log(process.env.AWS_ACCESS_ID)
const logger = new winston.createLogger({
    level: 'info',
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        json()
    ),
    defaultMeta: { service: 'provider-signup-crawler' },
    transports: [
        new CloudWatchTransport({
            logGroupName: 'provider-crawler',
            logStreamName: `crawler-log-${NODE_ENV}`,
            createLogGroup: false,
            createLogStream: true,
            batchSize: 20,
            handleExceptions: true,
            awsConfig: {
                accessKeyId: process.env.AWS_ACCESS_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                region: process.env.AWS_REGION
            },
            formatLog: item => {
                return `${item.level}: ${item.message} ${JSON.stringify(item.meta)}`
            }
        })
    ]
});



// transports: [
//     new transports.File({ filename: 'error.log', level: 'error' }),
//     new transports.File({ filename: 'combined.log' }),
// ],
// exceptionHandlers: [
//     new transports.File({ filename: 'error.log', level: 'error' }),
// ]
//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//

module.exports = {
    logger
};