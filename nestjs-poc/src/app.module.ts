import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SharedModule } from './shared/shared.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [SharedModule, MessagesModule],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
