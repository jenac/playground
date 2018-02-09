import { Get, Controller, Logger as Logger2 } from '@nestjs/common';

import { Logger} from './shared/logger';

@Controller()
export class AppController {
  constructor(private readonly logger: Logger) {}
	@Get()
	root(): string {
    let s = new Logger2("kkk", true);
    s.log('waht?');
    this.logger.instance.info("hello, world");
    return 'Hello World!';
  }
}
