import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './user/user.module';
import { TypeormModule } from './typeorm/typeorm.module';
import { AuthModule } from './auth/auth.module';
import { ConfigProjectModule } from './config/config.module';

@Module({
  imports: [
    ConfigProjectModule,
    TypeormModule.forRoot(),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
