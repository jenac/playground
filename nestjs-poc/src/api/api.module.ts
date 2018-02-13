import { Module } from "@nestjs/common";
import { AccountController } from "./account.controller";
import { UserController } from "./user.controller";
@Module({
    imports: [],
    controllers: [ AccountController, UserController ],
    exports: []
})
export class ApiModule { }