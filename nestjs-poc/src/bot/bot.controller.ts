import { Controller, Inject, Post, Get, Body } from '@nestjs/common';
import { BotMessage } from './bot.message';
import * as wechat from 'wechat4u';
@Controller('bot')
export class BotController {
    constructor(@Inject('Wechat4uToken') private readonly bot: wechat) {

    }

    @Get()
    async state(): Promise<any[]> {
        return this.bot.contacts;
    }

    @Post()
    async send(@Body() message: BotMessage): Promise<any> {
        return this.bot.sendMsg(message.text, message.to);
    }
}