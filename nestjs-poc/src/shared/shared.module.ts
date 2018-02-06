import { Module } from '@nestjs/common';
import { Logger } from './logger';
import { MongoRepository } from './mongo.repository';

@Module({
    components: [ Logger, MongoRepository ],
    exports: [ Logger, MongoRepository ],
})

export class SharedModule {}