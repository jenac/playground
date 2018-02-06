import { Logger } from './logger';
import { expect } from 'chai';
import 'mocha';

describe('Hello function', () => {
  it('should return hello world', (done) => {
    let logger = new Logger();
    logger.instance.error('haha');
    done();
  });

});