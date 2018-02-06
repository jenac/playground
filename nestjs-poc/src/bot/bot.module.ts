import { Module } from '@nestjs/common';
import { botProviders } from './bot.providers';
import { BotController } from './bot.controller';
@Module({
    controllers: [BotController],
    components: [...botProviders],
    exports: [BotController, ...botProviders],
})
export class BotModule {}