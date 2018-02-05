import * as winston from 'winston';
require('winston-daily-rotate-file');

class Logger {
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

    

    //         this.transport = new winston.transports.DailyRotateFile({
    //             filename: './bot.log',
    //             datePattern: 'yyyy-MM-dd.',
    //             prepend: true,
    //             level: process.env.ENV === 'development' ? 'debug' : 'info'
    //         });

    //         this.instance = new (winston.Logger)({
    //             transports: [
    //                 new (winston.transports.Console)(),
    //                 this.transport
    //             ]
    //         });
}

export let logger = new Logger();
// -------------
// import * as winston from 'winston';
// // winston.level  = 'debug';

// class Logger {
//   private name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   debug(format: string, ...params: any[]) {
//     winston.log.apply(this, ['debug', this.name + ' - ' + format].concat(params));
//   }

//   info(format: string, ...params: any[]) {
//     winston.log.apply(this, ['info', this.name + ' - ' + format].concat(params));
//   }

//   warn(format: string, ...params: any[]) {
//     winston.log.apply(this, ['warn', this.name + ' - ' + format].concat(params));
//   }

//   error(format: string, ...params: any[]) {
//     winston.log.apply(this, ['error', this.name + ' - ' + format].concat(params));
//   }
// }

// export default function(name: string) {
//   return new Logger(name);
// }