import { logger } from './logger';
import * as mongo from 'mongodb'

class MongoRepository {
  public db: mongo.Db;
  public client: mongo.MongoClient;
  public async connect(url: string, database: string) {
    this.client  = await mongo.MongoClient.connect(url);
    this.db = this.client.db(database);
    return this.db;
  }

  public async close() {
    await this.client.close();
  }
}
export let mongoRepository = new MongoRepository();