import { Test, TestingModule } from '@nestjs/testing';
import { UrlManagerController } from './url-manager.controller';
import { UrlManagerService } from '@url-manager/service/url-manager.service';

const mockUrlManagerService = {
  createUrlRedirect: jest.fn(),
};

describe('UrlManagerController', () => {
  let controller: UrlManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrlManagerController],
      providers: [
        { provide: UrlManagerService, useValue: mockUrlManagerService },
      ],
    }).compile();

    controller = module.get<UrlManagerController>(UrlManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
