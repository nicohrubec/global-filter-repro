import { Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { APP_FILTER } from '@nestjs/core';
import { ExampleFilter } from './example.filter';

@Module({
  imports: [],
  controllers: [ExampleController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ExampleFilter,
    },
  ],
})
export class ExampleModule {}
