import { Component } from "@nestjs/common";
import * as shortid from "shortid";
import * as Hashids from "hashids";

@Component()
export class RandomUtil {
    static readonly KEY_LENGTH = 8;
    generatePassword(): string {
        return this.generateKeyImpl();
    }

    generateActivationKey(): string {
        return this.generateKeyImpl();
    }

    generateResetKey(): string {
        return this.generateKeyImpl();
    }

    generateKeyImpl(): string {
        let h =  new Hashids(shortid.generate(), RandomUtil.KEY_LENGTH);
        return h.encode(1);
    } 
}