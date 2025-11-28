import { Module } from '@nestjs/common';
import { PrismaModule } from '@prisma/prisma.module';
import { UrlManagerService } from './service/url-manager.service';

@Module({
  imports: [PrismaModule],
  providers: [UrlManagerService],
  exports: [UrlManagerService],
})
export class UrlManagerModule {}
