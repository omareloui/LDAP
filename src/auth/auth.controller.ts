import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/')
  async authenticate(@Body() body: AuthDto) {
    const { username, password } = body;
    const user = await this.authService.auth({
      username,
      password,
    });

    return { authentacted: user };
  }
}
