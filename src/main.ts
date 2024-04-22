import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { LoginGuard } from './login.guard';
// import { NextFunction } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.use(function (req: Request, res: Response, next: NextFunction) {
  //   console.log('before', req.url);
  //   next();
  //   console.log('after');
  // });
  // app.useGlobalGuards(new LoginGuard());

  await app.listen(3000);
  console.log('Application is running on: http://localhost:3000');
}
bootstrap();
