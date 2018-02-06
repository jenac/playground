import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
@Module({
    imports: [SharedModule],
    components: [MessagesService],
    controllers: [MessagesController],
    exports: [ MessagesController ]
})
export class MessagesModule {}
