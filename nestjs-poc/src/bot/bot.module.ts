import { Module } from '@nestjs/common';
import { botProviders } from './bot.providers';
import { BotController } from './bot.controller';
import { DatabaseModule } from '../database/database.module';
@Module({
    imports: [ DatabaseModule ],
    controllers: [BotController],
    components: [...botProviders],
    exports: [BotController, ...botProviders],
})
export class BotModule {}