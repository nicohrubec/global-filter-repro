import { BadRequestException, Controller, Get } from '@nestjs/common';
import { ExampleException } from './example.exception';

@Controller()
export class ExampleController {
  constructor() {}

  @Get('/exampleError')
  throwExampleError(): string {
    throw new ExampleException();
  }

  @Get('/error')
  throwError(): string {
    throw new BadRequestException();
  }
}
