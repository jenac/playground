import { Module } from '@nestjs/common';
import { Logger } from './logger';
import { MongoRepository } from './mongo.repository';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [ DatabaseModule ],
    components: [ Logger, MongoRepository ],
    exports: [ Logger, MongoRepository ],
})

export class SharedModule {}