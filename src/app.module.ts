import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { ConfigModule } from '@nestjs/config';
import { AuthzModule } from './authz/authz.module';
import { GamblerModule } from './gamblers/gambler.module';

@Module({
  imports: [HealthModule, ConfigModule.forRoot(), AuthzModule, GamblerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
