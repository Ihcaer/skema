import { Controller } from '@nestjs/common';
import { UrlManagerService } from '@url-manager/service/url-manager.service';

@Controller('url-manager')
export class UrlManagerController {
  constructor(private readonly urlManagerService: UrlManagerService) { }
}
