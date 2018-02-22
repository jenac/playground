import { Component, OnInit } from '@angular/core';

import { BotService } from './bot.service';
import { BotState } from './bot.model';

@Component({
    selector: 'jhi-bot',
    templateUrl: './bot.component.html',
    styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {
    botState: BotState;
    constructor(private botService: BotService) { }
    ngOnInit() {
        // this.botService.getEnv().subscribe((bot) => {
        //     this.allBot = bot;
        // });
        this.botState = {
            loginUrl: 'https://finance.google.com',
            state: 'login'
        };
    }
}
