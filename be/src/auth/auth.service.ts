import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignInDto, SignUpDto } from 'src/dto/auth';
import {
  SigninResponse,
  SignupResponse,
} from 'src/response/response.interface';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(payload: SignUpDto): Promise<SignupResponse> {
    const userExists = await this.usersService.countByUsername(
      payload.username,
    );
    if (userExists > 0) {
      throw new HttpException(
        `username '${payload.username}' already exists.`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }

    let user;
    try {
      payload.password = await this.genPassword(payload.password);
      user = await this.usersService.create(payload);
    } catch (error) {
      throw new HttpException(`Bad request.`, HttpStatus.BAD_REQUEST);
    }

    const token = await this.genToken(user);
    const res: SignupResponse = {
      data: {
        name: user.name,
        username: user.username,
      },
      access_token: token,
    };

    return res;
  }

  async signIn(payload: SignInDto): Promise<SigninResponse> {
    const user = await this.usersService.findByUsername(payload.username);
    if (user === null) {
      throw new HttpException(
        `Username '${payload.username}' is not found.`,
        HttpStatus.NOT_FOUND,
      );
    }

    const isMatch = await bcrypt.compare(payload.password, user.password);
    if (!isMatch) {
      throw new HttpException(
        `Incorect username or password.`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }

    const token = await this.genToken(user);
    const res: SignupResponse = {
      data: {
        name: user.name,
        username: user.username,
      },
      access_token: token,
    };

    return res;
  }

  private async genPassword(value: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(value, salt);
    return hash;
  }

  private async genToken(payload: any): Promise<string> {
    payload = JSON.parse(JSON.stringify(payload));
    delete payload.password;
    const token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    return token;
  }
}
