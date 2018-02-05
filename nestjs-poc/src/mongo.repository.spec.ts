import { logger } from './logger';
import { expect } from 'chai';
import 'mocha';

import * as mongo from 'mongodb'

describe('Hello function', () => {
  it('should return hello world', (done) => {
      
    test();
    done();
  });

});

async function test() {
    const db   = await mongo.MongoClient.connect('mongodb://localhost:27017/');
    // await db.db("test").collection('Movies').drop();
    await db.db("test").collection('Movies').insertMany([
      { name: 'Enter the Dragon' },
      { name: 'Ip Man' },
      { name: 'Kickboxer' }
    ]);
  
    // Don't `await`, instead get a cursor
    const cursor = db.db("test").collection('Movies').find();
    // Use `next()` and `await` to exhaust the cursor
    for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
      console.log(doc.name);
    }
}