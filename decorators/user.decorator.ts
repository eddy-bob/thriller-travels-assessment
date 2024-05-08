import { createParamDecorator, ExecutionContext } from '@nestjs/common';
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  accessToken: string;
}

// Decorator to access the payload from a validated access token.
// It should be used only in the arguments for methods in your presentation layer.
export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest();
    return req.user as User;
  },
);
