import { Route } from '@angular/router';

import { BotComponent } from './bot.component';

export const botRoute: Route = {
    path: 'bot',
    component: BotComponent,
    data: {
        pageTitle: 'bot.title'
    }
};
