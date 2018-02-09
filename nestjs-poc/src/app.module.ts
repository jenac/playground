import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SharedModule } from './shared/shared.module';
import { MessagesModule } from './messages/messages.module';
import { BotModule } from './bot/bot.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    SharedModule, 
    MessagesModule, 
    AuthModule, 
    // BotModule,
   ],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
