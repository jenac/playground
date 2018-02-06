import { Component } from '@nestjs/common';
import { MongoRepository } from '../shared/mongo.repository';
import { Message } from './message';

@Component()
export class MessagesService {
    constructor(private readonly mongoRepository: MongoRepository) {
    }

    async create(message: Message) : Promise<any> {
        return this.mongoRepository.upsertMessage(message);
    }
   
    async findAll(): Promise<Message[]> {
        let messages: any[] = await this.mongoRepository.findAllMessage();
        return messages.map<Message>( (m) => m as Message)
    }
}