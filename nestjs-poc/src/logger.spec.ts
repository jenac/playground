import { logger } from './logger';
import { expect } from 'chai';
import 'mocha';
import { unlink, unlinkSync } from 'fs';

describe('Hello function', () => {
  it('should return hello world', (done) => {
      
      unlinkSync("./*.log");
    // logger.instance.error('haha');
    done();
  });

});