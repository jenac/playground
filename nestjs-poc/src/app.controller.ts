import { Get, Controller } from '@nestjs/common';

import { Logger } from './shared/logger';

@Controller()
export class AppController {
  constructor(private readonly logger: Logger) {}
	@Get()
	root(): string {
    this.logger.instance.info("hello, world");
    return 'Hello World!';
  }
}
