import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  HttpStatus,
  HttpCode,
  Header,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { SignUpDto, SignInDto } from 'src/dto/auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-Type', 'application/json')
  signUp(@Body() body: SignUpDto) {
    return this.authService.signUp(body);
  }

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  @Header('Content-Type', 'application/json')
  signIn(@Body() body: SignInDto) {
    return this.authService.signIn(body);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  getMe(@Request() req) {
    const user = req.user;
    delete user.iat;
    delete user.exp;
    return user;
  }
}
