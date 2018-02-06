import { Controller, Inject, Post } from '@nestjs/common';
import * as wechat from 'wechat4u';
@Controller('bot')
export class BotController {
    constructor(@Inject('Wechat4uToken') private readonly bot: wechat) {

    }

    @Post()
    async send(message: any): Promise<any> {
        return this.bot.sendMsg('', '');
    }
}