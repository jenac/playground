import { Component, Inject } from '@nestjs/common';
import * as mongo from 'mongodb';

@Component()
export class MongoRepository {

  constructor(@Inject('MongoConnectionToken') private readonly db: mongo.Db) {}

  async upsertMessage(message: any) : Promise<any> {
    message._id = message.MsgId;
    return await this.db.collection('bot_messages').save(message);
  }

  async findAllMessage(): Promise<any[]> {
    return await this.db.collection('bot_messages').find().toArray();
  }
}
