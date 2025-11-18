import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import enabledModules from './config/feature-flags.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      envFilePath: '.env.local',
    }),
    ...enabledModules,
  ],
})
export class AppModule {}
