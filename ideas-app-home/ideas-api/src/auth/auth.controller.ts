import { Controller, Post, Body, UsePipes, Get, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { async } from "rxjs/internal/scheduler/async";
import { CredDTO } from "./cred.dto";
import { ValidationPipe } from "src/shared/validation.pipe";
import { AuthGuard } from "src/shared/auth.guard";

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth/register')
  @UsePipes(ValidationPipe)
  async register(@Body() cred: CredDTO) {
    return await this.authService.register(cred);
  }

  @Post('auth/login')
  @UsePipes(ValidationPipe)
  async login(@Body() cred: CredDTO) {
    return await this.authService.login(cred);
  }

  @Get('auth/whoami')
  @UseGuards(AuthGuard)
  async me() {
    return 'not implemented'
  }
}