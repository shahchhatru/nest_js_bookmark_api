import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authservice: AuthService) {}
// auth/signup 
  @Post('signup')
  signup(@Body() dto:AuthDto) {
    return this.authservice.signup(dto);
  }
//auth/signin
  @Post('signin')
  signin(){
    return this.authservice.signin();
  }
}
