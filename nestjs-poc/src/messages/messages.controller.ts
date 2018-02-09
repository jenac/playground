import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MessagesService } from './messages.service'

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}

    @Post()
    async create(@Body() message: any): Promise<any> {
        return this.messagesService.create(message);
    }

    @Get()
    async findAll(): Promise<any[]> {
        return this.messagesService.findAll();
    }
}
