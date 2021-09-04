import { GetWordDto } from './dto/GetWordDto';
import { HelloGuard } from './../../guards/hello.guard';
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

@Controller('hello')
export class HelloController {
  @ApiOperation({
    description: '获取hello',
  })
  @Get('word')
  @UseGuards(HelloGuard)
  getWord(@Query() query: GetWordDto) {
    query.prefix ??= 'hello';
    return query.prefix + 'world';
  }
}
