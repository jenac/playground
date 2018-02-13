import { Controller, Get, Post, Body, HttpCode, Param } from "@nestjs/common";
import { UserDTO } from "./models/user.dto";
import { ManagedUserVM } from "./models/manage.user.vm";
import { HTTP_CREATED } from "./api.constants";
import { KeyAndPasswordVM } from "./models/key.password.vm";

@Controller("api")
export class AccountController {

  @Post("register")
  @HttpCode(HTTP_CREATED)
  async registerAccount( @Body() managedUserVM: ManagedUserVM): Promise<void> {

  }

  @Get("activate")
  async activateAccount( @Param("key") key: String): Promise<void> {
  }

  @Get("/authenticate")
  async isAuthenticated(): Promise<string> {
    return 'admin'
  }

  @Get("/account")
  async getAccount(): Promise<UserDTO> {
    return null
  }

  @Post("/account")
  async saveAccount( @Body() userDTO: UserDTO): Promise<void> {

  }

  @Post("account/change-password")
  async changePassword( @Body() password: string): Promise<void> {

  }

  @Post("account/reset-password/init")
  async requestPasswordReset( @Body() mail: string): Promise<void> {

  }

  @Post("account/reset-password/finish")
  async finishPasswordReset( @Body() keyAndPassword: KeyAndPasswordVM): Promise<void> {

  }
}

