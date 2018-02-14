import { Component } from "@nestjs/common";
import * as bcrypt from "bcrypt";
@Component()
export class PasswordEncoder {
    private static readonly saltRounds = 10;
    encode(rawPassword: string): string {
        return bcrypt.hashSync(rawPassword, PasswordEncoder.saltRounds);
    }
    
    matches(rawPassword: string, encodedPassword: string): boolean {
        return bcrypt.compareSync(rawPassword, encodedPassword);
    }
}