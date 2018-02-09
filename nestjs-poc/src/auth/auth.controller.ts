import { Controller, Post, HttpStatus, HttpCode, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('token')
  @HttpCode(HttpStatus.OK)
  public async getToken() {
    return await this.authService.createToken();
  }

  @Get('authorized')
  public async authorized() {
    console.log('Authorized route...');
  }
  /*
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imh0eHgyMDA5QGdtYWlsLmNvbSIsImlhdCI6MTUxODE4NDE5MSwiZXhwIjoxNTE4MTg3NzkxfQ.ID2ugFAXropOuSBytlIi77IjKt-jQEYYXASprXUG-N
*/
}