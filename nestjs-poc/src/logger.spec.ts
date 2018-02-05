import { logger } from './logger';
import { expect } from 'chai';
import 'mocha';

describe('Hello function', () => {
  it('should return hello world', (done) => {
      
    logger.instance.error('haha');
    done();
  });

});