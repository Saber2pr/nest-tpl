import { ApiProperty } from '@nestjs/swagger';

export class GetWordDto {
  @ApiProperty({ required: false, description: '前缀' })
  prefix: string;
}
