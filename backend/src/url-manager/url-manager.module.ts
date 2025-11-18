import { Module } from '@nestjs/common';
import { PrismaModule } from '@prisma/prisma.module';
import { UrlManagerService } from './service/url-manager.service';
import { UrlManagerController } from './controller/url-manager.controller';

@Module({
  imports: [PrismaModule],
  providers: [UrlManagerService],
  controllers: [UrlManagerController],
})
export class UrlManagerModule {}
