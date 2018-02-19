import { Component, OnInit } from '@angular/core';

import { JhiBotService } from './bot.service';

@Component({
    selector: 'jhi-bot',
    templateUrl: './bot.component.html'
})
export class JhiBotComponent implements OnInit {
    allBot: any = null;
    bot: any = null;
    configKeys: any[];
    filter: string;
    orderProp: string;
    reverse: boolean;

    constructor(
        private botService: JhiBotService
    ) {
        this.configKeys = [];
        this.filter = '';
        this.orderProp = 'prefix';
        this.reverse = false;
    }

    keys(dict): Array<string> {
        return (dict === undefined) ? [] : Object.keys(dict);
    }

    ngOnInit() {
        this.botService.get().subscribe((bot) => {
            this.bot = bot;

            for (const config of bot) {
                if (config.properties !== undefined) {
                    this.configKeys.push(Object.keys(config.properties));
                }
            }
        });

        this.botService.getEnv().subscribe((bot) => {
            this.allBot = bot;
        });
    }
}
