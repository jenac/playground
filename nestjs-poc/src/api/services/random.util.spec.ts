import { RandomUtil } from './random.util';
import { assert } from 'chai';
import 'mocha';

//mocha -r ts-node/register src/api/services/random.util.spec.ts --timeout 60000

describe('Password Encoder', () => {
  let util = new RandomUtil();
  it('should generate strings', (done) => {
      let set  = new Set();
      for(let i = 0; i< 1000000; i++) {
        let key: string = util.generateKeyImpl();
        if (set.has(key)) {
            console.log("duplicate keys generated");
            assert(false);
        } else {
            set.add(key);
        }
      }
    done();
  });
});