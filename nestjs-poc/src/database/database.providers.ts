import * as mongo from 'mongodb';

export const databaseProviders = [{
    provide: 'MongoConnectionToken',
    useFactory: async (): Promise<mongo.Db> => {
        let client: mongo.MongoClient = await mongo.MongoClient.connect('mongodb://localhost:27017/');
        console.log('mongo connected');
        return client.db('test8');
    }
}]

