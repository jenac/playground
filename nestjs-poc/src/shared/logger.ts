import { Component } from '@nestjs/common'
import * as winston from 'winston';
require('winston-daily-rotate-file');

@Component()
export class Logger {
    instance: winston.LoggerInstance;
    constructor() {
        let fileTransport: winston.DailyRotateFileTransportInstance = new winston.transports.DailyRotateFile({
            filename: './bot.log',
            datePattern: 'yyyy-MM-dd.',
            prepend: true,
            level: process.env.ENV === 'development' ? 'debug' : 'info'
        });

        this.instance = new winston.Logger(
            {
                transports: [
                    new winston.transports.Console(),
                    fileTransport
                ]
            }
        )
    }
}

// export let logger = new Logger();
