import { Module } from '@nestjs/common';
import { Logger } from './logger';

@Module({
    components: [ Logger ],
    exports: [ Logger ],
})

export class SharedModule {}