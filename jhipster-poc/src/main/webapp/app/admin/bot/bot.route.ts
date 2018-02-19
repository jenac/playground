import { Route } from '@angular/router';

import { JhiBotComponent } from './bot.component';

export const botRoute: Route = {
    path: 'jhi-bot',
    component: JhiBotComponent,
    data: {
        pageTitle: 'bot.title'
    }
};
