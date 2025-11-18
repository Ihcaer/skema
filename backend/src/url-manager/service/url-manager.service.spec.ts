import { Test, TestingModule } from '@nestjs/testing';
import { UrlManagerService } from './url-manager.service';
import { PrismaService } from '@prisma/prisma.service';

const mockPrismaService = {
  urlManagerRedirect: {
    upsert: jest.fn(),
  },
};

describe('UrlManagerService', () => {
  let service: UrlManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UrlManagerService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<UrlManagerService>(UrlManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
