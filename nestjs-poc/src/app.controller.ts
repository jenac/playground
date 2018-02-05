import { Get, Controller } from '@nestjs/common';

import { logger } from './logger';

@Controller()
export class AppController {
	@Get()
	root(): string {
    logger.instance.info("hello, world");
    return 'Hello World!';
  }
}
