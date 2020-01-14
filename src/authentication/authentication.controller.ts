import { Controller, Get } from '@nestjs/common';

@Controller('authentication')
export class AuthenticationController {
  @Get()
  index() {
    return 'hello from auth'
  }
}
