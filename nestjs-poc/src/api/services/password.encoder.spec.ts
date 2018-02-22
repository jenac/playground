import { PasswordEncoder } from './password.encoder';
import { expect } from 'chai';
import 'mocha';

describe('Password Encoder', () => {
  let encoder = new PasswordEncoder();
  let raw = "using the sync mode is perfectly fine.";
  it('should encrypt and match', (done) => {
    let encoded = encoder.encode(raw);
    console.log(encoded);
    expect (encoder.matches(raw, encoded));
    done();
  });

  it('should match old hashes', (done) => {
    expect(encoder.matches(raw, '$2a$10$RhxKIXfhE45SsjF73LAwSez2BDVtVP1wpyQqu33pFQ0mBcIzW6qyi'));
    expect(encoder.matches(raw, '$2a$10$mZCc6FgUfyY2jzLJCv0Ab.4MpKnlDHhkTF05LpWD0drnopC9bUdO6'));
    done();
  });
  

  
});