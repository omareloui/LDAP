import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthDto, AuthSearchDto } from './auth.dto';
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

  @Get('/search')
  async search(@Body() body: AuthSearchDto) {
    const { email } = body;
    await this.authService.search({ email });
  }
}
