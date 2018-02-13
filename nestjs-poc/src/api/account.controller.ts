import { Controller, Get } from "@nestjs/common";

@Controller("api")
export class AccountController {

    //get self with token?
    @Get("account")
    async getAccount() {
      return { message: "hello, world" }
    }
}