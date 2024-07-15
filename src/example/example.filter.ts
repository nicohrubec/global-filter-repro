import { ArgumentsHost, BadRequestException, Catch } from '@nestjs/common';
import { ExampleException } from './example.exception';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch(ExampleException)
export class ExampleFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    if (exception instanceof ExampleException) {
      return super.catch(new BadRequestException(exception.message), host);
    }
    return super.catch(exception, host);
  }
}
