import { Get, UseGuards, applyDecorators } from '@nestjs/common';
import { Aaa } from './aaa.decorator';
import { AaaGuard } from './aaa.guard';

export function Bbb(path, roles) {
  return applyDecorators(Get(path), Aaa(roles), UseGuards(AaaGuard));
}
