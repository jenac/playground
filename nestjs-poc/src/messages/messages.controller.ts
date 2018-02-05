import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}

    @Post()
    async create(@Body() message: any) {
        this.messagesService.create(message);
    }

    @Get()
    async findAll(): Promise<any[]> {
        return this.messagesService.findAll();
    }
}
