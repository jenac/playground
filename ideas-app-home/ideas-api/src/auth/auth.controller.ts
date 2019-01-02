import { Controller, Post, Body, UsePipes } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { async } from "rxjs/internal/scheduler/async";
import { CredDTO } from "./cred.dto";
import { ValidationPipe } from "src/shared/validation.pipe";

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @UsePipes(ValidationPipe)
  async register(@Body() cred: CredDTO) {
    return await this.authService.register(cred);
  }

  @Post('login')
  @UsePipes(ValidationPipe)
  async login(@Body() cred: CredDTO) {
    return await this.authService.login(cred);
  }
}