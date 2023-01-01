import { ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import { ExpressRequestInterface } from '@app/types/expressRequest.interface';

export const User = createParamDecorator((data: any, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<ExpressRequestInterface>();
  if (!request.user) {
    return null;
  }
  if (data) {
    //data comes from decorator argument @User('id'). data == 'id'
    return request.user[data];
  }
  return request.user;
});
