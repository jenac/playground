import { Component } from '@nestjs/common';
import * as mongo from 'mongodb';

@Component()
export class MongoRepository {
  public db: mongo.Db;
  public client: mongo.MongoClient;
  
  public async connect(url: string, database: string) {
    this.client  = await mongo.MongoClient.connect(url);
    this.db = this.client.db(database);
  }

  async close(): Promise<void> {
    await this.client.close();
  }

  async upsertMessage(message: any) : Promise<any> {
    message._id = message.MsgId;
    return await this.db.collection('bot_messages').save(message);
  }

  async findAllMessage(): Promise<any[]> {
    return await this.db.collection('bot_messages').find().toArray();
  }
}
// export let mongoRepository = new MongoRepository();